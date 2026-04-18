import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white/70 pt-14 pb-7">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-primary rounded-[10px]" />
              <span className="text-xl text-white uppercase tracking-wider">
                JOBFINDER
              </span>
            </div>
            <p className="text-[13px] leading-relaxed max-w-[280px]">
              Wir bringen Bewerber und Unternehmen aus Plau am See zusammen. Direkt, lokal, unkompliziert.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-bold text-white mb-4 uppercase tracking-wider">Navigation</h4>
            <Link href="/#unternehmen" className="block text-[13px] text-white/70 py-1 no-underline hover:text-primary transition-colors">
              Unternehmen
            </Link>
            <Link href="/jobfinder" className="block text-[13px] text-white/70 py-1 no-underline hover:text-primary transition-colors">
              Jobfinder
            </Link>
            <Link href="/register" className="block text-[13px] text-white/70 py-1 no-underline hover:text-primary transition-colors">
              Für Arbeitgeber
            </Link>
          </div>

          <div>
            <h4 className="text-[13px] font-bold text-white mb-4 uppercase tracking-wider">Branchen</h4>
            <span className="block text-[13px] text-white/70 py-1">Handwerk & Bau</span>
            <span className="block text-[13px] text-white/70 py-1">Medizin & Pflege</span>
            <span className="block text-[13px] text-white/70 py-1">Hotel & Gastronomie</span>
            <span className="block text-[13px] text-white/70 py-1">Fischerei</span>
          </div>

          <div>
            <h4 className="text-[13px] font-bold text-white mb-4 uppercase tracking-wider">Kontakt</h4>
            <span className="block text-[13px] text-white/70 py-1">Plau am See</span>
            <span className="block text-[13px] text-white/70 py-1">info@jobfinder-plau.de</span>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex justify-between items-center text-xs">
          <span>&copy; {new Date().getFullYear()} Jobfinder Plau am See</span>
          <Link href="/admin" className="text-white/60 no-underline hover:text-white transition-colors">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
