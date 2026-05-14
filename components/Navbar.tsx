"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/faq", label: "FAQ" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-lg border-b border-gray-100"
          : "shadow-none border-b border-transparent"
      }`}
    >
      {/* ── Scroll progress bar ── */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] z-50 pointer-events-none"
        style={{
          width: progressWidth,
          background: "linear-gradient(90deg, #1a7a32, #25A244, #4DC76A)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] md:h-[84px]">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-mip-navbar.png"
              alt="M.I.P. Moderna Impresa di Pulizia"
              width={200}
              height={113}
              className="object-contain h-14 sm:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                  pathname === l.href
                    ? "text-[#25A244]"
                    : "text-gray-600 hover:text-[#25A244]"
                }`}
              >
                {l.label}
                {pathname === l.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: "#25A244" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA tel desktop */}
          <a
            href="tel:800653110"
            className="hidden md:flex flex-col items-center gap-0 px-5 py-2.5 rounded-xl font-bold text-white transition-all hover:opacity-90 hover:shadow-lg hover:scale-105 active:scale-95 duration-200"
            style={{ background: "linear-gradient(135deg, #1a7a32, #25A244)" }}
          >
            <span className="text-[9px] font-semibold uppercase tracking-widest opacity-80">Numero Verde</span>
            <span className="text-sm flex items-center gap-1.5"><Phone size={13} /> 800 65 31 10</span>
          </a>

          {/* Hamburger */}
          <button
            className={`md:hidden flex items-center justify-center w-11 h-11 -mr-1 rounded-xl transition-all duration-200 ${
              open
                ? "text-white bg-[#25A244]"
                : "text-gray-700 hover:text-[#25A244] hover:bg-green-50"
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:hidden fixed inset-0 top-[72px] z-40 overflow-y-auto pb-[env(safe-area-inset-bottom,16px)]"
          style={{ background: "linear-gradient(180deg, #fff 0%, #f8fdf9 100%)" }}
        >
          <nav className="flex flex-col px-5 pt-5 pb-8 gap-1 border-t-2 border-[#25A244]">
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  href={l.href}
                  className={`flex items-center min-h-[56px] px-4 rounded-2xl text-base font-semibold transition-all duration-200 ${
                    pathname === l.href
                      ? "text-white bg-[#25A244] shadow-md"
                      : "text-gray-700 hover:text-[#25A244] hover:bg-green-50"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}

            <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                href="tel:800653110"
                className="flex flex-col items-center justify-center gap-0 w-full min-h-[64px] px-4 rounded-2xl font-bold text-white shadow-lg"
                style={{ background: "linear-gradient(135deg, #1a7a32, #25A244)" }}
              >
                <span className="text-[9px] font-semibold uppercase tracking-widest opacity-80">Numero Verde Gratuito</span>
                <span className="flex items-center gap-2 text-lg"><Phone size={18} /> 800 65 31 10</span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                href="https://wa.me/393347064060"
                className="flex items-center justify-center gap-2 w-full min-h-[52px] px-4 rounded-2xl text-base font-bold border-2 transition-colors hover:bg-green-50"
                style={{ color: "#25A244", borderColor: "#25A244" }}
              >
                💬 WhatsApp: 334 706 4060
              </motion.a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
