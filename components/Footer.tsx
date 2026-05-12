import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p
              className="text-2xl font-extrabold text-white mb-2"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              M.I.P.
            </p>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Moderna Impresa di Pulizia s.r.l.<br />
              Esperienza, professionalità e innovazione<br />
              da Napoli a tutta Italia.
            </p>
            <p className="text-xs text-gray-500">P.IVA: IT04123456789</p>
          </div>

          {/* Contatti */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Contatti
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-[#00AEEF] shrink-0" />
                <span>Via G. Porzio, 4 — C.D.N. Is. E/3<br />80143 Napoli (NA)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[#00AEEF] shrink-0" />
                <a href="tel:0813625750" className="hover:text-white transition-colors">
                  081 362 5750
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={15} className="text-[#00AEEF] shrink-0" />
                <a href="https://wa.me/393347064060" className="hover:text-white transition-colors">
                  334 706 4060 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#00AEEF] shrink-0" />
                <a href="mailto:info@mipimpresadipulizie.it" className="hover:text-white transition-colors break-all">
                  info@mipimpresadipulizie.it
                </a>
              </li>
            </ul>
          </div>

          {/* Link rapidi */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Link rapidi
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/servizi", label: "Servizi" },
                { href: "/contatti", label: "Contatti" },
                { href: "/contatti", label: "Richiedi preventivo" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} M.I.P. Moderna Impresa di Pulizia s.r.l. — Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
