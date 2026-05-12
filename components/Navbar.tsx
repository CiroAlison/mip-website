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

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md bg-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-tight">
              <span
                className="text-xl font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-poppins)", color: "#0055A4" }}
              >
                M.I.P.
              </span>
              <span className="text-xs font-medium text-gray-500 hidden sm:block">
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

          {/* CTA tel */}
          <a
            href="tel:0813625750"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors duration-200"
            style={{ backgroundColor: "#0055A4" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#003d7a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0055A4")
            }
          >
            <Phone size={15} />
            081 362 5750
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#0055A4] hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Apri menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-base font-semibold py-2 transition-colors ${
                  pathname === l.href ? "text-[#0055A4]" : "text-gray-700 hover:text-[#0055A4]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:0813625750"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white w-fit"
              style={{ backgroundColor: "#0055A4" }}
            >
              <Phone size={15} />
              081 362 5750
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
