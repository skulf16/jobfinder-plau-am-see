import Link from "next/link";

export default function CtaTiles() {
  return (
    <section className="relative z-10 -mt-[180px] -mb-[180px]">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Orange tile — Unternehmen registrieren */}
        <Link
          href="/register"
          className="group relative overflow-hidden rounded-3xl p-10 min-h-[340px] flex flex-col justify-between no-underline bg-gradient-to-br from-[#F97E1A] via-[#F59332] to-[#E06A10] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
        >
          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-10 w-60 h-60 bg-[#ffb366]/40 rounded-full blur-2xl" />
          <svg
            className="absolute top-8 right-8 w-24 h-24 text-white/20 group-hover:text-white/30 transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a4 4 0 00-8 0v2" />
            <path d="M2 13h20" />
          </svg>

          <div className="relative z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              Für Arbeitgeber
            </div>
            <h3 className="text-white text-4xl md:text-5xl font-semibold uppercase leading-[0.95] mb-3">
              Unternehmen<br />registrieren
            </h3>
            <p className="text-white/90 text-base max-w-md">
              Melden Sie Ihr Unternehmen an und erreichen Sie Bewerber direkt vor Ort.
            </p>
          </div>

          <div className="relative z-10 inline-flex items-center gap-2 text-white font-semibold uppercase tracking-wider text-sm group-hover:gap-3 transition-all">
            Jetzt registrieren
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Blue tile — Jobfinder */}
        <Link
          href="/jobfinder"
          className="group relative overflow-hidden rounded-3xl p-10 min-h-[340px] flex flex-col justify-between no-underline bg-gradient-to-br from-[#0F71C3] via-[#1a8ad9] to-[#0a5da3] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
        >
          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-10 w-60 h-60 bg-[#5cb3ff]/30 rounded-full blur-2xl" />
          <svg
            className="absolute top-8 right-8 w-24 h-24 text-white/20 group-hover:text-white/30 transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
            <path d="M11 8v3l2 2" />
          </svg>

          <div className="relative z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              Für Bewerber
            </div>
            <h3 className="text-white text-4xl md:text-5xl font-semibold uppercase leading-[0.95] mb-3">
              Jobfinder<br />starten
            </h3>
            <p className="text-white/90 text-base max-w-md">
              Beantworte kurze Fragen und wir zeigen dir passende Stellen in Plau am See.
            </p>
          </div>

          <div className="relative z-10 inline-flex items-center gap-2 text-white font-semibold uppercase tracking-wider text-sm group-hover:gap-3 transition-all">
            Quiz starten
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}
