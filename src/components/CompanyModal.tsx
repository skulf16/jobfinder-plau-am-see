"use client";

import { useEffect } from "react";
import type { Company } from "@/data";

export default function CompanyModal({
  company,
  onClose,
}: {
  company: Company | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!company) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [company, onClose]);

  if (!company) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[300] flex items-center justify-center p-5 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-[28px] max-w-[680px] w-full p-10 max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl text-gray-300 bg-gray-100 w-10 h-10 rounded-xl flex items-center justify-center hover:text-dark hover:bg-gray-200 transition-all"
          aria-label="Schließen"
        >
          &times;
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-secondary text-white flex items-center justify-center font-bold text-2xl shrink-0">
            {company.initialen}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-dark mb-1.5">{company.name}</h2>
            <span className="bg-primary text-white rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider">
              {company.branche}
            </span>
          </div>
        </div>

        <div className="h-px bg-gray-100 my-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="flex flex-col gap-2.5 text-sm text-gray-600">
            <span>{company.adresse}</span>
            <span>Tel: {company.telefon}</span>
            <span>
              E-Mail:{" "}
              <a href={`mailto:${company.email}`} className="text-secondary hover:underline">
                {company.email}
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            {company.website && (
              <a
                href={company.website}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-secondary hover:text-white transition-all no-underline"
              >
                Website
              </a>
            )}
            {company.bewerbungslink && (
              <a
                href={company.bewerbungslink}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-primary-dark transition-all no-underline"
              >
                Jetzt bewerben
              </a>
            )}
          </div>
        </div>

        {company.stellenangebote.length > 0 && (
          <>
            <div className="h-px bg-gray-100 my-6" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Stellenangebote</h3>
              {company.stellenangebote.map((s) => (
                <div
                  key={s.id}
                  className="border-l-4 border-secondary pl-4.5 pr-4.5 py-3.5 bg-[#F8FAFE] rounded-r-2xl mb-2.5"
                >
                  <div className="text-sm font-bold text-dark">{s.titel}</div>
                  <div className="text-[13px] text-gray-400 mt-1">{s.beschreibung}</div>
                  <span className="bg-secondary text-white rounded-full px-3 py-0.5 text-[11px] font-semibold inline-block mt-2">
                    {s.anstellungsart}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {company.stellenangebote.length === 0 && company.bewerbungslink && (
          <>
            <div className="h-px bg-gray-100 my-6" />
            <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5 flex items-start gap-3">
              <svg className="text-secondary shrink-0 mt-0.5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <div>
                <div className="font-semibold text-dark mb-1">Offene Stellen im Karriere-Portal</div>
                <p className="text-sm text-gray-600">
                  Alle aktuellen Stellenangebote finden Sie direkt im Bewerbungsportal des Unternehmens.
                </p>
              </div>
            </div>
          </>
        )}

        {company.benefits.length > 0 && (
          <>
            <div className="h-px bg-gray-100 my-6" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Das bieten wir</h3>
              <div className="flex flex-wrap gap-2">
                {company.benefits.map((b) => (
                  <span
                    key={b}
                    className="bg-[#F0FAE8] text-[#2a7a10] rounded-full px-4 py-1.5 text-[13px] font-medium flex items-center gap-1.5"
                  >
                    <span className="text-success font-bold">✓</span>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {company.schnuppertage && (
          <div className="bg-[#F0FAE8] border-l-4 border-success rounded-2xl p-4.5 text-[#2a7a10] text-sm font-medium mt-5">
            ✓ Schnuppertage &amp; Tagespraktika möglich – einfach anfragen!
          </div>
        )}
      </div>
    </div>
  );
}
