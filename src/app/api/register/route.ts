import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Disable static rendering so env vars are read at request time
export const dynamic = "force-dynamic";

interface JobEntry {
  id: string;
  titel: string;
  beschreibung: string;
  anstellungsart: string;
}

interface RegisterPayload {
  website?: string; // Honeypot — must be empty
  suchkategorien: string[];
  branche: string;
  brancheSonstiges: string;
  schnuppertage: boolean | null;
  boysGirlsday: boolean | null;
  arbeitszeitModelle: string[];
  arbeitszeiten: string[];
  arbeitsmodell: string[];
  faehigkeiten: string[];
  benefits: string[];
  eigeneBenefits: string[];
  stellenModus: "liste" | "url";
  stellen: JobEntry[];
  bewerbungslink: string;
  unternehmensname: string;
  ansprechpartner: string;
  email: string;
  telefon: string;
}

function yesNo(v: boolean | null) {
  return v === true ? "Ja" : v === false ? "Nein" : "—";
}

function buildHtml(d: RegisterPayload): string {
  const row = (label: string, value: string | number) =>
    `<tr><td style="padding:8px 14px;color:#666;border-bottom:1px solid #eee;vertical-align:top;width:40%"><b>${label}</b></td><td style="padding:8px 14px;color:#222;border-bottom:1px solid #eee">${value || "—"}</td></tr>`;
  const list = (arr: string[]) =>
    arr.length ? arr.map((x) => `• ${escape(x)}`).join("<br>") : "—";
  const escape = (s: string) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] || c));

  const stellenHtml =
    d.stellenModus === "url"
      ? `<a href="${escape(d.bewerbungslink)}">${escape(d.bewerbungslink)}</a>`
      : d.stellen
          .filter((s) => s.titel.trim())
          .map(
            (s) =>
              `<div style="padding:10px 12px;border-left:3px solid #F97E1A;background:#fff8f2;border-radius:8px;margin:6px 0"><b>${escape(s.titel)}</b> <span style="color:#999;font-size:12px">(${escape(s.anstellungsart || "—")})</span>${s.beschreibung ? `<br><span style="color:#555;font-size:13px">${escape(s.beschreibung)}</span>` : ""}</div>`
          )
          .join("") || "—";

  return `
<!DOCTYPE html><html><body style="font-family:-apple-system,sans-serif;background:#f5f5f5;padding:24px;margin:0">
<div style="max-width:640px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.05)">
<div style="background:linear-gradient(135deg,#F97E1A,#0F71C3);padding:28px 32px;color:#fff">
  <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.5px;opacity:0.9;font-weight:600">Neue Registrierung</div>
  <div style="font-size:26px;font-weight:700;margin-top:4px">${escape(d.unternehmensname)}</div>
</div>
<table style="width:100%;border-collapse:collapse;font-size:14px">
  ${row("Ansprechpartner", escape(d.ansprechpartner))}
  ${row("E-Mail", `<a href="mailto:${escape(d.email)}">${escape(d.email)}</a>`)}
  ${row("Telefon", escape(d.telefon))}
  ${row("Branche", escape(d.branche === "Sonstiges" ? d.brancheSonstiges : d.branche))}
  ${row("Schnuppertage", yesNo(d.schnuppertage))}
  ${row("Boys &amp; Girlsday", yesNo(d.boysGirlsday))}
  ${row("Suchkategorien", list(d.suchkategorien))}
  ${row("Arbeitszeit-Modelle", list(d.arbeitszeitModelle))}
  ${row("Arbeitszeiten", list(d.arbeitszeiten))}
  ${row("Arbeitsmodell", list(d.arbeitsmodell))}
  ${row("Fähigkeiten", list(d.faehigkeiten))}
  ${row("Benefits", list([...d.benefits, ...d.eigeneBenefits]))}
  ${row("Stellen", stellenHtml)}
</table>
<div style="padding:16px 32px;background:#fafafa;color:#888;font-size:12px;text-align:center">Jobfinder Plau am See</div>
</div>
</body></html>`;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as RegisterPayload;

    // Honeypot: bots fill the hidden "website" field; silently accept but skip email
    if (data.website && data.website.trim() !== "") {
      console.warn("Honeypot triggered, silently dropping submission");
      return NextResponse.json({ ok: true });
    }

    // Validate essentials
    if (!data.unternehmensname?.trim() || !data.email?.trim()) {
      return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;
    const to = process.env.SMTP_TO || "support@jobplauamsee.de";

    if (!host || !user || !pass) {
      console.error("SMTP environment variables missing");
      return NextResponse.json(
        { error: "Mail-Server nicht konfiguriert" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Jobfinder Plau am See" <${from}>`,
      to,
      replyTo: data.email,
      subject: `Neue Registrierung: ${data.unternehmensname}`,
      html: buildHtml(data),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Registration email failed:", e);
    return NextResponse.json(
      { error: "Versand fehlgeschlagen" },
      { status: 500 }
    );
  }
}
