"use client";

import { useState } from "react";
import Link from "next/link";

// ── Types ──────────────────────────────────────────────────────────────────────

interface JobEntry {
  id: string;
  titel: string;
  beschreibung: string;
  anstellungsart: string;
}

interface FormData {
  // Step 1
  suchkategorien: string[];
  // Step 2
  branche: string;
  brancheSonstiges: string;
  // Step 3
  schnuppertage: boolean | null;
  // Step 4
  arbeitszeitModelle: string[];
  // Step 5
  arbeitszeiten: string[];
  // Step 6
  arbeitsmodell: string[];
  faehigkeiten: string[];
  // Step 7
  benefits: string[];
  eigeneBenefits: string[];
  // Step 8
  stellen: JobEntry[];
  // Step 9
  unternehmensname: string;
  ansprechpartner: string;
  email: string;
  telefon: string;
}

// ── Constants ──────────────────────────────────────────────────────────────────

const SUCHKATEGORIEN = [
  "Mitarbeiter",
  "Azubis",
  "Duale Studenten",
  "Praktikanten",
  "Ferienjobber",
  "Praxislerntag",
  "Boys & Girlsday",
];

const BRANCHEN = [
  "Handwerk & Bau",
  "Medizin & Pflege",
  "Finanz- & Versicherungswesen",
  "IT & Digitales",
  "Handel & Logistik",
  "Gastronomie & Tourismus",
  "Bildung & Soziales",
  "Industrie & Fertigung",
  "Verwaltung & Recht",
  "Sonstiges",
];

const ARBEITSZEIT_MODELLE = ["Vollzeit", "Teilzeit", "Minijob"];

const ARBEITSZEITEN = [
  "Gleitzeit",
  "Feste Zeiten",
  "Schichtarbeit",
  "Wochenende",
  "4-Tage-Woche",
];

const ARBEITSMODELLE = ["Vor Ort", "Remote", "Hybrid"];

const FAEHIGKEITEN = [
  "Zuverlässig",
  "Kreativ",
  "Teamfähig",
  "Kommunikativ",
  "Selbstständig",
  "Belastbar",
  "Lernbereit",
  "Flexibel",
];

const BENEFITS_OPTIONS = [
  "Firmenwagen",
  "Homeoffice",
  "Weiterbildung",
  "Betriebliche Altersvorsorge",
  "Jobticket",
  "Kantine / Essenszuschuss",
  "Gesundheitsangebote",
  "Flexible Arbeitszeiten",
  "Bonuszahlungen",
  "Diensthandy / Laptop",
  "Mitarbeiterrabatte",
  "Teamevents",
];

const ANSTELLUNGSARTEN = [
  "Vollzeit",
  "Teilzeit",
  "Minijob",
  "Ausbildung",
  "Praktikum",
  "Duales Studium",
  "Ferienjob",
];

const TOTAL_STEPS = 9;

// ── Helpers ────────────────────────────────────────────────────────────────────

function toggleItem<T>(arr: T[], item: T): T[] {
  return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
}

function uid() {
  return Math.random().toString(36).slice(2);
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function ToggleButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2.5 rounded-2xl border text-sm font-medium transition-all cursor-pointer ${
        active
          ? "border-primary bg-primary/5 text-primary-dark font-semibold"
          : "border-gray-200 bg-white text-gray-700 hover:border-primary/50"
      }`}
    >
      {label}
    </button>
  );
}

function ChoiceCard({
  label,
  description,
  active,
  onClick,
}: {
  label: string;
  description?: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-2xl border p-8 transition-all cursor-pointer ${
        active
          ? "border-primary bg-primary/5"
          : "border-gray-200 bg-white hover:border-primary/40"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
            active ? "border-primary" : "border-gray-300"
          }`}
        >
          {active && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
        </div>
        <div>
          <span className="font-semibold text-base text-dark">{label}</span>
          {description && (
            <p className="text-sm text-gray-500 mt-0.5">{description}</p>
          )}
        </div>
      </div>
    </button>
  );
}

// ── Steps ──────────────────────────────────────────────────────────────────────

