import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Domande frequenti",
  description:
    "Risposte alle domande più comuni sui servizi di pulizia M.I.P.: prezzi, aree servite, prodotti utilizzati, sanificazione e molto altro.",
  openGraph: {
    title: "FAQ — M.I.P. Moderna Impresa di Pulizia",
    description: "Domande frequenti sui nostri servizi di pulizia professionale.",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
