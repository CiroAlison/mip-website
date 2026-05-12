import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta M.I.P. Moderna Impresa di Pulizia per un preventivo gratuito. Tel: 081 3625750 — WhatsApp: 334 7064060 — info@mipimpresadipulizie.it",
  openGraph: {
    title: "Contatti | M.I.P. Moderna Impresa di Pulizia",
    description:
      "Richiedi un preventivo gratuito. Ti rispondiamo entro 24 ore.",
  },
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
