"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const faqs = [
  {
    q: "Come posso richiedere un preventivo?",
    a: "Puoi richiedere un preventivo gratuito compilando il modulo nella pagina Contatti, chiamando al numero verde 800 65 31 10 oppure scrivendo su WhatsApp al 334 706 4060. Ti risponderemo entro 24 ore.",
  },
  {
    q: "Il preventivo è gratuito e senza impegno?",
    a: "Sì, il preventivo è completamente gratuito e senza alcun impegno. Valutiamo le tue esigenze e ti proponiamo la soluzione più adatta al tuo budget.",
  },
  {
    q: "In quali zone operate?",
    a: "Operiamo principalmente a Napoli e in Campania, ma siamo disponibili per interventi su tutto il territorio nazionale per clienti aziendali e strutture ricettive.",
  },
  {
    q: "Che prodotti utilizzate per le pulizie?",
    a: "Utilizziamo esclusivamente prodotti certificati, ecologici e conformi alle normative vigenti. Per ambienti food e sanitari utilizziamo prodotti biocidi omologati in linea con gli standard HACCP.",
  },
  {
    q: "Offrite pulizie con contratto periodico?",
    a: "Sì, proponiamo contratti di manutenzione periodica (giornalieri, settimanali, mensili) per condomini, uffici, negozi e strutture ricettive. Il contratto include pianificazione personalizzata e personale fisso dedicato.",
  },
  {
    q: "Il personale è formato e assicurato?",
    a: "Tutto il nostro personale è regolarmente assunto, assicurato e continuamente formato sulle tecniche di pulizia, sicurezza sul lavoro e normative igienico-sanitarie.",
  },
  {
    q: "Cosa include la pulizia fine cantiere?",
    a: "La pulizia fine cantiere comprende la rimozione di polvere edilizia, residui di calce e cemento, silicone, pellicole protettive, vetri sporchi, pavimenti e sanitari. Consegniamo l'ambiente pronto all'uso.",
  },
  {
    q: "Eseguite sanificazioni certificate?",
    a: "Sì, eseguiamo sanificazioni profonde con nebulizzatori e prodotti biocidi registrati al Ministero della Salute. Al termine rilasciamo documentazione attestante il trattamento effettuato.",
  },
  {
    q: "Pulite anche barche e yacht?",
    a: "Sì, offriamo servizi completi di pulizia per imbarcazioni: interni (cabine, cucine di bordo, bagni), esterni (scafo, coperta, teak) e trattamenti specifici per materiali nautici.",
  },
  {
    q: "Posso richiedere un intervento urgente?",
    a: "Sì, in caso di necessità urgenti (es. allagamenti, eventi straordinari) ci attiviamo nel più breve tempo possibile. Contattaci direttamente al telefono o su WhatsApp per interventi urgenti.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section
        className="py-14 sm:py-20 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #1a7a32 0%, #25A244 60%, #4DC76A 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest bg-white/20 rounded-full px-4 py-1.5 mb-5 sm:mb-6 inline-block"
          >
            Hai domande?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Domande frequenti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-green-100 text-base sm:text-lg leading-relaxed"
          >
            Tutto quello che devi sapere sui nostri servizi di pulizia professionale.
          </motion.p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-14 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span
                    className="font-semibold text-sm sm:text-base text-[#0f172a] leading-snug"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-300 text-[#25A244]"
                    style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <p className="px-5 sm:px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 sm:py-16 text-white text-center"
        style={{ background: "linear-gradient(135deg, #25A244 0%, #4DC76A 100%)" }}
      >
        <div className="max-w-xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Non hai trovato risposta?
          </h2>
          <p className="text-green-100 mb-7 text-sm sm:text-base leading-relaxed">
            Contattaci direttamente — saremo felici di rispondere a qualsiasi domanda.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#25A244] bg-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Contattaci ora
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
