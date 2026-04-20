# 🕌 Agent Prompt: Website Dakwah Ustadz Fauzan Sugiyono
> Paste setiap chunk secara berurutan ke Claude Code / Cursor Agent.
> Tunggu chunk selesai sebelum lanjut ke chunk berikutnya.

---

## ═══════════════════════════════════════
## CHUNK 1 — Project Setup & Design System
## ═══════════════════════════════════════

```
You are an expert React developer. Scaffold a complete React + Vite project for a Islamic scholar's personal website.

TECH STACK:
- React 18 + Vite
- React Router DOM v6
- Tailwind CSS v3
- Framer Motion
- Lucide React (icons)

TASKS:

1. Initialize project structure:
   ustadz-fauzan/
   ├── public/
   │   └── assets/
   │       └── images/
   ├── src/
   │   ├── components/
   │   │   ├── layout/
   │   │   │   ├── Navbar.jsx
   │   │   │   ├── Footer.jsx
   │   │   │   └── Layout.jsx
   │   │   └── ui/
   │   │       ├── Button.jsx
   │   │       ├── Card.jsx
   │   │       ├── Badge.jsx
   │   │       ├── SectionTitle.jsx
   │   │       └── ScrollReveal.jsx
   │   ├── pages/
   │   │   ├── Home.jsx
   │   │   ├── Profil.jsx
   │   │   ├── Kajian.jsx
   │   │   ├── Video.jsx
   │   │   └── Kegiatan.jsx
   │   ├── data/
   │   │   ├── profil.js
   │   │   ├── materi.js
   │   │   ├── video.js
   │   │   └── kegiatan.js
   │   ├── hooks/
   │   │   └── useScrollReveal.js
   │   ├── styles/
   │   │   └── globals.css
   │   ├── App.jsx
   │   └── main.jsx
   ├── tailwind.config.js
   ├── vite.config.js
   └── package.json

2. Configure tailwind.config.js with this EXACT custom design token:

   colors:
     primary:
       50:  '#E1F5EE'
       100: '#9FE1CB'
       200: '#5DCAA5'
       300: '#2DB88A'
       400: '#1D9E75'   <- main brand color (teal islami)
       500: '#0F6E56'
       600: '#085041'
       700: '#04342C'
     accent:
       400: '#EF9F27'   <- amber highlight
       500: '#BA7517'
     surface:
       50:  '#FAFAF7'   <- background utama (warm white)
       100: '#F5F0E8'   <- surface card
       200: '#EDE8DC'   <- border ringan
     dark:
       700: '#444441'
       800: '#2C2C2A'
       900: '#1A1A18'

   fontFamily:
     serif: ['Lora', 'Georgia', 'serif']
     sans:  ['Inter', 'system-ui', 'sans-serif']

3. Create globals.css with:
   - Tailwind directives
   - Google Fonts import: Inter + Lora
   - Smooth scroll behavior
   - Custom thin teal scrollbar
   - .geometric-pattern: subtle SVG Islamic star grid bg (opacity ~5%)
   - .glass-card: backdrop-blur-sm bg-white/80 border border-surface-200
   - .ayat-text: font-serif italic text-primary-500 with decorative quote marks

4. Create Layout.jsx wrapping all pages with Navbar + Footer.
   main has min-h-screen bg-surface-50.

5. Create Navbar.jsx:
   - Fixed top, bg-white/90 backdrop-blur, subtle bottom border
   - Left: "Ustadz Fauzan Sugiyono" font-serif text-dark-800
   - Right: nav links — Beranda | Profil | Kajian | Video | Kegiatan
   - Active link: text-primary-400 with animated underline
   - Mobile: hamburger -> slide-down menu (Framer Motion)
   - Navbar shrinks on scroll (py-4 -> py-2)

6. Create Footer.jsx:
   - bg-dark-800 text-white, 3-column layout
   - Columns: Tentang, Navigasi, Kontak
   - Kontak: WA 085568057474 (wa.me link), IG fauzan.sugiyono
   - Top border: 3px gradient primary-400 to accent-400

7. Create reusable UI components:

   Button.jsx:
   - variants: primary | outline | ghost
   - sizes: sm | md | lg
   - Framer Motion: whileHover scale 1.02, whileTap scale 0.97

   Card.jsx:
   - White bg, rounded-2xl, shadow-sm hover:shadow-md
   - Framer Motion: y: -4 on hover

   Badge.jsx:
   - Category color map:
       Fiqih -> bg-primary-50 text-primary-600
       Aqidah -> bg-amber-50 text-amber-700
       Tafsir -> bg-blue-50 text-blue-700
       Akhlak -> bg-purple-50 text-purple-700
       Sirah -> bg-rose-50 text-rose-700

   SectionTitle.jsx:
   - title (font-serif text-3xl text-dark-800) + subtitle
   - Decorative w-12 h-1 bg-primary-400 bar below title

   ScrollReveal.jsx:
   - Framer Motion + IntersectionObserver wrapper
   - Props: direction (up/left/right/fade), delay, stagger

8. App.jsx with React Router v6:
   Routes: / | /profil | /kajian | /video | /kegiatan
   Each wrapped in <Layout>. Add ScrollToTop on route change.

9. Run npm install and verify npm run dev works.
```

