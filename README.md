# Ustadz Fauzan Sugiyono — Website Dakwah

Website personal untuk Ustadz Fauzan Sugiyono, pengkaji Fikih Muamalah dan
Tafsir Al-Qur'an. Menampilkan profil, materi kajian, video, dan jadwal
kegiatan dakwah.

## Tech Stack

- React 19 + Vite
- React Router DOM v6
- Tailwind CSS v3
- Framer Motion (animasi)
- Lucide React (ikon)
- React Helmet Async (SEO)

## Setup

```bash
npm install
npm run dev        # dev server di http://localhost:5173
npm run build      # build production ke folder dist/
npm run preview    # preview hasil build
```

## Struktur Konten

Seluruh konten dibaca dari file di `src/data/`. Untuk update konten, cukup
edit file berikut:

| File | Isi |
|------|-----|
| `src/data/profil.js` | Biodata, pendidikan, karya tulis, kontak |
| `src/data/materi.js` | Materi kajian (fiqih, aqidah, tafsir, akhlak, sirah) |
| `src/data/video.js` | Video kajian (YouTube / Instagram) |
| `src/data/kegiatan.js` | Jadwal kegiatan rutin dan insidental |

### Aset Gambar

Simpan gambar di `public/assets/images/`. Referensikan dengan path absolut:
`/assets/images/nama-file.jpg`.

## TODO Konten

Field berikut masih kosong dan perlu dilengkapi admin:

**`src/data/profil.js`**
- `gelar`, `kontak.youtube`, `kontak.telegram`
- `pendidikan[1].jurusan` (jurusan S1 LIPIA)
- `organisasi` (saat ini array kosong)
- `foto` → letakkan file di `public/assets/images/foto-profil.jpg`

**`src/data/materi.js`** (per materi)
- `deskripsi` — ringkasan kajian
- `jadwal` — misal "Setiap Ahad, 08:00 WIB"
- `lokasi` — nama masjid / majelis
- `pdfUrl` — link Google Drive ke PDF materi
- `thumbnail` — path gambar opsional

**`src/data/video.js`**
- `embedId` — ID video YouTube (misal `dQw4w9WgXcQ`)
- `judul`, `kategori`, `durasi`, `tanggal`

**`src/data/kegiatan.js`**
- Semua field jadwal kajian rutin

## Deployment

### Vercel

`vercel.json` sudah dikonfigurasi untuk SPA rewrite. Cukup import project
ke Vercel dan deploy — build command: `npm run build`, output: `dist`.

### Netlify

`public/_redirects` menangani SPA fallback. Build command: `npm run build`,
publish: `dist`.

### Static Host Lain

Pastikan server mengarahkan semua route ke `index.html` (SPA mode).

## Routes

- `/` — Beranda
- `/profil` — Riwayat pendidikan & karya
- `/kajian` — Materi kajian (filter & search)
- `/video` — Video kajian YouTube/Instagram
- `/kegiatan` — Jadwal kegiatan
- `*` — 404 Not Found
