"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
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
  Phone,
  Search,
  ClipboardList,
  Wrench,
} from "lucide-react";
import { motion, useInView, type Variants } from "framer-motion";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const featuredServices = [
  { icon: Building2, label: "Pulizia Condomini", desc: "Scale, ascensori, cortili e parcheggi curati con professionalità quotidiana." },
  { icon: Briefcase, label: "Uffici & Ambienti di Lavoro", desc: "Ambienti sanificati e ordinati per il massimo della produttività." },
  { icon: Home, label: "Appartamenti & Case", desc: "Pulizia domestica accurata, ordinaria e straordinaria su misura." },
  { icon: ChefHat, label: "Cucine Industriali (HACCP)", desc: "Igienizzazione certificata per ristoranti e ambienti food." },
  { icon: Anchor, label: "Yacht & Natanti", desc: "Cura professionale di barche, yacht e imbarcazioni di lusso." },
  { icon: ShieldCheck, label: "Sanificazione Ambienti", desc: "Igienizzazione profonda con prodotti certificati e attrezzatura avanzata." },
];

const reasons = [
  { icon: Star, title: "25+ anni di esperienza", desc: "Decenni di know-how al servizio di privati, aziende e strutture." },
  { icon: Users, title: "Team qualificato", desc: "Operatori formati, assicurati e sempre aggiornati sulle normative." },
  { icon: Clock, title: "Puntualità garantita", desc: "Rispettiamo ogni accordo con precisione e affidabilità assoluta." },
  { icon: MapPin, title: "Da Napoli a tutta Italia", desc: "Operiamo su tutto il territorio nazionale con la stessa qualità." },
];

const testimonials = [
  { stars: 5, text: "Servizio impeccabile! Il nostro condominio non è mai stato così pulito. Personale puntuale e professionale.", name: "Giuseppe M.", type: "Amministratore di Condominio" },
  { stars: 5, text: "Intervento HACCP perfetto per il nostro ristorante. Documentazione completa e prodotti certificati.", name: "Maria R.", type: "Titolare Ristorante" },
  { stars: 5, text: "Sanificazione uffici eseguita con massima cura. Li abbiamo scelti per il contratto annuale.", name: "Luca F.", type: "Responsabile Facility" },
];

const processSteps = [
  { num: "01", icon: Phone, title: "Contatto", desc: "Chiamaci o scrivici: ti risponderemo entro poche ore per capire le tue esigenze." },
  { num: "02", icon: Search, title: "Sopralluogo", desc: "Effettuiamo un sopralluogo gratuito per valutare l'ambiente e pianificare l'intervento." },
  { num: "03", icon: ClipboardList, title: "Preventivo", desc: "Riceviamo una proposta dettagliata, chiara e senza sorprese, personalizzata per te." },
  { num: "04", icon: Wrench, title: "Intervento", desc: "Il nostro team interviene con professionalità e discrezione, garantendo risultati eccellenti." },
];

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─────────────────────────────────────────────
   VARIANTS
