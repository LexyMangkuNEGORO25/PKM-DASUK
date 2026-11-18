import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import { site } from '../../data/site'
import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo light />
          <p>
            Website profil Puskesmas Dasuk. Informasi layanan, profil, berita,
            dan kontak untuk masyarakat Kecamatan Dasuk.
          </p>
        </div>

        <div className="footer__col">
          <h3>Navigasi</h3>
          <ul>
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Kontak</h3>
          <ul>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>{site.location}</span>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              {site.phone ? (
                <a href={site.phoneHref}>{site.phone}</a>
              ) : (
                <span>Nomor telepon resmi menyusul</span>
              )}
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              {site.email ? (
                <a href={`mailto:${site.email}`}>{site.email}</a>
              ) : (
                <span>Email resmi menyusul</span>
              )}
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Jam Layanan</h3>
          <p className="footer__note">
            <Clock size={16} aria-hidden="true" />
            <span>{site.hoursNote}</span>
          </p>
          <Link className="footer__link" to="/kontak">
            Lihat informasi kontak
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Puskesmas Dasuk. Seluruh hak cipta dilindungi.</p>
          <p>Dikelola untuk pelayanan masyarakat Kecamatan Dasuk.</p>
        </div>
      </div>
    </footer>
  )
}
