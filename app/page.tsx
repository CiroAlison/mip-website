"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Briefcase,
  Home,
  ChefHat,
  Anchor,
  ShieldCheck,
  Star,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const featuredServices = [
  { icon: Building2, label: "Pulizia Condomini", desc: "Scale, ascensori, cortili e parcheggi curati con professionalità." },
  { icon: Briefcase, label: "Uffici & Ambienti di Lavoro", desc: "Ambienti puliti e sanificati per il massimo della produttività." },
  { icon: Home, label: "Appartamenti & Case", desc: "Pulizia domestica accurata, ordinaria e straordinaria." },
  { icon: ChefHat, label: "Cucine Industriali (HACCP)", desc: "Igienizzazione certificata per ristoranti e ambienti food." },
  { icon: Anchor, label: "Yacht & Natanti", desc: "Pulizia professionale di barche, yacht e imbarcazioni." },
  { icon: ShieldCheck, label: "Sanificazione Ambienti", desc: "Igienizzazione profonda con prodotti certificati." },
];

const reasons = [
  { icon: Star, title: "25+ anni di esperienza", desc: "Decenni di know-how al servizio di privati, aziende e strutture." },
  { icon: Users, title: "Team qualificato", desc: "Operatori formati, assicurati e sempre aggiornati sulle normative." },
  { icon: Clock, title: "Puntualità garantita", desc: "Rispettiamo ogni accordo con precisione e affidabilità." },
  { icon: MapPin, title: "Da Napoli a tutta Italia", desc: "Operiamo su tutto il territorio nazionale con la stessa qualità." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[92svh] sm:min-h-[88vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a7a32 0%, #25A244 60%, #4DC76A 100%)",
        }}
      >
        {/* foto di sfondo */}
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />

        {/* decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full opacity-10 bg-white" />
          <div className="absolute -bottom-24 -left-24 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full opacity-10 bg-white" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-widest uppercase bg-white/20 rounded-full px-4 py-1.5 mb-5 sm:mb-6">
              Napoli · Italia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[2rem] sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-4 sm:mb-5 drop-shadow-sm"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Pulizia professionale{" "}
            <span style={{ color: "#b8f0c8" }}>che fa la differenza</span>
          </motion.h1>

          {/* Badge certificazioni */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2 mb-5 sm:mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
              ✓ Certificato HACCP
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
              ✓ Prodotti Ecologici
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-green-100 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          >
            Esperienza, professionalità e innovazione al servizio di condomini, uffici,
            industrie, yacht e molto altro — da Napoli a tutta Italia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl font-bold text-base text-white shadow-lg transition-all duration-200 active:scale-95 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#4DC76A" }}
            >
              Richiedi Preventivo
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/servizi"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl font-bold text-base bg-white/15 border border-white/30 backdrop-blur-sm hover:bg-white/25 active:scale-95 transition-all duration-200"
            >
              Scopri i Servizi
            </Link>
          </motion.div>

          {/* Strip statistiche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 sm:mt-10 flex items-center justify-center gap-3 sm:gap-5 flex-wrap text-sm text-green-100 font-medium"
          >
            <span>25+ Anni di esperienza</span>
            <span className="text-white/40">|</span>
            <span>500+ Clienti soddisfatti</span>
            <span className="text-white/40">|</span>
            <span>11 Servizi specializzati</span>
          </motion.div>
        </div>

        {/* wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-16">
            <path d="M0 80L60 66.7C120 53 240 27 360 21.3C480 16 600 32 720 42.7C840 53 960 59 1080 53.3C1200 48 1320 32 1380 24L1440 16V80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── CHI SIAMO ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4DC76A] mb-3 block">
                Chi siamo
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] mb-5 sm:mb-6 leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                La pulizia è il nostro mestiere,{" "}
                <span className="text-[#25A244]">la cura è la nostra passione</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">
                M.I.P. Moderna Impresa di Pulizia s.r.l. è un&apos;azienda napoletana con una lunga tradizione nel settore
                dei servizi di pulizia e igienizzazione. Fondata con l&apos;obiettivo di offrire qualità superiore,
                siamo cresciuti diventando un punto di riferimento per privati, condominii, aziende e strutture
                ricettive su tutto il territorio nazionale.
              </p>
              <ul className="space-y-3">
                {[
                  "Personale specializzato e continuamente formato",
                  "Prodotti ecologici e certificati",
                  "Interventi su misura per ogni esigenza",
                  "Rispetto degli standard HACCP e sanitari",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-[#4DC76A] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Badge certificazioni */}
              <div className="flex gap-3 mt-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">✓ Certificato HACCP</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">✓ Prodotti Ecologici</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">✓ Personale Assicurato</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-xl"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Team M.I.P. al lavoro"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a7a32]/85 via-[#1a7a32]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20">
                {[
                  { value: "25+", label: "Anni" },
                  { value: "500+", label: "Clienti" },
                  { value: "11", label: "Servizi" },
                  { value: "100%", label: "Qualità" },
                ].map((stat) => (
                  <div key={stat.label} className="py-3 sm:py-4 text-center text-white">
                    <p className="text-lg sm:text-2xl font-extrabold leading-none" style={{ fontFamily: "var(--font-poppins)" }}>
                      {stat.value}
                    </p>
                    <p className="text-[10px] sm:text-xs text-green-200 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVIZI IN EVIDENZA ── */}
      <section className="py-14 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4DC76A] mb-3 block">
              I nostri servizi
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Soluzioni su misura per ogni ambiente
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredServices.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl mb-4"
                  style={{ backgroundColor: "#e8f5ed" }}
                >
                  <s.icon size={22} style={{ color: "#25A244" }} />
                </div>
                <h3
                  className="font-bold text-[#0f172a] mb-2 text-sm sm:text-base"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {s.label}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border-2 transition-all duration-200 hover:bg-[#25A244] hover:text-white hover:border-[#25A244] active:scale-95"
              style={{ color: "#25A244", borderColor: "#25A244" }}
            >
              Vedi tutti i servizi
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PERCHÉ SCEGLIERCI ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4DC76A] mb-3 block">
              I nostri punti di forza
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Perché scegliere M.I.P.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mb-4 sm:mb-5 mx-auto"
                  style={{ background: "linear-gradient(135deg, #25A244, #4DC76A)" }}
                >
                  <r.icon size={22} className="text-white" />
                </div>
                <h3
                  className="font-bold text-[#0f172a] mb-2 text-sm sm:text-base"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTI ── */}
      <section className="py-14 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4DC76A] mb-3 block">
              Chi si fida di noi
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              I nostri clienti
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              "Schiavo & C. s.p.a.",
              "Zucchetti",
              "Genoa Sea Brokers",
              "Sara Assicurazioni",
              "Palumbo",
              "HiSkill",
              "Nettuno Solutions",
              "AMESCI",
              "Essematica",
              "Eutile",
              "TMF Group",
              "Studio Scarano",
              "Quick Parking",
              "Si.Ge.A. Costruzioni",
              "X Percorsi",
              "SG Sicura Gestioni",
            ].map((name, i) => (
              <motion.div
                key={name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="bg-white rounded-2xl px-4 py-5 sm:py-6 shadow-sm border border-gray-100 flex items-center justify-center text-center"
              >
                <span
                  className="text-xs sm:text-sm font-semibold text-gray-600 leading-snug"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENSIONI GOOGLE ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4DC76A] mb-3 block">
              La nostra reputazione
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Cosa dicono i nostri clienti
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra migliore referenza.
              Leggi le recensioni su Google e, se hai già lavorato con noi, lasciaci la tua opinione.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.google.com/maps/search/MIP+Moderna+Impresa+di+Pulizia+Napoli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                style={{ backgroundColor: "#25A244" }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Leggi le recensioni
              </a>
              <a
                href="https://www.google.com/search?q=MIP+Moderna+Impresa+di+Pulizia+Napoli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border-2 hover:scale-105 active:scale-95 transition-all duration-200"
                style={{ color: "#25A244", borderColor: "#25A244" }}
              >
                ⭐ Lascia una recensione
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA CENTRALE ── */}
      <section
        className="py-14 sm:py-20 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #25A244 0%, #4DC76A 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Pronto per un ambiente impeccabile?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-green-100 mb-7 sm:mb-8 text-sm sm:text-lg leading-relaxed"
          >
            Richiedi un preventivo gratuito e senza impegno. Il nostro team ti risponderà
            entro 24 ore con una soluzione personalizzata.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white text-[#25A244] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Contattaci ora
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:800653110"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 border-white/50 hover:border-white hover:bg-white/10 active:scale-95 transition-all duration-200"
            >
              800 65 31 10 (gratuito)
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
