import { useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";
import SEO from "../components/SEO";
import KegiatanCard from "../components/KegiatanCard";
import { kegiatanList } from "../data/kegiatan";
import { profil } from "../data/profil";

const FILTERS = [
  { key: "semua", label: "Semua" },
  { key: "rutin", label: "Rutin" },
  { key: "insidental", label: "Insidental" },
  { key: "online", label: "Online" },
];

const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profil.kontak.email}`;

export default function Kegiatan() {
  const [active, setActive] = useState("semua");

  const realList = useMemo(() => kegiatanList.filter((k) => k.nama && k.nama.trim().length > 0), []);

  const filtered = useMemo(() => {
    if (active === "semua") return realList;
    return realList.filter((k) => k.jenis === active);
  }, [active, realList]);

  return (
    <>
      <SEO title="Jadwal Kegiatan" description="Kajian rutin, kegiatan insidental, dan majelis online bersama Ustadz Fauzan Sugiyono." />
      {/* ══════════ HERO ══════════ */}
      <section className="relative h-48 md:h-56 -mt-20 pt-20 flex items-center bg-gradient-to-br from-surface-50 via-surface-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="font-serif text-3xl md:text-5xl text-dark-800">Jadwal Kegiatan</h1>
            <p className="text-dark-700 mt-2 max-w-2xl">Kajian rutin, kegiatan insidental, dan majelis online bersama Ustadz Fauzan.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ FILTER ══════════ */}
      <section className="bg-surface-50 border-b border-surface-200 sticky top-20 z-30 backdrop-blur bg-surface-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="overflow-x-auto hide-scrollbar -mx-4 lg:mx-0 px-4 lg:px-0">
            <div className="flex items-center gap-2 w-max">
              {FILTERS.map((f) => {
                const isActive = active === f.key;
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setActive(f.key)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive ? "bg-primary-400 text-white shadow-sm" : "bg-white text-dark-700 border border-surface-200 hover:border-primary-400 hover:text-primary-500"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ LIST ══════════ */}
      <section className="py-12 md:py-16 bg-surface-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-surface-100 flex items-center justify-center text-primary-400 mb-4">
                <Calendar size={36} strokeWidth={1.4} />
              </div>
              <h3 className="font-serif text-xl text-dark-800">Jadwal akan segera diumumkan</h3>
            </div>
          ) : (
            <motion.div layout className="flex flex-col gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((k, idx) => (
                  <motion.div key={k.id} layout initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, delay: idx * 0.05 }}>
                    <KegiatanCard kegiatan={k} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-primary-400 text-white p-8 md:p-12 shadow-lg">
            <div className="absolute inset-0 geometric-pattern opacity-25" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="flex-1">
                <h2 className="font-serif text-2xl md:text-3xl">Ingin Mengadakan Kajian?</h2>
                <p className="text-white/85 mt-2 leading-relaxed">Undang Ustadz Fauzan untuk mengisi kajian, tabligh akbar, atau konsultasi syariah di lembaga Anda.</p>
              </div>
              <a
                href={emailLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-primary-500 hover:bg-surface-50 shadow-sm transition-colors whitespace-nowrap"
              >
                <Mail size={18} /> test@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
