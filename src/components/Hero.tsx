import Link from "next/link";
import Image from "next/image";
import LogoSlider from "./LogoSlider";
import { companies } from "@/data/companies";

export default function Hero() {
  const unternehmenCount = companies.length;
  const branchenCount = new Set(companies.map((c) => c.branche)).size;
  const stellenCount = companies.reduce((sum, c) => sum + (c.stellenangebote?.length || 0), 0);

  return (
    <section className="relative bg-gradient-to-br from-hero-1 via-hero-2 to-secondary bg-[length:200%_200%] animate-[heroGradient_12s_ease_infinite] pb-8 md:pb-16">
      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-[100px] md:pt-[120px] relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">
          {/* Left: Headline + Buttons */}
          <div className="max-w-[780px] flex-1 w-full">
            <h1 className="text-[44px] md:text-[88px] leading-[0.92] mb-8 md:mb-12 tracking-wide text-white font-semibold">
              JOBFINDER
              <br />
              <span className="text-primary font-normal">PLAU AM SEE</span>
            </h1>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold uppercase tracking-wider bg-primary text-white no-underline hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Unternehmen registrieren
              </Link>
              <Link
                href="/jobfinder"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold uppercase tracking-wider bg-secondary text-white no-underline hover:bg-secondary-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Jobfinder starten
              </Link>
            </div>
          </div>

          {/* Right: Description + Stats */}
          <div className="w-full md:max-w-[420px] text-white/70 text-[15px] leading-relaxed pt-2 md:pt-6">
            <p className="mb-6">
              Vom ersten Ferienjob über Praktika bis zur Ausbildung und
              Festanstellung: Entdecke alle Karrieremöglichkeiten in Plau.
            </p>
            <div className="flex gap-8 md:gap-12">
              <div>
                <div className="font-semibold text-2xl text-primary">{unternehmenCount}</div>
                <div className="text-[11px] text-white/50 mt-0.5">Unternehmen</div>
              </div>
              <div>
                <div className="font-semibold text-2xl text-primary">{branchenCount}</div>
                <div className="text-[11px] text-white/50 mt-0.5">Branchen</div>
              </div>
              <div>
                <div className="font-semibold text-2xl text-primary">{stellenCount}</div>
                <div className="text-[11px] text-white/50 mt-0.5">Offene Stellen</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative max-w-[1136px] mx-4 md:mx-auto mt-[3em] mb-[-80px] md:mb-[-160px] rounded-2xl overflow-hidden h-[300px] md:h-[620px] z-20">
        <Image
          src="/hero.jpg"
          alt="Jobs in Plau am See"
          fill
          className="object-cover object-top"
          priority
        />
        <LogoSlider />
      </div>
    </section>
  );
}