---

## ══════════════════════════════════════════════
## CHUNK 2 — Data Layer & Halaman Beranda + Profil
## ══════════════════════════════════════════════

```
Continue the ustadz-fauzan project. Chunk 1 is done.
Now build the data layer and first two pages.

═══════════════
PART A — DATA
═══════════════

1. src/data/profil.js:

export const profil = {
  nama: "Fauzan Sugiyono",
  gelar: "",                        // TODO: tambahkan gelar jika ada
  tagline: "Pengkaji Fikih Muamalah dan Tafsir Al-Qur'an",
  foto: "/assets/images/foto-profil.jpg",
  quote: {
    teks: "Belajarlah iman, ilmu dan amal secara bersamaan",
    sumber: "Ibnu Mas'ud"
  },
  spesialisasi: ["Fikih Muamalah", "Tafsir Al-Qur'an"],
  pendidikan: [
    { id: 1, institusi: "Pesantren Salafiyah Modern dan Dakwah Al Kautsar", lokasi: "Jakarta Timur", tahun: "2000", jenjang: "Pesantren" },
    { id: 2, institusi: "Universitas Imam Muhammad Ibn Su'ud al Islamiyah (LIPIA)", lokasi: "Jakarta", tahun: "2011", jenjang: "S1", jurusan: "" },
    { id: 3, institusi: "Institut Ilmu Al-Qur'an Jakarta", lokasi: "Jakarta", tahun: "2016", jenjang: "S2" },
    { id: 4, institusi: "Institut Ilmu Al-Qur'an Jakarta", lokasi: "Jakarta", tahun: "2024 - sekarang", jenjang: "S3", status: "ongoing" }
  ],
  karya: [
    { id: 1, judul: "Buku Bahasa Arab Untuk SDIT kelas 1 dan 2", tahun: "2008", penerbit: "" },
    { id: 2, judul: "Buku Tauhid untuk SMA (terjemah)", tahun: "2008", penerbit: "" },
    { id: 3, judul: "Qiyash Syabah fi Ikhtibas Ba'dul Ath'imah", tahun: "2011", penerbit: "", kategori: "Karya Bahasa Arab" },
    { id: 4, judul: "Hukum Anak di Luar Pernikahan Tercatat di KUA: Studi Fatwa MUI dan Mahkamah Konstitusi", tahun: "2016", penerbit: "" },
    { id: 5, judul: "Bimbingan Muslim dari Lahir hingga Wafat", tahun: "2012", penerbit: "PT Maghfiroh Pustaka" },
    { id: 6, judul: "The Great of Umar bin Khattab", tahun: "2013", penerbit: "PT Maghfah Pustaka", kategori: "Sejarah" },
    { id: 7, judul: "50 Tanya Jawab seputar MLM Syariah", tahun: "2023", penerbit: "PT Darul Mutsaqaf Ar Rasyid" },
    { id: 8, judul: "30 Hadits Materi Kultum Ramadhan", tahun: "2025", penerbit: "PT Darul Mutsaqaf Ar Rasyid" }
  ],
  organisasi: [], // TODO: isi jika ada
  kontak: {
    wa: "085568057474",
    instagram: "fauzan.sugiyono",
    youtube: "",  // TODO
    telegram: ""  // TODO
  }
}

2. src/data/materi.js:

export const materiList = [
  { id: 1, judul: "Fikih Muamalah", kitab: "", penulis: "", kategori: "Fiqih",
    deskripsi: "", jadwal: "", lokasi: "", pdfUrl: "", thumbnail: "",
    tags: ["Muamalah", "Ekonomi Islam", "Fiqih"], aktif: true },
  { id: 2, judul: "Kitab Syu'abul Iman", kitab: "Syu'abul Iman", penulis: "Imam Al-Baihaqi",
    kategori: "Aqidah", deskripsi: "", jadwal: "", lokasi: "", pdfUrl: "", thumbnail: "",
    tags: ["Aqidah", "Akhlaq", "Cabang Iman"], aktif: true },
  { id: 3, judul: "Tafsir Ayat Ahkam", kitab: "Tafsir Ayat Ahkam", penulis: "Ali Ash-Shabuni",
    kategori: "Tafsir", deskripsi: "", jadwal: "", lokasi: "", pdfUrl: "", thumbnail: "",
    tags: ["Tafsir", "Hukum Islam", "Al-Qur'an"], aktif: true },
  { id: 4, judul: "Tafsir Juz Amma", kitab: "Juz Amma", penulis: "",
    kategori: "Tafsir", deskripsi: "", jadwal: "", lokasi: "", pdfUrl: "", thumbnail: "",
    tags: ["Tafsir", "Juz 30", "Al-Qur'an"], aktif: true },
  { id: 5, judul: "Sirah Nabawiyah dan Sirah Sahabat", kitab: "", penulis: "",
    kategori: "Sirah", deskripsi: "", jadwal: "", lokasi: "", pdfUrl: "", thumbnail: "",
    tags: ["Sirah", "Sejarah Islam", "Nabawiyah"], aktif: true },
  { id: 6, judul: "Kitab Ihya Ulumuddin", kitab: "Ihya Ulumuddin", penulis: "Imam Al-Ghazali",
    kategori: "Akhlak", deskripsi: "", jadwal: "", lokasi: "", pdfUrl: "", thumbnail: "",
    tags: ["Akhlak", "Tasawuf", "Spiritualitas"], aktif: true }
]

3. src/data/video.js:

export const videoList = [
  { id: 1, judul: "", platform: "youtube", embedId: "", thumbnail: "",
    kategori: "", durasi: "", tanggal: "" }
  // TODO: tambah video
]

4. src/data/kegiatan.js:

export const kegiatanList = [
  { id: 1, nama: "", jenis: "rutin", hari: "", waktu: "", lokasi: "",
    alamat: "", deskripsi: "", status: "aktif", kontak: "" }
  // TODO: tambah kegiatan
]

═══════════════════════
PART B — Home.jsx
═══════════════════════

Sections (each in <ScrollReveal>):

1. Hero (min-h-screen, bg-surface-50 + .geometric-pattern):
   - Badge: "Pengkaji Fikih Muamalah & Tafsir"
   - H1: nama (font-serif text-4xl md:text-6xl)
   - Subheading: tagline
   - Buttons: "Lihat Materi Kajian" -> /kajian | "Hubungi via WhatsApp" -> wa.me
   - Animated scroll chevron at bottom
   - Stagger entrance animation (Framer Motion)

2. Quote Section (bg-primary-400 text-white py-16):
   - Large decorative " mark (opacity-20 text-8xl)
   - Quote teks (font-serif italic text-xl md:text-2xl)
   - Sumber attribution

3. Preview Kajian (3 cards from materiList):
   - SectionTitle: "Materi Kajian"
   - Grid md:grid-cols-3
   - Each: kategori badge + judul + truncated deskripsi + link to /kajian

4. Sekilas Profil (2 columns):
   - Left: foto (rounded-3xl placeholder)
   - Right: nama, spesialisasi badges, pendidikan terakhir, Button -> /profil

5. CTA Kontak (bg-dark-800 text-white py-16):
   - WhatsApp + Instagram buttons with Lucide icons

═══════════════════════
PART C — Profil.jsx
═══════════════════════

Sections:

1. Header Profil:
   - bg-gradient surface-50 to primary-50
   - Foto (rounded-full, ring-4 ring-primary-200, w-40 h-40)
   - Nama, tagline, spesialisasi badges, social links

2. Riwayat Pendidikan — Vertical timeline:
   - Left: 2px teal vertical line
   - Each item: dot on line + floating card (jenjang badge, institusi, lokasi, tahun)
   - S3 gets "Sedang Berlangsung" amber badge
   - Stagger Framer Motion: slide from left

3. Bidang Kajian — 2 feature cards:
   - Fikih Muamalah (Scale icon), Tafsir Al-Qur'an (BookOpen icon)
   - border-l-4 border-primary-400 style

4. Karya Tulis — grid md:grid-cols-2 lg:grid-cols-3:
   - Each: tahun badge + judul + penerbit italic
   - Hover: lift + border-primary-400

5. Kontak section: WA + IG buttons
```

