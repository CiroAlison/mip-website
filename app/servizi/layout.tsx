import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Scopri tutti i servizi di M.I.P. Moderna Impresa di Pulizia: condomini, uffici, case, cantieri, HACCP, yacht, sanificazione, derattizzazione e molto altro.",
  openGraph: {
    title: "Servizi | M.I.P. Moderna Impresa di Pulizia",
    description:
      "11 servizi specializzati di pulizia e igienizzazione. Da Napoli a tutta Italia.",
  },
};

export default function ServiziLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
