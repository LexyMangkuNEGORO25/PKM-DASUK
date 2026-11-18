import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="site">
      <a className="skip-link" href="#konten">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="konten">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
