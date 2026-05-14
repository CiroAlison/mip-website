# M.I.P. Moderna Impresa di Pulizia — Documentazione Tecnica

**URL live:** https://mip-website-seven.vercel.app  
**Repository:** https://github.com/CiroAlison/mip-website  
**Ultimo aggiornamento:** maggio 2026

---

## Stack Tecnico

| Tecnologia | Versione | Note |
|---|---|---|
| Next.js | 16.2.6 | App Router, TypeScript, Turbopack |
| Tailwind CSS | v4 | `@import "tailwindcss"` + `@theme` — NO tailwind.config.js |
| Framer Motion | latest | `type Variants`, `useInView`, `AnimatePresence` |
| Neon PostgreSQL | serverless | `@neondatabase/serverless` |
| Vercel | — | scope: `ciroali98-9772s-projects` |
| Node.js | v20.11.0 | PATH: `/private/tmp/node-v20.11.0-darwin-x64/bin/` |

> **Importante:** Per qualsiasi comando npm/npx usare sempre:  
> `export PATH="/private/tmp/node-v20.11.0-darwin-x64/bin:$PATH" && ...`

---

## Struttura File

```
mip-website/
├── app/
│   ├── layout.tsx            # Layout globale (Navbar, Footer, WhatsApp, Cookie, Bolle)
│   ├── page.tsx              # Homepage (10 sezioni animate)
│   ├── globals.css           # Stili globali + @keyframes
│   ├── favicon.ico
│   ├── contatti/page.tsx     # Form preventivo + WhatsApp
│   ├── servizi/page.tsx      # Griglia 11 servizi
│   ├── faq/page.tsx          # Accordion 10 domande
│   ├── privacy/page.tsx      # Privacy Policy GDPR
│   └── api/contatti/route.ts # POST → Neon DB
├── components/
│   ├── Navbar.tsx            # Navbar sticky + progress bar scroll
│   ├── Footer.tsx            # Footer dark con logo trasparente
│   ├── WhatsAppButton.tsx    # Pulsante fisso bottom-right
│   ├── CookieBanner.tsx      # Banner GDPR con localStorage
│   └── FloatingBubbles.tsx   # Bolle di sapone 3D animate (globali)
└── public/
    ├── logo-mip.png          # Logo originale con sfondo bianco
    └── logo-mip-transparent.png # Logo con sfondo rimosso (Pillow Python)
```

---

## Dati Aziendali

| Campo | Valore |
|---|---|
| Ragione sociale | M.I.P. Moderna Impresa di Pulizia s.r.l. |
| P.IVA | 06547811213 |
| Indirizzo | Via G. Porzio, 4 — C.D.N. Is. E/3, 80143 Napoli (NA) |
| Numero Verde | 800 65 31 10 (gratuito) |
| WhatsApp | 334 706 4060 → `https://wa.me/393347064060` |
| Email | info@mipimpresadipulizie.it |
| Orari | Lun–Ven: 08:00–16:00 |
| Dominio futuro | mipimpresadipulizie.it (da collegare su Vercel) |

---

## Homepage — 10 Sezioni

1. **Hero** — Layout split desktop (testo sx / due foto dx), Ken Burns 28s, bolle CSS, badge, 2 CTA
2. **Counter Strip** — Sfondo verde scuro, 4 contatori animati con `AnimatedCounter` (useInView + setInterval)
3. **Servizi** — Griglia 6 card con wipe animation titolo + underline verde animato
4. **Come Lavoriamo** — 4 step (Contatto → Sopralluogo → Preventivo → Intervento), connettore orizzontale
5. **Chi Siamo** — Split: testo + blockquote + badge certificazioni / foto con overlay statistiche
6. **Testimonianze** — Sfondo verde scuro, 3 card glass effect con stelle gialle
7. **Perché Sceglierci** — 4 card benefit, hover shadow + lift
8. **Clienti** — Griglia 16 aziende
9. **Google Reviews CTA** — Link a Google Maps + link lascia recensione
10. **CTA Finale** — Verde gradiente, link contatti

---

## Animazioni Chiave