---

## ═══════════════════════════════════════════
## CHUNK 3 — Halaman Materi Kajian
## ═══════════════════════════════════════════

```
Continue the ustadz-fauzan project. Chunks 1 and 2 are done.
Build src/pages/Kajian.jsx — the primary content page.

PART A — Page Hero + Filter:
- Small hero h-48: title "Materi Kajian", subtitle
- Filter tabs (horizontal scroll mobile):
    [Semua] [Fiqih] [Aqidah] [Tafsir] [Akhlak] [Sirah]
    Active: bg-primary-400 text-white rounded-full
    Inactive: border border-surface-200 hover:border-primary-400
- Search input with Search icon (Lucide), filters by judul + tags
- Combined filter logic: match BOTH activeFilter AND searchQuery

PART B — MateriCard component (src/components/MateriCard.jsx):

Card layout:
┌─────────────────────────────┐
│  [h-40 thumbnail or icon]   │  bg-primary-50, BookOpen icon centered
├─────────────────────────────┤
│  [Badge: kategori]          │
│  Judul (font-serif bold)    │
│  Penulis/Kitab (italic sm)  │
│  ─────────────────────────  │
│  Deskripsi (2-line clamp)   │
│  ─────────────────────────  │
│  [Tag pills]                │
│  ─────────────────────────  │
│  [📄 Unduh Materi] [ℹ Info] │
└─────────────────────────────┘

PDF button:
- pdfUrl filled -> opens Google Drive link in new tab
- pdfUrl empty -> disabled, text "PDF Segera Hadir", cursor-not-allowed

Info button -> opens MateriModal

PART C — MateriModal (src/components/MateriModal.jsx):
- Fixed overlay backdrop-blur-sm bg-dark-900/50
- Centered card max-w-lg rounded-3xl bg-white p-8
- Full materi details + "Daftar Kajian via WhatsApp" CTA
- Close on X button, backdrop click, or Escape key
- Framer Motion: scale 0.9 opacity 0 -> 1 1 on open; reverse on close
- Mobile: bottom sheet (y 100% -> 0, full width)

Grid animation:
- AnimatePresence wrapping grid
- Each card: opacity 0 scale 0.95 -> 1 1, stagger 0.05s * index
- layout prop for smooth reflow on filter change

Empty state: icon + "Materi tidak ditemukan" text

PART D — Bottom CTA band:
- bg-primary-400 text-white rounded-3xl mx-4 max-w-4xl
- "Ingin Mengikuti Kajian?" + WhatsApp button
- .geometric-pattern overlay
```

