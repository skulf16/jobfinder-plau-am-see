"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { type Company } from "@/data";
import { companies as allCompanies } from "@/data/companies";

const ADMIN_PW = "admin2024";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const [section, setSection] = useState<"dashboard" | "unternehmen" | "stellen" | "anmeldungen">("dashboard");
  const [unternehmen, setUnternehmen] = useState<Company[]>([]);
  const [anmeldungen, setAnmeldungen] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("unternehmen");
    // Use CSV-imported companies as source of truth; fall back to stored admin overrides
    if (stored) {
      try {
        const storedData = JSON.parse(stored) as Company[];
        // If localStorage has fewer entries than current data, use current data
        if (storedData.length >= allCompanies.length) {
          setUnternehmen(storedData);
        } else {
          setUnternehmen(allCompanies as Company[]);
          localStorage.setItem("unternehmen", JSON.stringify(allCompanies));
        }
      } catch {
        setUnternehmen(allCompanies as Company[]);
      }
    } else {
      setUnternehmen(allCompanies as Company[]);
    }
    const storedAn = localStorage.getItem("anmeldungen");
    setAnmeldungen(storedAn ? JSON.parse(storedAn) : []);
  }, []);

  const login = () => {
    if (pw === ADMIN_PW) { setLoggedIn(true); setError(false); }
    else setError(true);
  };

  const toggleActive = (id: string) => {
    const updated = unternehmen.map((u) => u.id === id ? { ...u, aktiv: !u.aktiv } : u);
    setUnternehmen(updated);
    localStorage.setItem("unternehmen", JSON.stringify(updated));
  };

  const deleteCompany = (id: string) => {
    if (!confirm("Wirklich löschen?")) return;
    const updated = unternehmen.filter((u) => u.id !== id);
    setUnternehmen(updated);
    localStorage.setItem("unternehmen", JSON.stringify(updated));
  };

  const allStellen = unternehmen.flatMap((u) =>
    u.stellenangebote.map((s) => ({ ...s, firma: u.name }))
  );
  const branchen = [...new Set(unternehmen.map((u) => u.branche))];

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 max-w-[420px] w-full text-center shadow-lg">
          <h2 className="text-2xl font-semibold uppercase mb-2">Admin Login</h2>
          <p className="text-gray-400 text-sm mb-6">Zugang zum Verwaltungsbereich</p>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            placeholder="Passwort"
            className="w-full border-[1.5px] border-gray-200 rounded-2xl p-3.5 text-sm outline-none focus:border-primary mb-4"
          />
          <button onClick={login} className="w-full bg-primary text-white rounded-full py-3.5 font-semibold text-sm uppercase tracking-wider hover:bg-primary-dark transition-all">
            Anmelden
          </button>
          {error && <p className="text-red-500 text-sm mt-3">Falsches Passwort.</p>}
          <Link href="/" className="block mt-4 text-sm text-gray-400 no-underline hover:text-primary">&larr; Zurück</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-dark text-white fixed top-0 left-0 bottom-0 z-50 flex flex-col pt-6">
        <div className="px-6 pb-8 text-xl uppercase tracking-wider">JOBFINDER Admin</div>
        <nav className="flex-1">
          {(["dashboard", "unternehmen", "stellen", "anmeldungen"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSection(s)}
              className={`w-full text-left px-6 py-3 text-sm font-medium transition-all ${
                section === s ? "text-white bg-white/[0.08] border-l-[3px] border-primary" : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </nav>
        <div className="p-6">
          <button
            onClick={() => { setLoggedIn(false); setPw(""); }}
            className="w-full py-2.5 bg-white/[0.08] text-white/60 rounded-xl text-sm hover:bg-white/15 hover:text-white transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-60 flex-1 bg-gray-50 p-8 min-h-screen">
        {section === "dashboard" && (
          <>
            <h2 className="text-2xl font-semibold uppercase mb-8">Dashboard</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                { n: unternehmen.length, l: "Unternehmen" },
                { n: allStellen.length, l: "Stellen" },
                { n: anmeldungen.length, l: "Anmeldungen" },
                { n: branchen.length, l: "Branchen" },
              ].map((s) => (
                <div key={s.l} className="bg-white rounded-2xl p-7 border border-black/[0.04]">
                  <div className="text-4xl text-primary">{s.n}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {section === "unternehmen" && (
          <>
            <h2 className="text-2xl font-semibold uppercase mb-8">Unternehmen</h2>
            <div className="bg-white rounded-2xl border border-black/[0.04] overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Branche</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Stellen</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Aktiv</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Aktionen</th>
                  </tr>
                </thead>
                <tbody>
                  {unternehmen.map((u) => (
                    <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-3.5 text-sm text-gray-600">{u.name}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{u.branche}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{u.stellenangebote.length}</td>
                      <td className="px-5 py-3.5">
                        <button
                          onClick={() => toggleActive(u.id)}
                          className={`relative w-11 h-6 rounded-full transition-colors ${u.aktiv ? "bg-success" : "bg-gray-200"}`}
                        >
                          <span className={`absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-transform ${u.aktiv ? "translate-x-5" : ""}`} />
                        </button>
                      </td>
                      <td className="px-5 py-3.5">
                        <button onClick={() => deleteCompany(u.id)} className="text-red-400 hover:text-red-600 transition-colors text-lg">🗑</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {section === "stellen" && (
          <>
            <h2 className="text-2xl font-semibold uppercase mb-8">Stellenangebote</h2>
            <div className="bg-white rounded-2xl border border-black/[0.04] overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Unternehmen</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Titel</th>
                    <th className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Art</th>
                  </tr>
                </thead>
                <tbody>
                  {allStellen.map((s, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-3.5 text-sm text-gray-600">{s.firma}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{s.titel}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{s.anstellungsart}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {section === "anmeldungen" && (
          <>
            <h2 className="text-2xl font-semibold uppercase mb-8">Anmeldungen</h2>
            {!anmeldungen.length ? (
              <p className="text-gray-400">Noch keine Anmeldungen.</p>
            ) : (
              <div className="space-y-3">
                {anmeldungen.map((a, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-black/[0.04] p-6">
                    <h4 className="font-bold text-dark mb-2">{(a.name as string) || "?"}</h4>
                    <p className="text-sm text-gray-400">
                      {(a.ansprechpartner as string) || "-"} | {(a.email as string) || "-"} | {(a.telefon as string) || "-"}
                    </p>
                    <p className="text-sm text-gray-400">Branche: {(a.branche as string) || "-"}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