### Ken Burns (hero background)
```css
@keyframes kenburns {
  0%   { transform: scale(1.0) translate(0%, 0%); }
  33%  { transform: scale(1.10) translate(-1.5%, -1%); }
  66%  { transform: scale(1.06) translate(1%, -0.8%); }
  100% { transform: scale(1.0) translate(0%, 0%); }
}
/* durata: 28s */
```

### Wipe Title (effetto tergicristallo sui titoli h2)
```tsx
// Componente WipeTitle in page.tsx
initial={{ clipPath: "inset(0 100% 0 0 round 2px)" }}
whileInView={{ clipPath: "inset(0 0% 0 0 round 2px)" }}
// Rivela il testo da sinistra a destra come un tergicristallo
```

### Bolle di Sapone 3D (FloatingBubbles.tsx)
- **16 bolle**, dimensioni 30–120px, distribuzione golden angle
- **z-index: 40** → sopra tutto il contenuto
- **mix-blend-mode: multiply** → più visibili su sfondi bianchi, si fondono su verdi
- Gradiente radiale con riflesso bianco + corpo verde per effetto sfera 3D
- Wobble laterale individuale (±10–34px) + rise 106vh in loop

### Scroll Progress Bar (Navbar)
```tsx
const { scrollYProgress } = useScroll(); // framer-motion
// Barra verde che si riempie in fondo alla navbar mentre si scorre
```

---

## Database — Neon PostgreSQL

**Tabella:** `richieste_preventivo`

```sql
CREATE TABLE richieste_preventivo (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT,
  servizio TEXT,
  messaggio TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Flusso form contatti:**
1. Utente compila il form su `/contatti`
2. POST a `/api/contatti` → salva su Neon DB
3. Si apre WhatsApp con il riepilogo del preventivo

---

## Variabili d'Ambiente Vercel

```
DATABASE_URL=postgresql://...  (Neon connection string)
```

---

## Comandi Utili

```bash
# Sviluppo locale
export PATH="/private/tmp/node-v20.11.0-darwin-x64/bin:$PATH"
cd "Desktop/mario buono/mip-website"
npm run dev

# Build
npm run build

# Deploy Vercel
npx vercel deploy --prod --yes --scope ciroali98-9772s-projects
```

---

## Colori Brand

| Nome | Hex | Uso |
|---|---|---|
| Verde principale | `#25A244` | CTA, link, icone |
| Verde scuro | `#1a7a32` | Hover, sfumature |
| Verde chiaro | `#4DC76A` | Gradienti secondari |
| Verde menta | `#7fe89b` | Testo su sfondi scuri |
| Navy | `#0f172a` | Testo principale, footer |

---

## Font

- **Poppins** (700, 800) — titoli e heading
- **Inter** — corpo del testo

---

## Cose da Fare (quando il cliente è pronto)

- [ ] Collegare dominio `mipimpresadipulizie.it` su Vercel (DNS → CNAME/A record)
- [ ] Aggiungere vere foto aziendali (sostituire Unsplash)
- [ ] Ottenere link reale Google Business Profile per "Lascia una recensione"
- [ ] Aggiornare sezione Clienti con eventuali nuovi clienti
- [ ] Configurare email di notifica per ogni preventivo ricevuto

---

## Git History (principali commit)

```
81790a2 Bolle più visibili su sfondo bianco: verde + mix-blend-mode multiply
6528a25 Fix: rimuovi scroll indicator + bolle più grandi (30-120px) + z-index 40
784e2b2 Hero split + bolle 3D globali + fix counter duplicato
317ad94 Contrasto, animazioni scroll e logo trasparente footer
c3acba5 Hero: Ken Burns animation + nuova tagline + fix logo hero e footer
d6e8098 Redesign strutturale completo homepage: 10 sezioni animate
cf304e3 Redesign verde logo originale, P.IVA 06547811213
74af62d Fix link recensioni Google
efd90c8 WhatsApp fisso, cookie banner, privacy policy, orari, Google reviews
3482897 Aggiunge numero verde 800 65 31 10
6b1bf13 Aggiunge FAQ + fix Chi siamo mobile
c7149bc Foto stock Unsplash
ae5baf2 Form contatti: apre WhatsApp dopo invio
da901a0 Sezione clienti
1dbeb7b Ottimizzazione mobile completa
```
