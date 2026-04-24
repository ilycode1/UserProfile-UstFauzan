import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronDown, BookOpen, ArrowRight, GraduationCap, Mail } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import SectionTitle from "../components/ui/SectionTitle";
import ScrollReveal from "../components/ui/ScrollReveal";
import SEO from "../components/SEO";
import { profil } from "../data/profil";
import { materiList } from "../data/materi";

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

export default function Home() {
  const previewMateri = materiList.slice(0, 3);
  const pendidikanTerakhir = profil.pendidikan[profil.pendidikan.length - 1];

  return (
    <>
      <SEO title="Beranda" description="Kajian Islam bersama Ustadz Fauzan Sugiyono - Pengkaji Fikih Muamalah dan Tafsir Al-Qur'an." />
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen -mt-20 pt-20 flex items-center bg-surface-50 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-50/40 to-surface-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="max-w-3xl"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Badge className="bg-primary-50 text-primary-600">Pengkaji Fikih Muamalah & Tafsir</Badge>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-dark-800 leading-tight mt-6"
            >
              {profil.nama}
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg md:text-xl text-dark-700 mt-5 max-w-2xl leading-relaxed"
            >
              {profil.tagline}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-3 mt-8"
            >
              <Button as="a" href="/kajian" variant="primary" size="lg">
                <BookOpen size={18} /> Lihat Materi Kajian
              </Button>
              <Button as="a" href={emailLink} target="_blank" rel="noreferrer" variant="outline" size="lg">
                <Mail size={18} /> fauzanstiudia@gmail.com
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-400">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ QUOTE ══════════ */}
      <section className="relative bg-primary-400 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        <ScrollReveal direction="fade" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-serif text-8xl md:text-9xl leading-none opacity-20 select-none">&ldquo;</div>
          <p className="font-serif italic text-xl md:text-3xl leading-relaxed -mt-6 md:-mt-10">{profil.quote.teks}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-white/40" />
            <span className="text-sm md:text-base tracking-wide uppercase text-white/90">{profil.quote.sumber}</span>
            <span className="h-px w-10 bg-white/40" />
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════ PREVIEW KAJIAN ══════════ */}
      <section className="py-20 md:py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionTitle title="Materi Kajian" subtitle="Kitab-kitab pilihan yang sedang dikaji secara rutin, menjangkau fiqih, aqidah, tafsir, hingga akhlak." />
          </ScrollReveal>

          <ScrollReveal direction="up" stagger={0.1} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {previewMateri.map((m) => (
              <motion.div
                key={m.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card className="h-full p-6 flex flex-col">
                  <div className="mb-4">
                    <Badge category={m.kategori} />
                  </div>
                  <h3 className="font-serif text-xl text-dark-800 mb-2">{m.judul}</h3>
                  {m.penulis && <p className="italic text-sm text-dark-700 mb-3">oleh {m.penulis}</p>}
                  <p className="text-sm text-dark-700 line-clamp-2 flex-1">{m.deskripsi || `Kajian rutin membahas ${m.kitab || m.judul}. Materi akan segera dipublikasikan.`}</p>
                  <Link to="/kajian" className="inline-flex items-center gap-1 mt-5 text-primary-500 hover:text-primary-600 text-sm font-medium group">
                    Selengkapnya
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </ScrollReveal>

          <div className="flex justify-center mt-10">
            <Button as={Link} to="/kajian" variant="outline">
              Lihat Semua Materi <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════ SEKILAS PROFIL ══════════ */}
      <section className="py-20 md:py-24 bg-surface-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-300 shadow-lg">
                <img
                  src={profil.foto}
                  alt={profil.nama}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <SectionTitle title="Sekilas Tentang" subtitle="" />
              <h3 className="font-serif text-2xl md:text-3xl text-dark-800">{profil.nama}</h3>
              <p className="text-dark-700 mt-3 leading-relaxed">{profil.tagline}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {profil.spesialisasi.map((s) => (
                  <Badge key={s} className="bg-primary-50 text-primary-600">
                    {s}
                  </Badge>
                ))}
              </div>

              {pendidikanTerakhir && (
                <div className="mt-6 p-5 rounded-2xl glass-card">
                  <p className="text-xs uppercase tracking-wider text-primary-500 font-medium">Pendidikan Terkini</p>
                  <p className="font-serif text-lg text-dark-800 mt-1">
                    {pendidikanTerakhir.jenjang} &middot; {pendidikanTerakhir.institusi}
                  </p>
                  <p className="text-sm text-dark-700">
                    {pendidikanTerakhir.lokasi} &middot; {pendidikanTerakhir.tahun}
                  </p>
                </div>
              )}

              <div className="mt-7">
                <Button as={Link} to="/profil" variant="primary">
                  Lihat Profil Lengkap <ArrowRight size={16} />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ CTA KONTAK ══════════ */}
      <section className="relative bg-dark-800 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        <ScrollReveal direction="up" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Terhubung dengan Kami</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">Untuk pertanyaan seputar kajian, undangan dakwah, atau konsultasi, silakan hubungi melalui kanal berikut.</p>
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
