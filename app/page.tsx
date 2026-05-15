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
   WIPE TITLE — effetto tergicristallo sul titolo
───────────────────────────────────────────── */
function WipeTitle({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.h2
      initial={{ clipPath: "inset(0 100% 0 0 round 2px)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0 round 2px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.h2>
  );
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
      <section className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden">

        {/* ── Sfondo fotografico con Ken Burns (effetto video) ── */}
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* ── Overlay scuro sfumato ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,50,20,0.93) 0%, rgba(20,100,40,0.88) 45%, rgba(37,162,68,0.72) 100%)",
          }}
        />

        {/* ── Linee diagonali decorative ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px)" }}
          />
        </div>

        {/* ── Sparkle ── */}
        {[
          { size: 22, top: "14%", left: "8%", delay: "0s", opacity: 0.5 },
          { size: 16, top: "30%", right: "10%", delay: "0.7s", opacity: 0.35 },
          { size: 12, bottom: "35%", left: "22%", delay: "1.3s", opacity: 0.3 },
          { size: 18, bottom: "20%", right: "18%", delay: "2s", opacity: 0.4 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{ top: s.top, left: s.left, right: (s as {right?: string}).right, bottom: s.bottom, opacity: s.opacity, animationDelay: s.delay }}
          >
            <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="white">
              <path d="M12 2L13.5 9L20 12L13.5 15L12 22L10.5 15L4 12L10.5 9L12 2Z" />
            </svg>
          </div>
        ))}

        {/* ── Contenuto split: testo sx / foto dx ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-36 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* ── Colonna TESTO ── */}
            <div className="text-left">
              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] bg-white/15 border border-white/25 rounded-full px-5 py-2.5 backdrop-blur-sm">
                  <span style={{ color: "#7fe89b" }}>★</span>
                  Dal 1999 &mdash; Napoli e tutta Italia
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] mb-5 drop-shadow-lg"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Ambienti<br />
                <span style={{ color: "#7fe89b" }}>impeccabili.</span><br />
                Ogni giorno.
              </motion.h1>

              {/* Sottotitolo */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-base sm:text-lg text-green-100/90 max-w-lg mb-8 leading-relaxed"
              >
                Pulizia professionale per condomini, uffici, cucine industriali e yacht.
                Prodotti certificati, personale qualificato, zero compromessi.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col gap-3 mb-8 sm:flex-row sm:mb-10"
              >
                <Link
                  href="/contatti"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base shadow-2xl transition-all duration-200 active:scale-95 hover:scale-105 min-h-[52px]"
                  style={{ backgroundColor: "#25A244", color: "#fff" }}
                >
                  Richiedi Preventivo Gratuito
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:800653110"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base bg-white/10 border-2 border-white/50 hover:bg-white/20 active:scale-95 transition-all duration-200 min-h-[52px] backdrop-blur-sm"
                >
                  <Phone size={18} />
                  800 65 31 10
                </a>
              </motion.div>

              {/* Trust badges riga */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                {["✓ HACCP", "✓ Eco Cert", "✓ 25+ Anni", "✓ Assicurati"].map((b) => (
                  <span key={b} className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/90">
                    {b}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── Colonna FOTO ── */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative hidden lg:block"
            >
              {/* Foto principale */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=85"
                  alt="Operatori M.I.P. al lavoro"
                  fill
                  priority
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Foto secondaria sovrapposta — in basso a sinistra */}
              <div
                className="absolute -bottom-6 -left-8 w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=85"
                  alt="Pulizia professionale uffici"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>

              {/* Badge sovrapposto — in alto a destra */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl text-center">
                <p className="text-2xl font-extrabold text-[#25A244] leading-none" style={{ fontFamily: "var(--font-poppins)" }}>500+</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Clienti felici</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Bolle pulenti animate ── */}
        {[
          { size: 18, left: "8%",  delay: "0s",   dur: "7s"  },
          { size: 10, left: "22%", delay: "1.5s", dur: "5.5s" },
          { size: 24, left: "38%", delay: "0.8s", dur: "8s"  },
          { size: 14, left: "55%", delay: "2.2s", dur: "6s"  },
          { size: 20, left: "70%", delay: "0.3s", dur: "7.5s" },
          { size: 12, left: "85%", delay: "1.8s", dur: "6.5s" },
          { size: 16, left: "93%", delay: "3s",   dur: "5s"  },
        ].map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              bottom: "80px",
              animationDelay: b.delay,
              animationDuration: b.dur,
            }}
          />
        ))}

        {/* ── Wave divider ── */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-16">
            <path d="M0 80L60 66.7C120 53 240 27 360 21.3C480 16 600 32 720 42.7C840 53 960 59 1080 53.3C1200 48 1320 32 1380 24L1440 16V80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. COUNTER STRIP — dark green
      ══════════════════════════════════════ */}
      <section
        className="py-12 sm:py-16"
        style={{ background: "linear-gradient(135deg, #0f3d1a 0%, #1a5c2a 50%, #1e6b31 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { target: 25, suffix: "+", label: "Anni di esperienza", emoji: "🏆" },
              { target: 500, suffix: "+", label: "Clienti soddisfatti", emoji: "⭐" },
              { target: 11, suffix: "", label: "Servizi specializzati", emoji: "🧹" },
              { target: 100, suffix: "%", label: "Qualità garantita", emoji: "✅" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center"
              >
                <span className="text-2xl mb-2">{item.emoji}</span>
                <p
                  className="text-4xl sm:text-5xl font-extrabold mb-1 leading-none"
                  style={{ color: "#7fe89b", fontFamily: "var(--font-poppins)" }}
                >
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                </p>
                <p className="text-sm sm:text-base text-green-200 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. SERVIZI IN EVIDENZA
      ══════════════════════════════════════ */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#25A244] mb-4 block"
            >
              I nostri servizi
            </motion.span>
            <WipeTitle
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-tight"
              style={{ fontFamily: "var(--font-poppins)" } as React.CSSProperties}
            >
              Soluzioni su misura<br className="hidden sm:block" /> per ogni ambiente
            </WipeTitle>
            <motion.div
              className="h-1 rounded-full mx-auto mt-4"
              style={{ background: "linear-gradient(90deg, #25A244, #4DC76A)" }}
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 72, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {featuredServices.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.09, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="group bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-[#25A244]/40 transition-all duration-300"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #e8f5ed, #d0edda)" }}
                >
                  <s.icon size={24} style={{ color: "#25A244" }} />
                </div>
                <h3
                  className="font-bold text-[#0f172a] mb-2.5 text-base sm:text-lg"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {s.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                <div className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: "linear-gradient(90deg, #25A244, #4DC76A)" }} />
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
      <section className="py-14 sm:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#25A244] mb-4 block"
            >
              Il nostro metodo
            </motion.span>
            <WipeTitle
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a]"
              style={{ fontFamily: "var(--font-poppins)" } as React.CSSProperties}
            >
              Come lavoriamo
            </WipeTitle>
            <motion.div
              className="h-1 rounded-full mx-auto mt-4"
              style={{ background: "linear-gradient(90deg, #25A244, #4DC76A)" }}
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 72, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            />
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
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#25A244] mb-4 block">
                Chi siamo
              </span>
              <motion.h2
                initial={{ clipPath: "inset(0 100% 0 0 round 2px)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0 round 2px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-5 sm:mb-6 leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                La pulizia è il nostro mestiere,{" "}
                <span style={{ color: "#25A244" }}>la cura è la nostra passione</span>
              </motion.h2>
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
      <section
        className="py-14 sm:py-24"
        style={{ background: "linear-gradient(135deg, #0f3d1a 0%, #1a5c2a 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-4 block"
            >
              Testimonianze
            </motion.span>
            <motion.h2
              initial={{ clipPath: "inset(0 100% 0 0 round 2px)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0 round 2px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Cosa dicono i nostri clienti
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={18} fill="#FBBF24" className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-green-100 leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/15">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-base shrink-0 shadow-lg"
                    style={{ background: "linear-gradient(135deg, #25A244, #4DC76A)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-green-300">{t.type}</p>
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
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#25A244] mb-4 block"
            >
              I nostri punti di forza
            </motion.span>
            <WipeTitle
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a]"
              style={{ fontFamily: "var(--font-poppins)" } as React.CSSProperties}
            >
              Perché scegliere M.I.P.
            </WipeTitle>
            <motion.div
              className="h-1 rounded-full mx-auto mt-4"
              style={{ background: "linear-gradient(90deg, #25A244, #4DC76A)" }}
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 72, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                custom={i}
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="group rounded-2xl p-6 sm:p-7 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#25A244]/30"
                style={{ background: "linear-gradient(135deg, #f8fdf9 0%, #eef9f2 100%)" }}
              >
                <div
                  className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-5 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #25A244, #4DC76A)" }}
                >
                  <r.icon size={26} className="text-white" />
                </div>
                <h3
                  className="font-bold text-[#0f172a] mb-2 text-base sm:text-lg"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {r.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
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
                href="https://www.google.com/search?sca_esv=853b2faddd699812&sxsrf=ANbL-n47CghRr3Ti_OSJhVQEfAypjrjiBw:1778786968032&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOR0AmD7hFr434Alxi092MFoifXVab_XpFHrP-AQBORmZSqxgKWDTtqEm1Ar65BD2YyRfPVhvp4GtwqzHnU9sDKACR6xE&q=M.I.P.+Recensioni&sa=X&ved=2ahUKEwin8PDqwbmUAxVDQkEAHUzgJzAQ0bkNegQIJRAH&cshid=1778786996536386&biw=1440&bih=671&dpr=1"
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
                href="https://www.google.com/search?sca_esv=853b2faddd699812&sxsrf=ANbL-n47CghRr3Ti_OSJhVQEfAypjrjiBw:1778786968032&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOR0AmD7hFr434Alxi092MFoifXVab_XpFHrP-AQBORmZSqxgKWDTtqEm1Ar65BD2YyRfPVhvp4GtwqzHnU9sDKACR6xE&q=M.I.P.+Recensioni&sa=X&ved=2ahUKEwin8PDqwbmUAxVDQkEAHUzgJzAQ0bkNegQIJRAH&cshid=1778786996536386&biw=1440&bih=671&dpr=1"
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
