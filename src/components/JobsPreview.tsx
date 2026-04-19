"use client";

import { useState, useMemo } from "react";
import { demoUnternehmen, type Company } from "@/data";
import JobBadge from "./JobBadge";
import CompanyModal from "./CompanyModal";

interface FlatJob {
  id: string;
  titel: string;
  beschreibung: string;
  anstellungsart: string;
  firma: string;
  firmaId: string;
  initialen: string;
  branche: string;
}

export default function JobsPreview({ companies }: { companies?: Company[] } = {}) {
  const data = companies && companies.length > 0 ? companies : demoUnternehmen;
  const [brFilter, setBrFilter] = useState("");
  const [artFilter, setArtFilter] = useState("");
  const [showCount, setShowCount] = useState(5);
  const [modalCompany, setModalCompany] = useState<Company | null>(null);

  const allJobs = useMemo(() => {
    const jobs: FlatJob[] = [];
    data
      .filter((u) => u.aktiv)
      .forEach((u) => {
        u.stellenangebote.forEach((s) => {
          jobs.push({
            ...s,
            firma: u.name,
            firmaId: u.id,
            initialen: u.initialen,
            branche: u.branche,
          });
        });
      });
    return jobs;
  }, [data]);

  const filtered = useMemo(() => {
    let f = allJobs;
    if (brFilter) f = f.filter((j) => j.branche === brFilter);
    if (artFilter) f = f.filter((j) => j.anstellungsart === artFilter);
    return f;
  }, [allJobs, brFilter, artFilter]);

  const visible = filtered.slice(0, showCount);
  const branchen = [...new Set(data.map((u) => u.branche))];

  return (
    <section id="jobs-preview" className="pt-32 md:pt-48 pb-[calc(100px+8vh)] md:pb-[calc(180px+10vh)] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex justify-between items-center mb-7 flex-wrap gap-3">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase text-primary">
            Aktuelle Stellenangebote
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:flex-wrap items-stretch sm:items-center">
          <select
            value={brFilter}
            onChange={(e) => { setBrFilter(e.target.value); setShowCount(5); }}
            className="border-[1.5px] border-gray-200 rounded-2xl py-2.5 px-4 pr-10 min-w-[200px] text-sm text-gray-600 bg-gray-50 outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%23999%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] transition-all"
          >
            <option value="">Alle Branchen</option>
            {branchen.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          <select
            value={artFilter}
            onChange={(e) => { setArtFilter(e.target.value); setShowCount(5); }}
            className="border-[1.5px] border-gray-200 rounded-2xl py-2.5 px-4 pr-10 min-w-[200px] text-sm text-gray-600 bg-gray-50 outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%23999%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] transition-all"
          >
            <option value="">Alle Anstellungsarten</option>
            {["Festanstellung","Vollzeit","Teilzeit","Minijob","Ausbildung","Duales Studium","Praktikum","Ferienjob"].map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <span className="text-[13px] text-gray-400 bg-gray-100 px-3.5 py-1.5 rounded-full">
            {filtered.length} Stellen
          </span>
        </div>

        {/* Job Cards */}
        {!filtered.length ? (
          <p className="text-gray-400 text-center py-10">Keine Stellen gefunden.</p>
        ) : (
          <div className="space-y-3.5">
            {visible.map((j) => (
              <div
                key={`${j.firmaId}-${j.id}`}
                onClick={() => {
                  const c = data.find((u) => u.id === j.firmaId);
                  if (c) setModalCompany(c);
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-white rounded-2xl border border-black/[0.06] hover:shadow-lg hover:border-transparent hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <div className="w-[52px] h-[52px] rounded-[14px] bg-primary/[0.08] text-primary flex items-center justify-center font-bold text-base shrink-0">
                  {j.initialen}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a4 4 0 00-8 0v2" />
                    </svg>
                    {j.firma}
                  </div>
                  <div className="font-bold text-dark text-xl mb-1">{j.titel}</div>
                  <div className="flex gap-2 flex-wrap mt-1.5">
                    <span className="flex items-center gap-1 text-xs text-[#6c7180] bg-gray-100 px-3 py-1 rounded-full">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6c7180" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Plau am See
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#6c7180] bg-gray-100 px-3 py-1 rounded-full">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6c7180" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
                      {j.branche}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1.5 shrink-0 flex-wrap">
                  <JobBadge type={j.anstellungsart} />
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length > showCount && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowCount((c) => c + 5)}
              className="inline-flex items-center gap-2 border-2 border-secondary text-secondary rounded-full px-8 py-3.5 text-[15px] font-semibold uppercase tracking-wider hover:bg-secondary hover:text-white transition-all"
            >
              Weitere Stellenangebote ({filtered.length - showCount} mehr)
            </button>
          </div>
        )}
      </div>
      <CompanyModal company={modalCompany} onClose={() => setModalCompany(null)} />
    </section>
  );
}
