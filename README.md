# Eldor Sattarov — Portfolio

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Motion (Framer Motion) · Lenis smooth scroll

## Ishga tushirish (Windows / WebStorm)

```bash
npm install
npm run dev
```

Brauzerda: http://localhost:3000

Production build:

```bash
npm run build
npm start
```

> Node.js 20.9+ kerak (tavsiya: Node 22 LTS).

## Tuzilishi

```
app/
  layout.tsx        — shriftlar, meta, LangProvider, Lenis
  page.tsx          — bo'limlar tartibi
  globals.css       — ranglar (@theme), CSS animatsiyalar
components/
  Hero.tsx          — fonsiz portret, ELDOR / SATTAROV, parallax
  TechMarquee.tsx   — ikki qatorli suzuvchi lenta
  About.tsx         — bento-grid (bio, 6+, soat, ta'lim, tillar, kod, stack)
  Skills.tsx        — ochiladigan "Nima qila olaman" qatorlari
  Work.tsx          — ustma-ust taxlanuvchi loyiha kartochkalari + "Bu — faqat ayrimlari"
  panels/index.tsx  — har bir loyihaning animatsiyali mini-UI oynasi
  Journey.tsx       — vaqt chizig'i
  Contact.tsx       — aloqa, katta lenta, footer
  Dock.tsx          — pastdagi suzuvchi menyu (faol bo'limni kuzatadi)
  LangSwitch.tsx    — UZ / RU / EN (localStorage'da saqlanadi)
lib/
  i18n.ts           — BARCHA matnlar (uz / ru / en)
  data.ts           — kontaktlar, texnologiyalar, loyihalar ro'yxati
public/images/
  eldor-cut.webp    — fonsiz portret (hero va aloqa)
  eldor.jpg         — avatar
```

## Tez o'zgartirish

- **Matnlar** → `lib/i18n.ts`
- **Kontaktlar, texnologiyalar, loyihalar** → `lib/data.ts`
- **Aksent rang** → `app/globals.css` ichida `--color-accent` va `:root` dagi `--accent*` qiymatlari
- **Yangi loyiha qo'shish** → `lib/data.ts` → `PROJECTS`, matnini `lib/i18n.ts` → `projects`, vizualini `components/panels/index.tsx` → `PANELS`
- **Rasm** → `public/images/` dagi fayllarni bir xil nom bilan almashtiring

## Deploy (Vercel)

1. Loyihani GitHub'ga yuklang.
2. https://vercel.com → **Add New Project** → repozitoriyni tanlang → **Deploy**.
3. O'z domeningiz bo'lsa: Project → Settings → Domains.
4. Ixtiyoriy: `NEXT_PUBLIC_SITE_URL=https://sizning-domen.uz` env o'zgaruvchisini qo'shing (Open Graph rasmlari uchun).

O'z VPS'ingizda: `npm run build && npm start` (PM2 + Nginx reverse proxy bilan).