function Step1({
  data,
  setData,
}: {
  data: FormData;
  setData: (d: FormData) => void;
}) {
  return (
    <div className="animate-fade-in">
      <h2
        className="text-2xl font-bold text-dark mb-2"
      >
        Was suchen Sie?
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Mehrfachauswahl möglich
      </p>
      <div className="flex flex-wrap gap-3">
        {SUCHKATEGORIEN.map((k) => (
          <ToggleButton
            key={k}
            label={k}
            active={data.suchkategorien.includes(k)}
            onClick={() =>
              setData({
                ...data,
                suchkategorien: toggleItem(data.suchkategorien, k),
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

function Step2({
  data,
  setData,
}: {
  data: FormData;
  setData: (d: FormData) => void;
}) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-dark mb-2">
        Ihre Branche
      </h2>
      <p className="text-gray-500 text-sm mb-6">Bitte wählen Sie eine Branche</p>
      <div className="flex flex-wrap gap-3">
        {BRANCHEN.map((b) => (
          <ToggleButton
            key={b}
            label={b}
            active={data.branche === b}
            onClick={() =>
              setData({ ...data, branche: b, brancheSonstiges: "" })
            }
          />
        ))}
      </div>
      {data.branche === "Sonstiges" && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Bitte Branche eingeben…"
            value={data.brancheSonstiges}
            onChange={(e) =>
              setData({ ...data, brancheSonstiges: e.target.value })
            }
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </div>
      )}
    </div>
  );
}

function Step3({
  data,
  setData,
}: {
  data: FormData;
  setData: (d: FormData) => void;
}) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-dark mb-2">
        Schnuppertage
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Bieten Sie Schnuppertage / Hospitationstage an?
      </p>
      <div className="grid grid-cols-2 gap-4">
        <ChoiceCard
          label="Ja"
          description="Wir bieten Interessierten die Möglichkeit, uns kennenzulernen"
          active={data.schnuppertage === true}
          onClick={() => setData({ ...data, schnuppertage: true })}
        />
        <ChoiceCard
          label="Nein"
          description="Wir bieten aktuell keine Schnuppertage an"
          active={data.schnuppertage === false}
          onClick={() => setData({ ...data, schnuppertage: false })}
        />
      </div>
    </div>
  );
}

function Step4({
  data,
  setData,
}: {
  data: FormData;
  setData: (d: FormData) => void;
}) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-dark mb-2">
        Arbeitszeit-Modelle
      </h2>
      <p className="text-gray-500 text-sm mb-6">Mehrfachauswahl möglich</p>
      <div className="grid grid-cols-2 gap-3">
        {ARBEITSZEIT_MODELLE.map((m) => (
          <ToggleButton
            key={m}
            label={m}
            active={data.arbeitszeitModelle.includes(m)}
            onClick={() =>
              setData({
                ...data,
                arbeitszeitModelle: toggleItem(data.arbeitszeitModelle, m),
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

function Step5({
  data,
  setData,
}: {
  data: FormData;
  setData: (d: FormData) => void;
}) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-dark mb-2">
        Arbeitszeiten
      </h2>
      <p className="text-gray-500 text-sm mb-6">Mehrfachauswahl möglich</p>
      <div className="flex flex-wrap gap-3">
        {ARBEITSZEITEN.map((z) => (
          <ToggleButton
            key={z}
            label={z}
            active={data.arbeitszeiten.includes(z)}
            onClick={() =>
              setData({
                ...data,
                arbeitszeiten: toggleItem(data.arbeitszeiten, z),
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

function Step6({
  data,
  setData,
}: {
  data: FormData;
  setData: (d: FormData) => void;
}) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-dark mb-2">
        Arbeitsmodell & Fähigkeiten
      </h2>
      <p className="text-gray-500 text-sm mb-6">Mehrfachauswahl möglich</p>

      <div className="mb-6">
        <h3 className="font-semibold text-dark mb-3 text-sm uppercase tracking-wide">
          Arbeitsmodell
        </h3>
        <div className="flex flex-wrap gap-3">
          {ARBEITSMODELLE.map((m) => (
            <ToggleButton
              key={m}
              label={m}
              active={data.arbeitsmodell.includes(m)}
              onClick={() =>
                setData({
                  ...data,
                  arbeitsmodell: toggleItem(data.arbeitsmodell, m),
                })
              }
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-dark mb-3 text-sm uppercase tracking-wide">
          Gesuchte Fähigkeiten
        </h3>
        <div className="flex flex-wrap gap-3">
          {FAEHIGKEITEN.map((f) => (
            <ToggleButton
              key={f}
              label={f}
              active={data.faehigkeiten.includes(f)}
              onClick={() =>
                setData({
                  ...data,
                  faehigkeiten: toggleItem(data.faehigkeiten, f),
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Step7({
  data,
  setData,
}: {
  data: FormData;
  setData: (d: FormData) => void;
}) {
  const [newBenefit, setNewBenefit] = useState("");

  function addBenefit() {
    const val = newBenefit.trim();
    if (!val) return;
    if (!data.eigeneBenefits.includes(val)) {
      setData({ ...data, eigeneBenefits: [...data.eigeneBenefits, val] });
    }
    setNewBenefit("");
  }

  function removeEigen(b: string) {
    setData({
      ...data,
      eigeneBenefits: data.eigeneBenefits.filter((x) => x !== b),
    });
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-dark mb-2">
        Ihre Benefits
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Was bieten Sie Ihren Mitarbeitern?
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        {BENEFITS_OPTIONS.map((b) => (
          <ToggleButton
            key={b}
            label={b}
            active={data.benefits.includes(b)}
            onClick={() =>
              setData({ ...data, benefits: toggleItem(data.benefits, b) })
            }
          />
        ))}
      </div>

      {data.eigeneBenefits.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-4">
          {data.eigeneBenefits.map((b) => (
            <span
              key={b}
              className="flex items-center gap-1.5 px-3 py-2 rounded-2xl border border-primary bg-primary/5 text-primary-dark text-sm font-medium"
            >
              {b}
              <button
                type="button"
                onClick={() => removeEigen(b)}
                className="ml-1 text-primary-dark hover:text-red-500 transition-colors leading-none cursor-pointer"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Eigenes Benefit hinzufügen…"
          value={newBenefit}
          onChange={(e) => setNewBenefit(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addBenefit())}
          className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
        <button
          type="button"
          onClick={addBenefit}
          className="px-4 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all cursor-pointer"
        >
          + Hinzufügen
        </button>
      </div>
    </div>
  );
}

function Step8({
  data,
  setData,
}: {
  data: FormData;
  setData: (d: FormData) => void;
}) {
  function addStelle() {
    setData({
      ...data,
      stellen: [
        ...data.stellen,
        { id: uid(), titel: "", beschreibung: "", anstellungsart: "" },
      ],
    });
  }

  function removeStelle(id: string) {
    setData({ ...data, stellen: data.stellen.filter((s) => s.id !== id) });
  }

  function updateStelle(id: string, field: keyof JobEntry, value: string) {
    setData({
      ...data,
      stellen: data.stellen.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      ),
    });
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-dark mb-2">
        Ihre Stellen
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Tragen Sie Ihre offenen Stellen ein
      </p>

      <div className="flex flex-col gap-4 mb-4">
        {data.stellen.map((stelle, idx) => (
          <div
            key={stelle.id}
            className="border border-gray-200 rounded-2xl p-5 bg-white"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-dark">
                Stelle {idx + 1}
              </span>
              {data.stellen.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeStelle(stelle.id)}
                  className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  Entfernen
                </button>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Stellentitel *"
                value={stelle.titel}
                onChange={(e) => updateStelle(stelle.id, "titel", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <textarea
                placeholder="Kurzbeschreibung der Stelle (optional)"
                value={stelle.beschreibung}
                onChange={(e) =>
                  updateStelle(stelle.id, "beschreibung", e.target.value)
                }
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
              />
              <select
                value={stelle.anstellungsart}
                onChange={(e) =>
                  updateStelle(stelle.id, "anstellungsart", e.target.value)
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary bg-white"
              >
                <option value="">Anstellungsart wählen…</option>
                {ANSTELLUNGSARTEN.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addStelle}
        className="w-full border-2 border-dashed border-gray-300 rounded-2xl py-4 text-sm font-semibold text-gray-500 hover:border-primary hover:text-primary transition-all cursor-pointer"
      >
        + Weitere Stelle hinzufügen
      </button>
    </div>
  );
}

function Step9({
  data,
  setData,
}: {
  data: FormData;
  setData: (d: FormData) => void;
}) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-dark mb-2">
        Kontaktdaten
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Wie können wir Sie erreichen?
      </p>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
            Unternehmensname *
          </label>
          <input
            type="text"
            placeholder="z.B. Musterfirma GmbH"
            value={data.unternehmensname}
            onChange={(e) =>
              setData({ ...data, unternehmensname: e.target.value })
            }
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
            Ansprechpartner *
          </label>
          <input
            type="text"
            placeholder="Vor- und Nachname"
            value={data.ansprechpartner}
            onChange={(e) =>
              setData({ ...data, ansprechpartner: e.target.value })
            }
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
            E-Mail *
          </label>
          <input
            type="email"
            placeholder="kontakt@unternehmen.de"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            placeholder="+49 ..."
            value={data.telefon}
            onChange={(e) => setData({ ...data, telefon: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </div>
      </div>
    </div>
  );
}

// ── Success Screen ─────────────────────────────────────────────────────────────

function SuccessScreen() {
  return (
    <div className="animate-fade-in flex flex-col items-center text-center py-12">
      <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#52BC20"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-dark mb-3">
        Anmeldung eingegangen!
      </h2>
      <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
        Vielen Dank für Ihre Anmeldung. Wir haben Ihre Daten erhalten und
        melden uns in Kürze bei Ihnen.
      </p>
      <Link
        href="/"
        className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider no-underline hover:bg-primary-dark transition-all"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────

const STEP_TITLES = [
  "Was suchen Sie?",
  "Ihre Branche",
  "Schnuppertage",
  "Arbeitszeit-Modelle",
  "Arbeitszeiten",
  "Arbeitsmodell & Fähigkeiten",
  "Ihre Benefits",
  "Ihre Stellen",
  "Kontaktdaten",
];

const initialFormData: FormData = {
  suchkategorien: [],
  branche: "",
  brancheSonstiges: "",
  schnuppertage: null,
  arbeitszeitModelle: [],
  arbeitszeiten: [],
  arbeitsmodell: [],
  faehigkeiten: [],
  benefits: [],
  eigeneBenefits: [],
  stellen: [{ id: "init", titel: "", beschreibung: "", anstellungsart: "" }],
  unternehmensname: "",
  ansprechpartner: "",
  email: "",
  telefon: "",
};

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const progress = (step / TOTAL_STEPS) * 100;

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return data.suchkategorien.length > 0;
      case 2:
        return (
          !!data.branche &&
          (data.branche !== "Sonstiges" || data.brancheSonstiges.trim() !== "")
        );
      case 3:
        return data.schnuppertage !== null;
      case 4:
        return data.arbeitszeitModelle.length > 0;
      case 5:
        return data.arbeitszeiten.length > 0;
      case 6:
        return data.arbeitsmodell.length > 0;
      case 7:
        return true; // benefits are optional
      case 8:
        return data.stellen.some((s) => s.titel.trim() !== "");
      case 9:
        return (
          data.unternehmensname.trim() !== "" &&
          data.ansprechpartner.trim() !== "" &&
          data.email.trim() !== ""
        );
      default:
        return true;
    }
  }

  function handleNext() {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  }

  function handleSubmit() {
    const existing = JSON.parse(
      localStorage.getItem("anmeldungen") || "[]"
    ) as FormData[];
    const entry = { ...data, submittedAt: new Date().toISOString() };
    localStorage.setItem("anmeldungen", JSON.stringify([...existing, entry]));
    setSubmitted(true);
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 data={data} setData={setData} />;
      case 2:
        return <Step2 data={data} setData={setData} />;
      case 3:
        return <Step3 data={data} setData={setData} />;
      case 4:
        return <Step4 data={data} setData={setData} />;
      case 5:
        return <Step5 data={data} setData={setData} />;
      case 6:
        return <Step6 data={data} setData={setData} />;
      case 7:
        return <Step7 data={data} setData={setData} />;
      case 8:
        return <Step8 data={data} setData={setData} />;
      case 9:
        return <Step9 data={data} setData={setData} />;
      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-hero-1 via-hero-2 to-secondary bg-[length:200%_200%] animate-[heroGradient_12s_ease_infinite] pt-[72px]">
        <div className="max-w-[700px] mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <SuccessScreen />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-1 via-hero-2 to-secondary bg-[length:200%_200%] animate-[heroGradient_12s_ease_infinite] pt-[72px]">
      <div className="max-w-[700px] mx-auto px-4 py-12">
        {/* Back to home link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white no-underline mb-6 transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Zurück zur Startseite
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Schritt {step} von {TOTAL_STEPS}
              </span>
              <span className="text-xs font-semibold text-primary">
                {STEP_TITLES[step - 1]}
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Step content */}
          <div className="min-h-[280px]">{renderStep()}</div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between gap-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:border-gray-300 hover:text-dark transition-all cursor-pointer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Zurück
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                canProceed()
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {step === TOTAL_STEPS ? "Anmeldung absenden" : "Weiter"}
              {step < TOTAL_STEPS && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
