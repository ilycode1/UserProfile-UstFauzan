// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Scale, BookOpen, BookMarked, Mail } from "lucide-react";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import SectionTitle from "../components/ui/SectionTitle";
import ScrollReveal from "../components/ui/ScrollReveal";
import SEO from "../components/SEO";
import { profil } from "../data/profil";

function InstagramIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profil.kontak.email}`;
const igLink = `https://instagram.com/${profil.kontak.instagram}`;

const bidangKajian = [
  {
    icon: Scale,
    judul: "Fikih Muamalah",
    deskripsi: "Kajian hukum Islam seputar transaksi, ekonomi syariah, dan interaksi sosial yang relevan dengan kehidupan kontemporer.",
  },
  {
    icon: BookOpen,
    judul: "Tafsir Al-Qur'an",
    deskripsi: "Pendalaman makna dan hukum dari ayat-ayat Al-Qur'an, termasuk ayat ahkam dan Juz Amma dengan pendekatan tafsir klasik.",
  },
];

export default function Profil() {
  return (
    <>
      <SEO title="Profil" description="Riwayat pendidikan, bidang kajian, dan karya tulis Ustadz Fauzan Sugiyono." />
      {/* ══════════ HEADER PROFIL ══════════ */}
      <section className="relative bg-gradient-to-br from-surface-50 via-surface-50 to-primary-50 -mt-20 pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-primary-200 bg-gradient-to-br from-primary-100 to-primary-300 shadow-lg shrink-0">
              <img
                src={profil.foto}
                alt={profil.nama}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="font-serif text-4xl md:text-5xl text-dark-800">{profil.nama}</h1>
              <p className="text-lg text-dark-700 mt-3 max-w-xl">{profil.tagline}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5">
                {profil.spesialisasi.map((s) => (
                  <Badge key={s} className="bg-primary-50 text-primary-600">
                    {s}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                <Button as="a" href={emailLink} target="_blank" rel="noreferrer" variant="primary" size="sm">
                  <Mail size={16} /> fauzanstiudia@gmail.com
                </Button>
                <Button as="a" href={igLink} target="_blank" rel="noreferrer" variant="outline" size="sm">
                  <InstagramIcon size={16} /> Instagram
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ TIMELINE PENDIDIKAN ══════════ */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionTitle title="Riwayat Pendidikan" subtitle="Perjalanan menuntut ilmu dari pesantren hingga pendidikan tinggi." />
          </ScrollReveal>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-2 md:left-4 top-2 bottom-2 w-0.5 bg-primary-200" />

            {profil.pendidikan.map((item, idx) => (
              <motion.div key={item.id} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[28px] md:-left-[36px] top-4 w-4 h-4 rounded-full bg-primary-400 ring-4 ring-surface-50 shadow-sm" />

                <div className="bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-md transition-shadow p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge className="bg-primary-50 text-primary-600">{item.jenjang}</Badge>
                    {item.status === "ongoing" && <Badge className="bg-amber-50 text-amber-700">Sedang Berlangsung</Badge>}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-dark-800">{item.institusi}</h3>
                  {item.jurusan && <p className="text-sm text-dark-700 italic mt-1">{item.jurusan}</p>}
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-dark-700">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} /> {item.lokasi}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GraduationCap size={14} /> {item.tahun}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BIDANG KAJIAN ══════════ */}
      <section className="py-20 bg-surface-100/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionTitle title="Bidang Kajian" subtitle="Fokus keilmuan utama dalam pengajaran dan penelitian." />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {bidangKajian.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.judul}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl border border-surface-200 border-l-4 border-l-primary-400 shadow-sm hover:shadow-md transition-shadow p-6 md:p-8"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-500 mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-dark-800 mb-2">{b.judul}</h3>
                  <p className="text-dark-700 leading-relaxed">{b.deskripsi}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ KARYA TULIS ══════════ */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionTitle title="Karya Tulis" subtitle="Buku dan tulisan ilmiah yang telah diterbitkan." />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {profil.karya.map((k, idx) => (
              <motion.div
                key={k.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl border border-surface-200 hover:border-primary-400 shadow-sm hover:shadow-md transition-all p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <Badge className="bg-primary-50 text-primary-600">{k.tahun}</Badge>
                  <BookMarked size={18} className="text-primary-300 group-hover:text-primary-500 transition-colors shrink-0" />
                </div>
                <h3 className="font-serif text-base md:text-lg text-dark-800 leading-snug">{k.judul}</h3>
                {k.penerbit && <p className="text-sm italic text-dark-700 mt-2">{k.penerbit}</p>}
                {k.kategori && <p className="text-xs text-primary-500 mt-2 uppercase tracking-wide">{k.kategori}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ KONTAK ══════════ */}
      <section className="relative bg-dark-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        <ScrollReveal direction="up" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Hubungi</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">Untuk undangan kajian, konsultasi, atau pertanyaan seputar dakwah.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button as="a" href={emailLink} target="_blank" rel="noreferrer" variant="primary" size="lg">
              <Mail size={18} /> fauzanstiudia@gmail.com
            </Button>
            <Button as="a" href={igLink} target="_blank" rel="noreferrer" variant="outline" size="lg" className="!text-white !border-white/40 hover:!bg-white/10">
              <InstagramIcon size={18} /> Instagram
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
