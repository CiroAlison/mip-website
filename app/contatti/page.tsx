"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Pulizia condomini",
  "Pulizia uffici e ambienti di lavoro",
  "Pulizia appartamenti e case",
  "Pulizia fine cantiere / post ristrutturazione",
  "Pulizie cucine industriali e ristoranti (HACCP)",
  "Pulizia yacht, barche e natanti",
  "Pulizia ascensori e montacarichi",
  "Giardinaggio e cura aree verdi",
  "Sanificazione e igienizzazione",
  "Derattizzazione e disinfestazione",
  "Pulizia vetri e facciate",
  "Altro",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContattiPage() {
  const [form, setForm] = useState({
    nome: "",
    telefono: "",
    email: "",
    servizio: "",
    messaggio: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Errore durante l'invio");
      }
      setStatus("success");
      setForm({ nome: "", telefono: "", email: "", servizio: "", messaggio: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Errore imprevisto");
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #003d7a 0%, #0055A4 60%, #00AEEF 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold uppercase tracking-widest bg-white/20 rounded-full px-4 py-1.5 mb-6 inline-block"
          >
            Siamo qui per te
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Contattaci
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-blue-100 text-lg leading-relaxed"
          >
            Compila il modulo per ricevere un preventivo gratuito. Ti risponderemo
            entro 24 ore.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h2
                  className="font-bold text-[#0f172a] text-xl mb-5"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  M.I.P. Moderna Impresa di Pulizia
                </h2>

                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 p-2 rounded-lg shrink-0"
                      style={{ backgroundColor: "#e6f0fa" }}
                    >
                      <MapPin size={16} style={{ color: "#0055A4" }} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Sede</p>
                      <p className="text-sm text-gray-700">
                        Via G. Porzio, 4 — C.D.N. Is. E/3<br />
                        80143 Napoli (NA)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 p-2 rounded-lg shrink-0"
                      style={{ backgroundColor: "#e6f0fa" }}
                    >
                      <Phone size={16} style={{ color: "#0055A4" }} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Telefono</p>
                      <a href="tel:0813625750" className="text-sm font-medium text-[#0055A4] hover:underline">
                        081 362 5750
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 p-2 rounded-lg shrink-0"
                      style={{ backgroundColor: "#e6f0fa" }}
                    >
                      <MessageCircle size={16} style={{ color: "#0055A4" }} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">WhatsApp / Info</p>
                      <a
                        href="https://wa.me/393347064060"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#0055A4] hover:underline"
                      >
                        334 706 4060
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 p-2 rounded-lg shrink-0"
                      style={{ backgroundColor: "#e6f0fa" }}
                    >
                      <Mail size={16} style={{ color: "#0055A4" }} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Email</p>
                      <a
                        href="mailto:info@mipimpresadipulizie.it"
                        className="text-sm font-medium text-[#0055A4] hover:underline break-all"
                      >
                        info@mipimpresadipulizie.it
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Mappa */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                  title="M.I.P. Moderna Impresa di Pulizia - mappa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.6!2d14.2681!3d40.8722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09b51e6a8d97%3A0x0!2sVia+G.+Porzio+4+Napoli!5e0!3m2!1sit!2sit!4v1"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.aside>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h2
                className="font-bold text-[#0f172a] text-xl mb-6"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Richiedi un preventivo gratuito
              </h2>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle size={56} className="text-green-500" />
                  <h3 className="text-xl font-bold text-[#0f172a]" style={{ fontFamily: "var(--font-poppins)" }}>
                    Richiesta inviata!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                    Grazie per averci contattato. Ti risponderemo entro 24 ore all'indirizzo email fornito.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm font-semibold text-[#0055A4] hover:underline"
                  >
                    Invia un'altra richiesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider" htmlFor="nome">
                        Nome e Cognome *
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Mario Rossi"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                        style={{ focusRingColor: "#0055A4" } as React.CSSProperties}
                        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #0055A4")}
                        onBlur={(e) => (e.target.style.boxShadow = "")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider" htmlFor="telefono">
                        Telefono *
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        required
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+39 333 1234567"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #0055A4")}
                        onBlur={(e) => (e.target.style.boxShadow = "")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider" htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="mario@esempio.it"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                      onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #0055A4")}
                      onBlur={(e) => (e.target.style.boxShadow = "")}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider" htmlFor="servizio">
                      Tipologia servizio *
                    </label>
                    <select
                      id="servizio"
                      name="servizio"
                      required
                      value={form.servizio}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none transition-all bg-white"
                      onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #0055A4")}
                      onBlur={(e) => (e.target.style.boxShadow = "")}
                    >
                      <option value="" disabled>Seleziona un servizio…</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider" htmlFor="messaggio">
                      Messaggio
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows={4}
                      value={form.messaggio}
                      onChange={handleChange}
                      placeholder="Descrivi brevemente le tue esigenze…"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all resize-none"
                      onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #0055A4")}
                      onBlur={(e) => (e.target.style.boxShadow = "")}
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
                      <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{errorMsg || "Si è verificato un errore. Riprova più tardi."}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90"
                    style={{ backgroundColor: "#0055A4" }}
                  >
                    {status === "loading" ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        Invio in corso…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Invia richiesta
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    I campi contrassegnati con * sono obbligatori. I tuoi dati saranno trattati ai sensi del GDPR.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
