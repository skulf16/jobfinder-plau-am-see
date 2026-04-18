"use client";

import { useState, useMemo } from "react";
import { demoUnternehmen, type Company } from "@/data";
import CompanyModal from "./CompanyModal";
import JobBadge from "./JobBadge";

export default function CompanyGrid() {
  const [brFilter, setBrFilter] = useState("");
  const [artFilter, setArtFilter] = useState("");
  const [modalCompany, setModalCompany] = useState<Company | null>(null);

  const active = demoUnternehmen.filter((u) => u.aktiv);
  const branchen = [...new Set(active.map((u) => u.branche))];

  const filtered = useMemo(() => {
    let f = active;
    if (brFilter) f = f.filter((u) => u.branche === brFilter);
    if (artFilter)
      f = f.filter(
        (u) =>
          u.anstellungsarten.includes(artFilter) ||
          u.stellenangebote.some((s) => s.anstellungsart === artFilter)
      );
    return f;
  }, [active, brFilter, artFilter]);

  return (
    <section
      id="unternehmen"
      className="pt-[calc(100px+8vh)] md:pt-[calc(180px+10vh)] pb-16 md:pb-20 bg-gradient-to-br from-hero-1 via-hero-2 to-secondary"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase text-white">
            Unternehmen in Plau am See
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:flex-wrap items-stretch sm:items-center">
          <select
            value={brFilter}
            onChange={(e) => setBrFilter(e.target.value)}
            className="border-[1.5px] border-white/20 rounded-2xl py-2.5 px-4 pr-10 min-w-[220px] text-sm text-gray-600 bg-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%23999%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] transition-all"
          >
            <option value="">Alle Branchen</option>
            {branchen.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          <select
            value={artFilter}
            onChange={(e) => setArtFilter(e.target.value)}
            className="border-[1.5px] border-white/20 rounded-2xl py-2.5 px-4 pr-10 min-w-[220px] text-sm text-gray-600 bg-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%23999%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] transition-all"
          >
            <option value="">Alle Anstellungsarten</option>
            {["Festanstellung","Vollzeit","Teilzeit","Minijob","Ausbildung","Duales Studium","Praktikum","Ferienjob","Boys & Girlsday","Praxislerntag"].map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <span className="text-[13px] text-white/70 bg-white/10 px-3.5 py-1.5 rounded-full">
            {filtered.length} Unternehmen
          </span>
          {(brFilter || artFilter) && (
            <button
              onClick={() => { setBrFilter(""); setArtFilter(""); }}
              className="text-[13px] text-primary cursor-pointer ml-auto hover:underline"
            >
              Filter zurücksetzen
            </button>
          )}
        </div>

        {/* Grid */}
        {!filtered.length ? (
          <p className="text-white/50 text-center py-16">Keine Unternehmen gefunden.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((u) => (
              <div
                key={u.id}
                onClick={() => setModalCompany(u)}
                className="bg-white rounded-3xl p-8 text-center cursor-pointer flex flex-col items-center gap-3.5 border border-black/[0.04] hover:shadow-xl hover:-translate-y-1 hover:border-primary transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary text-white flex items-center justify-center font-bold text-[22px]">
                  {u.initialen}
                </div>
                <div className="font-bold text-[15px] text-dark leading-tight">{u.name}</div>
                <div className="text-xs text-gray-400 -mt-1.5">{u.branche}</div>
                <div className="flex flex-wrap gap-1.5 justify-center mt-auto pt-2">
                  {u.anstellungsarten.map((a) => (
                    <JobBadge key={a} type={a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <CompanyModal company={modalCompany} onClose={() => setModalCompany(null)} />
    </section>
  );
}
