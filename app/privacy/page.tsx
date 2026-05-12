import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — M.I.P. Moderna Impresa di Pulizia",
  description: "Informativa sul trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679).",
};

export default function PrivacyPage() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <h1
          className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mb-2"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">Ultimo aggiornamento: maggio 2026</p>

        <div className="prose prose-sm sm:prose max-w-none text-gray-700 space-y-8">

          <div>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">1. Titolare del trattamento</h2>
            <p>
              <strong>M.I.P. Moderna Impresa di Pulizia s.r.l.</strong><br />
              Via G. Porzio, 4 — C.D.N. Is. E/3, 80143 Napoli (NA)<br />
              Email: <a href="mailto:info@mipimpresadipulizie.it" className="text-[#0055A4] hover:underline">info@mipimpresadipulizie.it</a><br />
              Tel: <a href="tel:800653110" className="text-[#0055A4] hover:underline">800 65 31 10</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">2. Dati raccolti</h2>
            <p>Attraverso il modulo di contatto raccogliamo i seguenti dati personali:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nome e cognome</li>
              <li>Numero di telefono</li>
              <li>Indirizzo email</li>
              <li>Tipologia di servizio richiesto</li>
              <li>Testo del messaggio (facoltativo)</li>
            </ul>
            <p className="mt-2">
              Il sito utilizza esclusivamente <strong>cookie tecnici</strong> necessari al funzionamento.
              Non vengono utilizzati cookie di profilazione o di terze parti a fini pubblicitari.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">3. Finalità e base giuridica</h2>
            <p>I dati sono trattati per:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Rispondere alle richieste di preventivo (art. 6.1.b GDPR — esecuzione precontrattuale)</li>
              <li>Adempiere ad obblighi di legge (art. 6.1.c GDPR)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">4. Conservazione dei dati</h2>
            <p>
              I dati forniti tramite il modulo di contatto vengono conservati per il tempo strettamente
              necessario a evadere la richiesta e comunque non oltre <strong>24 mesi</strong> dalla raccolta.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">5. Diritti dell&apos;interessato</h2>
            <p>Ai sensi degli artt. 15–22 del GDPR, l&apos;interessato ha diritto di:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Accedere ai propri dati</li>
              <li>Rettificarli o cancellarli</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Proporre reclamo al Garante (www.garanteprivacy.it)</li>
            </ul>
            <p className="mt-2">
              Per esercitare i propri diritti: <a href="mailto:info@mipimpresadipulizie.it" className="text-[#0055A4] hover:underline">info@mipimpresadipulizie.it</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0f172a] mb-2">6. Destinatari dei dati</h2>
            <p>
              I dati non vengono ceduti a terzi. Vengono conservati su server sicuri forniti da
              Neon Inc. (database) e Vercel Inc. (hosting), entrambi conformi al GDPR con adeguate
              garanzie per i trasferimenti extra-UE.
            </p>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link href="/" className="text-sm text-[#0055A4] hover:underline">
            ← Torna alla Home
          </Link>
        </div>
      </div>
    </section>
  );
}
