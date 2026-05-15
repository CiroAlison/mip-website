import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import FloatingBubbles from "@/components/FloatingBubbles";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "M.I.P. Moderna Impresa di Pulizia | Napoli",
    template: "%s | M.I.P. Pulizie",
  },
  description:
    "M.I.P. Moderna Impresa di Pulizia s.r.l. — Servizi professionali di pulizia per condomini, uffici, abitazioni, industrie e yacht. Da Napoli a tutta Italia.",
  keywords: [
    "impresa di pulizie Napoli",
    "pulizie condomini",
    "pulizie uffici",
    "sanificazione ambienti",
    "derattizzazione",
    "pulizie yacht",
    "HACCP",
    "giardinaggio",
  ],
  authors: [{ name: "M.I.P. Moderna Impresa di Pulizia s.r.l." }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://mipimpresadipulizie.it",
    siteName: "M.I.P. Moderna Impresa di Pulizia",
    title: "M.I.P. Moderna Impresa di Pulizia | Napoli",
    description:
      "Esperienza, professionalità e innovazione — da Napoli a tutta Italia.",
  },
  robots: { index: true, follow: true },
  appleWebApp: { capable: true, statusBarStyle: "default" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#25A244",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen antialiased">
        {/* Watermark fisso — mix-blend-mode:multiply: visibile su bianco, invisibile su scuro */}
        <div
          className="fixed inset-0 z-[1] flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ mixBlendMode: "multiply" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mip-navbar.png"
            alt=""
            className="opacity-[0.10] w-[120vmax] h-[120vmax] sm:w-[120vh] sm:h-[120vh]"
            style={{
              maxWidth: "none",
              flexShrink: 0,
              objectFit: "contain",
              transform: "rotate(-90deg)",
            }}
          />
        </div>
        <FloatingBubbles />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
