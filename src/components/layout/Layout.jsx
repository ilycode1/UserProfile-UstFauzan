import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 min-h-screen bg-surface-50 pt-20">{children}</main>
      <Footer />
    </div>
  )
}
