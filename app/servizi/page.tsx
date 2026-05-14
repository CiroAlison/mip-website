"use client";

import Link from "next/link";
import {
  Building2,
  Briefcase,
  Home,
  HardHat,
  ChefHat,
  Anchor,
  ArrowUpDown,
  Leaf,
  ShieldCheck,
  Bug,
  Wind,
  ArrowRight,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const services = [
  {
    icon: Building2,
    title: "Pulizia Condomini",
    desc: "Manteniamo le parti comuni del tuo condominio sempre in ordine: scale, ascensori, parcheggi, cortili e giardini. Interventi periodici o una tantum, con personale qualificato e prodotti certificati.",
    tags: ["Scale", "Ascensori", "Parcheggi", "Cortili", "Giardini"],
  },
  {
    icon: Briefcase,
    title: "Uffici e Ambienti di Lavoro",
    desc: "Un ufficio pulito è un ufficio produttivo. Gestiamo la pulizia ordinaria e straordinaria di uffici, sedi aziendali, reception, sale riunioni e aree comuni con massima discrezione.",
    tags: ["Pulizia ordinaria", "Pulizia straordinaria", "Sale riunioni", "Reception"],
  },
  {
    icon: Home,
    title: "Appartamenti e Case",
    desc: "Affidate la pulizia della vostra abitazione ai nostri professionisti. Offriamo servizi di pulizia regolare, deep cleaning e traslochi per garantire ogni angolo impeccabile.",
    tags: ["Pulizia regolare", "Deep cleaning", "Post-trasloco"],
  },
  {
    icon: HardHat,
    title: "Pulizia Fine Cantiere",
    desc: "Dopo una ristrutturazione o la costruzione di un edificio, il nostro team si occupa della rimozione di polvere edilizia, calcinacci, silicone e di ogni residuo per consegnare l'ambiente pronto all'uso.",
    tags: ["Post-ristrutturazione", "Polvere edilizia", "Residui calce"],
  },
  {
    icon: ChefHat,
    title: "Cucine Industriali e Ristoranti",
    desc: "Interventi di igienizzazione profonda conformi alle normative HACCP per ristoranti, mense, laboratori alimentari e strutture ricettive. Garantiamo sicurezza e igiene certificata.",
    tags: ["HACCP", "Ristoranti", "Mense", "Laboratori alimentari"],
  },
  {
    icon: Anchor,
    title: "Yacht, Barche e Natanti",
    desc: "La pulizia di imbarcazioni richiede competenze specifiche e prodotti dedicati. Il nostro team offre servizi completi per interni ed esterni di yacht, barche e natanti.",
    tags: ["Interni", "Esterni", "Pontile", "Cabine"],
  },
  {
    icon: ArrowUpDown,
    title: "Ascensori e Montacarichi",
    desc: "Pulizia e igienizzazione regolare di cabine ascensore e montacarichi: superfici, specchi, pavimenti e controllo odori per un'immagine sempre professionale.",
    tags: ["Cabine", "Specchi", "Pavimenti", "Deodorizzazione"],
  },
  {
    icon: Leaf,
    title: "Giardinaggio e Aree Verdi",
    desc: "Cura e manutenzione di giardini condominiali, aree verdi aziendali e spazi esterni privati. Taglio erba, potatura siepi e gestione del verde ornamentale.",
    tags: ["Taglio erba", "Potatura", "Verde ornamentale"],
  },
  {
    icon: ShieldCheck,
    title: "Sanificazione e Igienizzazione",
    desc: "Trattamenti di sanificazione profonda con nebulizzatori e prodotti biocidi certificati. Ideali per uffici, scuole, cliniche e luoghi ad alto affollamento.",
    tags: ["Nebulizzazione", "Biocidi", "Cliniche", "Scuole"],
  },
  {
    icon: Bug,
    title: "Derattizzazione e Disinfestazione",
    desc: "Interventi professionali contro roditori, blatte, zanzare e altri infestanti. Utilizziamo prodotti omologati e tecniche sicure per uomini e animali domestici.",
    tags: ["Roditori", "Blatte", "Zanzare", "Prodotti omologati"],
  },
  {
    icon: Wind,
    title: "Pulizia Vetri e Facciate",
    desc: "Pulizia professionale di vetrate, facciate in vetro, finestre e lucernari anche in altezza. Interventi con sistemi di sicurezza certificati e attrezzature specifiche.",
    tags: ["Vetrate", "Facciate", "Finestre", "Lavoro in quota"],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ServiziPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-14 sm:py-20 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #1a7a32 0%, #25A244 60%, #4DC76A 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest bg-white/20 rounded-full px-4 py-1.5 mb-6 inline-block"
          >
            I nostri servizi
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Tutto ciò di cui hai bisogno
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-green-100 text-base sm:text-lg leading-relaxed"
          >
            Dalla pulizia condominiale alla sanificazione di ambienti complessi —
            offriamo 11 servizi specializzati con standard di qualità elevati.
          </motion.p>
        </div>
      </section>

      {/* Grid servizi */}
      <section className="py-14 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl mb-4 sm:mb-5"
                  style={{ backgroundColor: "#e8f5ed" }}
                >
                  <s.icon size={22} style={{ color: "#25A244" }} />
                </div>
                <h2
                  className="font-bold text-[#0f172a] mb-2 sm:mb-3 text-base sm:text-lg"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {s.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 sm:mb-5 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "#e8f5ed", color: "#25A244" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
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
            Non trovi quello che cerchi?
          </h2>
          <p className="text-green-100 mb-7 leading-relaxed text-sm sm:text-base">
            Contattaci: valutiamo ogni richiesta e troviamo la soluzione più adatta
            alle tue esigenze specifiche.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#25A244] bg-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Richiedi un preventivo
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