---

## ══════════════════════════════════════════════
## CHUNK 4 — Halaman Video & Kegiatan
## ══════════════════════════════════════════════

```
Continue the ustadz-fauzan project. Chunks 1-3 are done.
Build Video and Kegiatan pages.

PART A — src/pages/Video.jsx + src/components/VideoCard.jsx:

Page hero: "Video Kajian" + subtitle

VideoCard behavior:
- platform=youtube + embedId filled:
    Show thumbnail: https://img.youtube.com/vi/{embedId}/hqdefault.jpg
    Overlay Play button (circle, white icon on primary-400 bg)
    On click: replace with <iframe> (lazy load, autoplay=1)
    Use aspect-video Tailwind class (16:9)
- platform=instagram:
    IG icon card + "Tonton di Instagram" button -> instagram.com link
- embedId empty:
    Gray placeholder card, Play icon, "Video segera hadir"

Card layout:
- [16:9 thumbnail/iframe]
- Badge kategori + Judul + Tanggal · Durasi

Grid: featured first video (full/2-3 width), rest grid-cols-1 md:grid-cols-2 lg:grid-cols-3

Empty state (all placeholder): BookOpen icon + "Video akan segera ditambahkan" + IG follow button

Bottom: YouTube subscribe button + Instagram follow button

PART B — src/pages/Kegiatan.jsx + src/components/KegiatanCard.jsx:

Page hero: "Jadwal Kegiatan" + subtitle

Filter tabs: [Semua] [Rutin] [Insidental] [Online]

KegiatanCard — horizontal layout (desktop), vertical (mobile):
┌──────────┬──────────────────────────────────────┐
│ [Status] │  Nama Kegiatan (font-serif bold)      │
│  badge   │  jenis badge · Hari, Waktu            │
│          │  📍 Lokasi                             │
│          │  Deskripsi (2-line clamp)              │
│          │  [Info] [WhatsApp]                     │
└──────────┴──────────────────────────────────────┘

Status badge:
- aktif:       bg-green-100 text-green-700, "● Aktif"
- akan-datang: bg-amber-100 text-amber-700, "◎ Akan Datang"
- selesai:     bg-gray-100 text-gray-500, "○ Selesai"

Empty state: Calendar icon + "Jadwal akan segera diumumkan" + WA button

Bottom CTA: "Ingin mengadakan kajian?" + WhatsApp button
```

