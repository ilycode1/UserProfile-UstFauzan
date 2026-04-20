import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Halaman Tidak Ditemukan" description="Halaman yang Anda cari tidak tersedia." />
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <p className="font-serif text-7xl md:text-8xl text-primary-400">404</p>
          <h1 className="font-serif text-2xl md:text-3xl text-dark-800 mt-3">
            Halaman tidak ditemukan
          </h1>
          <p className="text-dark-700 mt-3">
            Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.
          </p>
          <div className="mt-7">
            <Button as={Link} to="/" variant="primary">
              <ArrowLeft size={16} /> Kembali ke Beranda
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
