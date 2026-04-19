"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center px-8 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-black/6"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-[38px] h-[38px] bg-primary rounded-xl flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a4 4 0 00-8 0v2" />
              </svg>
            </div>
            <span
              className={`text-2xl uppercase tracking-wider transition-colors ${
                scrolled ? "text-dark" : "text-white"
              }`}
            >
              JOBFINDER
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#jobs-preview"
              className={`text-sm font-medium uppercase tracking-wider no-underline transition-colors ${
                scrolled ? "text-gray-500 hover:text-dark" : "text-white/80 hover:text-white"
              }`}
            >
              Stellenangebote
            </Link>
            <Link
              href="/#unternehmen"
              className={`text-sm font-medium uppercase tracking-wider no-underline transition-colors ${
                scrolled ? "text-gray-500 hover:text-dark" : "text-white/80 hover:text-white"
              }`}
            >
              Unternehmen
            </Link>
            <Link
              href="/jobfinder"
              className="bg-secondary text-white! px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider no-underline hover:bg-secondary-dark transition-all"
            >
              Zum Jobfinder
            </Link>
            <Link
              href="/registrierung"
              className="bg-primary text-white! px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider no-underline hover:bg-primary-dark transition-all"
            >
              Jetzt registrieren
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`block w-[22px] h-[2px] rounded ${scrolled ? "bg-dark" : "bg-white"}`} />
            <span className={`block w-[22px] h-[2px] rounded ${scrolled ? "bg-dark" : "bg-white"}`} />
            <span className={`block w-[22px] h-[2px] rounded ${scrolled ? "bg-dark" : "bg-white"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-[72px] left-0 right-0 bg-white border-b border-gray-200 p-8 z-40 flex flex-col gap-4 shadow-lg md:hidden">
          <Link href="/#jobs-preview" className="text-base font-medium text-gray-600 no-underline" onClick={() => setMobileOpen(false)}>
            Stellenangebote
          </Link>
          <Link href="/#unternehmen" className="text-base font-medium text-gray-600 no-underline" onClick={() => setMobileOpen(false)}>
            Unternehmen
          </Link>
          <Link href="/jobfinder" className="text-base font-medium text-gray-600 no-underline" onClick={() => setMobileOpen(false)}>
            Jobfinder
          </Link>
          <Link href="/registrierung" className="text-base font-medium text-gray-600 no-underline" onClick={() => setMobileOpen(false)}>
            Für Arbeitgeber
          </Link>
        </div>
      )}
    </>
  );
}
