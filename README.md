# Magic Kids Afterschool — Site oficial

Site-ul oficial al Magic Kids Afterschool din Novaci, județul Gorj.

🌐 **Live**: [magickidsnovaci.ro](https://magickidsnovaci.ro)

## 🛠️ Tehnologia

- **[Astro 5](https://astro.build)** — generator de site-uri statice, optim pentru SEO
- HTML/CSS/JavaScript pur (fără framework JS)
- Sitemap automat
- llms.txt pentru AI discovery
- Schema.org JSON-LD pentru SEO local & AI visibility

## 📁 Structura

```
magickids-novaci/
├── public/
│   ├── logo.png             # Logo transparent
│   ├── robots.txt           # Permite AI bots
│   ├── llms.txt             # Concis pentru AI (ChatGPT, Claude, Perplexity)
│   └── llms-full.txt        # Detaliat pentru AI
│
├── src/
│   ├── components/
│   │   ├── Nav.astro        # Meniu cu hamburger mobil
│   │   ├── Footer.astro     # Footer cu contact + social
│   │   ├── SEO.astro        # Meta tags + OG + Twitter
│   │   └── SchemaOrg.astro  # JSON-LD structured data
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro # Template comun toate paginile
│   │   └── BlogPost.astro   # Template articole blog
│   │
│   ├── pages/
│   │   ├── index.astro      # Home (cu animația magică)
│   │   ├── servicii.astro   # 5 programe
│   │   ├── program.astro    # Orar zilnic + săptămânal
│   │   ├── tarif.astro      # 1.350 lei + ce e inclus
│   │   ├── contact.astro    # Contact + formular
│   │   └── blog/
│   │       ├── index.astro  # Lista articole
│   │       └── [...slug].astro  # Articol individual
│   │
│   ├── content/
│   │   └── blog/            # Articole în Markdown
│   │
│   ├── styles/
│   │   └── global.css       # Variabile + utility classes
│   │
│   └── content.config.ts    # Schema validare articole blog
│
├── astro.config.mjs         # Config Astro + sitemap
├── package.json
└── tsconfig.json
```

## 🚀 Setup local

### Cerințe
- **Node.js 18+** (recomandat 20 LTS)
- **npm** sau **pnpm**

### Instalare
```bash
npm install
```

### Development
```bash
npm run dev
```
Site-ul va rula la http://localhost:4321

### Build pentru producție
```bash
npm run build
```
Output în `dist/`

### Preview build
```bash
npm run preview
```

## 🌐 Deploy pe Vercel

Fiindcă proiectul folosește **Astro**, Vercel îl recunoaște automat. Pașii:

1. **Push proiectul pe GitHub** (șterge fișierul `index.html` vechi din root)
2. În Vercel Dashboard → **Settings** al proiectului existent
3. Verifică **Framework Preset = Astro** (Vercel detectează singur)
4. Click **Redeploy**

Sau, dacă creezi un proiect nou:
1. **vercel.com** → New Project → import repo
2. Framework Preset: **Astro** (auto)
3. Root Directory: `./`
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy

## 📝 Cum adaug un articol pe blog?

1. Creează un fișier nou în `src/content/blog/` cu extensia `.md`
2. Numele fișierului devine URL-ul (`exemplu-articol.md` → `/blog/exemplu-articol/`)
3. Adaugă frontmatter și conținut:

```markdown
---
title: "Titlul articolului"
description: "Descriere scurtă pentru SEO și preview"
publishDate: 2026-05-01
tags: ["tag1", "tag2"]
draft: false
---

Conținutul articolului în **Markdown**.

## Subtitlu

Lorem ipsum...
```

4. Push pe GitHub → Vercel face deploy automat în ~30 secunde

## 🎨 Cum modific stilurile globale?

Variabilele de culoare sunt în `src/styles/global.css`:

```css
:root {
  --magenta: #E63B8C;   /* culoare principală CTA */
  --blue:    #2BB3E0;
  --orange:  #FF8A2A;
  --yellow:  #FFD93D;
  --teal:    #3FBDAE;
  --navy:    #14253F;   /* text închis */
  --cream:   #FFF8F0;   /* fundal */
}
```

## 🔍 SEO — ce e configurat

✅ **Meta tags unice** pe fiecare pagină
✅ **Open Graph** + **Twitter Cards** (preview pe social)
✅ **JSON-LD structured data**: Organization, EducationalOrganization, LocalBusiness, Service catalog, BreadcrumbList
✅ **Sitemap.xml** generat automat
✅ **Robots.txt** cu permisiuni AI bots
✅ **llms.txt** + **llms-full.txt** pentru ChatGPT, Claude, Perplexity, Gemini
✅ **Canonical URLs** pe fiecare pagină
✅ **Geo meta tags** (Novaci, Gorj)
✅ **Skip link** + ARIA labels (accessibility)
✅ **Reduce-motion** support

## 📞 Contact

- 📞 0760 245 111
- ✉️ contact@magickidsnovaci.ro
- 📍 Strada Parângului nr. 118, Novaci, Gorj
- 🕛 Luni–Vineri 12:00–17:00

## 📜 Licență

© 2026 Magic Kids Afterschool. Toate drepturile rezervate.