───────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a7a32 0%, #25A244 60%, #4DC76A 100%)",
        }}
      >
        {/* Background photo */}
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />

        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-10 bg-white" />
          <div className="absolute -bottom-24 -left-24 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full opacity-10 bg-white" />
        </div>

        {/* Sparkle decorativi */}
        <div className="absolute top-16 left-12 opacity-40 animate-sparkle" style={{ animationDelay: "0s" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L13.5 9L20 12L13.5 15L12 22L10.5 15L4 12L10.5 9L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-16 opacity-30 animate-sparkle" style={{ animationDelay: "0.5s" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L13.5 9L20 12L13.5 15L12 22L10.5 15L4 12L10.5 9L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-25 animate-sparkle" style={{ animationDelay: "1s" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L13.5 9L20 12L13.5 15L12 22L10.5 15L4 12L10.5 9L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-24 right-1/4 opacity-35 animate-sparkle" style={{ animationDelay: "1.5s" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L13.5 9L20 12L13.5 15L12 22L10.5 15L4 12L10.5 9L12 2Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8 animate-float"
          >
            <Image
              src="/logo-mip.png"
              alt="M.I.P. Moderna Impresa di Pulizia"
              width={200}
              height={100}
              className="object-contain w-40 sm:w-52 mx-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4 drop-shadow-sm"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            La soluzione{" "}
            <span style={{ color: "#b8f0c8" }}>si chiama così</span>
          </motion.h1>

          {/* Sottotitolo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base sm:text-xl text-green-100 max-w-2xl mx-auto mb-7 leading-relaxed"
          >
            Pulizia professionale per condomini, uffici, industrie e yacht — da Napoli a tutta Italia
          </motion.p>

          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
          >
            {["✓ Certificato HACCP", "✓ Prodotti Ecologici", "✓ 25+ Anni di Esperienza"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl font-bold text-base text-white shadow-xl transition-all duration-200 active:scale-95 hover:scale-105 hover:shadow-2xl min-h-[48px]"
              style={{ backgroundColor: "#1a7a32" }}
            >
              Richiedi Preventivo Gratuito
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:800653110"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl font-bold text-base bg-transparent border-2 border-white hover:bg-white/15 active:scale-95 transition-all duration-200 min-h-[48px]"
            >
              <Phone size={18} />
              800 65 31 10
            </a>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-16">
            <path d="M0 80L60 66.7C120 53 240 27 360 21.3C480 16 600 32 720 42.7C840 53 960 59 1080 53.3C1200 48 1320 32 1380 24L1440 16V80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. COUNTER STRIP
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { target: 25, suffix: "+", label: "Anni di esperienza" },
              { target: 500, suffix: "+", label: "Clienti soddisfatti" },
              { target: 11, suffix: "", label: "Servizi specializzati" },
              { target: 100, suffix: "%", label: "Qualità garantita" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <p
                  className="text-4xl sm:text-5xl font-extrabold mb-1 leading-none"
                  style={{ color: "#25A244", fontFamily: "var(--font-poppins)" }}
                >
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                </p>
                <p className="text-sm sm:text-base text-gray-500 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. SERVIZI IN EVIDENZA
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-[#f8fafc]">
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
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-[#25A244] transition-all duration-300"
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border-2 transition-all duration-200 hover:bg-[#25A244] hover:text-white hover:border-[#25A244] active:scale-95 min-h-[44px]"
              style={{ color: "#25A244", borderColor: "#25A244" }}
            >
              Vedi tutti i 11 servizi
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. COME LAVORIAMO
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4DC76A] mb-3 block">
              Il nostro metodo
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Come lavoriamo
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {/* Connector line desktop */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#25A244] to-[#4DC76A] z-0" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #25A244, #4DC76A)" }}
                >
                  <step.icon size={28} className="text-white" />
                </div>
                <span
                  className="text-4xl font-extrabold leading-none mb-2"
                  style={{ color: "#e8f5ed", fontFamily: "var(--font-poppins)", WebkitTextStroke: "1px #25A244" }}
                >
                  {step.num}
                </span>
                <h3
                  className="font-bold text-[#0f172a] mb-2 text-base"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. CHI SIAMO
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4DC76A] mb-3 block">
                Chi siamo
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] mb-5 sm:mb-6 leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                La pulizia è il nostro mestiere,{" "}
                <span style={{ color: "#25A244" }}>la cura è la nostra passione</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">
                M.I.P. Moderna Impresa di Pulizia s.r.l. è un&apos;azienda napoletana con una lunga tradizione nel settore
                dei servizi di pulizia e igienizzazione. Fondata con l&apos;obiettivo di offrire qualità superiore,
                siamo cresciuti diventando un punto di riferimento per privati, condominii, aziende e strutture
                ricettive su tutto il territorio nazionale.
              </p>
              <ul className="space-y-3 mb-6">
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

              {/* Citazione aziendale */}
              <blockquote className="border-l-4 border-[#25A244] pl-4 py-2 mb-5 bg-green-50 rounded-r-xl">
                <p className="text-sm sm:text-base italic text-gray-700 leading-relaxed">
                  &ldquo;La soluzione si chiama così — da oltre 25 anni la scelta giusta per chi vuole il meglio.&rdquo;
                </p>
              </blockquote>

              {/* Badge certificazioni */}
              <div className="flex gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">✓ Certificato HACCP</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">✓ Prodotti Ecologici</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">✓ Personale Assicurato</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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

      {/* ══════════════════════════════════════
          6. TESTIMONIANZE
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4DC76A] mb-3 block">
              Testimonial
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Cosa dicono i nostri clienti
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={16} fill="#FBBF24" className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                    style={{ background: "linear-gradient(135deg, #25A244, #4DC76A)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. PERCHÉ SCEGLIERCI
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-white">
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl p-5 sm:p-6 text-center"
                style={{ background: "linear-gradient(135deg, #e8f5ed 0%, #f0faf3 100%)" }}
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

      {/* ══════════════════════════════════════
          8. CLIENTI
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-[#f8fafc]">
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

      {/* ══════════════════════════════════════
          9. RECENSIONI GOOGLE CTA
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#4DC76A] mb-3 block">
              La nostra reputazione
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Cosa dicono le recensioni
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 min-h-[48px]"
                style={{ backgroundColor: "#25A244" }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border-2 hover:scale-105 active:scale-95 transition-all duration-200 min-h-[48px]"
                style={{ color: "#25A244", borderColor: "#25A244" }}
              >
                ⭐ Lascia una recensione
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. CTA FINALE
      ══════════════════════════════════════ */}
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
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Pronto per un ambiente impeccabile?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-green-100 mb-7 sm:mb-8 text-sm sm:text-lg leading-relaxed"
          >
            Richiedi un preventivo gratuito e senza impegno. Il nostro team ti risponderà
            entro 24 ore con una soluzione personalizzata.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white text-[#25A244] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 min-h-[48px]"
            >
              Contattaci ora
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:800653110"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 border-white/50 hover:border-white hover:bg-white/10 active:scale-95 transition-all duration-200 min-h-[48px]"
            >
              800 65 31 10 (gratuito)
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
