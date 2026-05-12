"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Blocca scroll body quando menu aperto */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col leading-tight">
              <span
                className="text-xl font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-poppins)", color: "#0055A4" }}
              >
                M.I.P.
              </span>
              <span className="text-[10px] font-medium text-gray-500 hidden sm:block leading-none mt-0.5">
                Moderna Impresa di Pulizia
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  pathname === l.href
                    ? "text-[#0055A4] border-b-2 border-[#0055A4] pb-0.5"
                    : "text-gray-600 hover:text-[#0055A4]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA tel desktop */}
          <a
            href="tel:0813625750"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#0055A4" }}
          >
            <Phone size={15} />
            081 362 5750
          </a>

          {/* Hamburger — touch target 44×44 */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-gray-600 hover:text-[#0055A4] hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — overlay full screen */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <nav className="flex flex-col px-6 py-6 gap-1 border-t border-gray-100">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center min-h-[52px] px-3 rounded-xl text-base font-semibold transition-colors ${
                  pathname === l.href
                    ? "text-[#0055A4] bg-blue-50"
                    : "text-gray-700 hover:text-[#0055A4] hover:bg-gray-50"
                }`}
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:0813625750"
                className="flex items-center justify-center gap-2 w-full min-h-[52px] px-4 rounded-xl text-base font-bold text-white"
                style={{ backgroundColor: "#0055A4" }}
              >
                <Phone size={18} />
                081 362 5750
              </a>
              <a
                href="https://wa.me/393347064060"
                className="flex items-center justify-center gap-2 w-full min-h-[52px] px-4 rounded-xl text-base font-bold border-2"
                style={{ color: "#0055A4", borderColor: "#0055A4" }}
              >
                WhatsApp: 334 706 4060
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