---

## ══════════════════════════════════════════════════════
## CHUNK 5 — Polish, SEO & Deployment
## ══════════════════════════════════════════════════════

```
Continue the ustadz-fauzan project. All pages done. Final polish.

PART A — Framer Motion final pass:
1. ScrollReveal.jsx: add direction prop (up/left/right/fade), delay, stagger support
2. App.jsx: AnimatePresence mode="wait" on Routes
   Each page: motion.div initial={opacity:0, y:10} animate={opacity:1, y:0} exit={opacity:0, y:-10} duration 0.3
3. Navbar: underline slides from left on hover
4. Card grids: stagger children

PART B — Responsiveness audit:
- 320px mobile: no overflow, single column, full-width buttons
- Navbar hamburger: closes on link click
- Hero fonts scale: text-4xl -> text-2xl on mobile
- Profil timeline: full-width on mobile
- Kajian filter: overflow-x-auto, hide scrollbar
- Kajian modal: bottom sheet on mobile (y 100% -> 0)
- Footer: single column on mobile
Add useMediaQuery hook in src/hooks/useMediaQuery.js if needed.

PART C — SEO (react-helmet-async):
Install: npm install react-helmet-async
Wrap main.jsx with <HelmetProvider>

Create src/components/SEO.jsx:
- Props: title, description, image
- <title>{title} | Ustadz Fauzan Sugiyono</title>
- meta description, og:title, og:description, og:image, og:type
- Twitter card tags

Add <SEO> to each page:
  Home:     "Beranda" + "Kajian Islam bersama Ustadz Fauzan Sugiyono"
  Profil:   "Profil" + "Riwayat pendidikan dan karya tulis Ustadz Fauzan"
  Kajian:   "Materi Kajian" + "Kitab-kitab yang sedang dikaji"
  Video:    "Video Kajian" + "Tonton kajian Islam di YouTube"
  Kegiatan: "Jadwal Kegiatan" + "Kajian rutin dan kegiatan dakwah"

PART D — Performance:
1. React.lazy + Suspense for all pages
   PageLoader component: centered teal spinner
2. LazyImage component (src/components/ui/LazyImage.jsx):
   loading="lazy", bg-surface-100 pulse placeholder, opacity transition on load
3. 404 NotFound page: "Halaman tidak ditemukan" + Back to Home button

PART E — Deployment config:
1. public/_redirects:
   /* /index.html 200

2. vercel.json:
   { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }

3. vite.config.js: base: '/'

4. README.md:
   - Project description + tech stack
   - Setup: npm install && npm run dev
   - Content update guide: edit src/data/*.js files
   - Deployment: Vercel/Netlify instructions
   - TODO list for admin (all empty fields in data files)

5. Final check:
   - npm run build -> 0 errors
   - All routes load
   - WA link -> 085568057474
   - IG link -> fauzan.sugiyono
   - No console errors
```

---

## CHECKLIST AKHIR

- [ ] npm run build sukses tanpa error
- [ ] Semua halaman tampil di desktop dan mobile
- [ ] Hamburger menu mobile berfungsi
- [ ] Filter kategori Kajian berfungsi + animasi
- [ ] PDF button disabled state saat pdfUrl kosong
- [ ] YouTube embed lazy-load berfungsi saat diklik
- [ ] WA link -> wa.me/085568057474
- [ ] IG link -> instagram.com/fauzan.sugiyono
- [ ] Scroll-reveal animations berjalan
- [ ] Page transitions berjalan
- [ ] Deploy ke Vercel/Netlify berhasil

## KONTEN YANG PERLU DIISI MANUAL

| File                  | Yang perlu dilengkapi                               |
|-----------------------|-----------------------------------------------------|
| src/data/profil.js    | gelar, foto, jurusan S1, organisasi, youtube URL    |
| src/data/materi.js    | deskripsi, jadwal, lokasi, pdfUrl per materi        |
| src/data/video.js     | embedId YouTube, judul, kategori, durasi, tanggal   |
| src/data/kegiatan.js  | semua data jadwal kajian rutin                      |
| public/assets/images/ | foto-profil.jpg + thumbnail materi                  |
