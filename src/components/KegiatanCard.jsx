import { Calendar, Clock, MapPin, Mail, Info } from "lucide-react";
import Badge from "./ui/Badge";
import { profil } from "../data/profil";

const statusMap = {
  aktif: {
    label: "● Aktif",
    className: "bg-green-100 text-green-700",
    bar: "bg-green-500",
  },
  "akan-datang": {
    label: "◎ Akan Datang",
    className: "bg-amber-100 text-amber-700",
    bar: "bg-amber-500",
  },
  selesai: {
    label: "○ Selesai",
    className: "bg-gray-100 text-gray-500",
    bar: "bg-gray-400",
  },
};

const jenisMap = {
  rutin: "Rutin",
  insidental: "Insidental",
  online: "Online",
};

const defaultEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profil.kontak.email}`;

export default function KegiatanCard({ kegiatan, onInfo }) {
  const status = statusMap[kegiatan.status] || statusMap.aktif;
  const emailHref = kegiatan.kontak && kegiatan.kontak.includes("@") ? `https://mail.google.com/mail/?view=cm&fs=1&to=${kegiatan.kontak}` : defaultEmail;

  return (
    <article className="group bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col md:flex-row">
      {/* Status strip */}
      <div className="md:w-44 md:shrink-0 relative bg-surface-100/60 border-b md:border-b-0 md:border-r border-surface-200 p-5 md:p-6 flex md:flex-col items-center md:items-start gap-3">
        <div className={`absolute inset-x-0 top-0 h-1 md:h-auto md:inset-y-0 md:left-0 md:w-1 ${status.bar}`} />
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${status.className}`}>{status.label}</span>
        <div className="text-xs text-dark-700/70 md:mt-auto">{kegiatan.jenis && <span className="uppercase tracking-wider">{jenisMap[kegiatan.jenis] || kegiatan.jenis}</span>}</div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 md:p-6 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge className="bg-primary-50 text-primary-600">{jenisMap[kegiatan.jenis] || kegiatan.jenis}</Badge>
          {kegiatan.hari && (
            <span className="inline-flex items-center gap-1 text-xs text-dark-700/80">
              <Calendar size={12} /> {kegiatan.hari}
            </span>
          )}
          {kegiatan.waktu && (
            <span className="inline-flex items-center gap-1 text-xs text-dark-700/80">
              <Clock size={12} /> {kegiatan.waktu}
            </span>
          )}
        </div>

        <h3 className="font-serif text-lg md:text-xl text-dark-800 leading-snug">{kegiatan.nama}</h3>

        {kegiatan.lokasi && (
          <p className="inline-flex items-start gap-1.5 text-sm text-dark-700 mt-2">
            <MapPin size={14} className="text-primary-500 mt-0.5 shrink-0" />
            <span>
              {kegiatan.lokasi}
              {kegiatan.alamat && <span className="text-dark-700/70"> &middot; {kegiatan.alamat}</span>}
            </span>
          </p>
        )}

        {kegiatan.deskripsi && <p className="text-sm text-dark-700 mt-3 line-clamp-2">{kegiatan.deskripsi}</p>}

        <div className="flex items-center gap-2 mt-4">
          <button
            type="button"
            onClick={() => onInfo?.(kegiatan)}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium border border-surface-200 text-dark-800 hover:border-primary-400 hover:text-primary-500 transition-colors"
          >
            <Info size={14} /> Info
          </button>
          <a
            href={`${emailHref}&su=${encodeURIComponent(`Pertanyaan seputar: ${kegiatan.nama}`)}&body=${encodeURIComponent(`Assalamu'alaikum, saya ingin bertanya seputar "${kegiatan.nama}"`)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium bg-primary-400 text-white hover:bg-primary-500 transition-colors"
          >
            <Mail size={14} /> fauzanstiudia@gmail.com
          </a>
        </div>
      </div>
    </article>
  );
}
