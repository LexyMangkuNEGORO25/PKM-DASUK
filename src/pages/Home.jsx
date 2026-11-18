import {
  ArrowRight,
  CheckCircle2,
  Clock,
  HeartPulse,
  Info,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  User,
  Users,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ButtonLink from '../components/ui/ButtonLink'
import MapEmbed from '../components/ui/MapEmbed'
import NewsCard from '../components/ui/NewsCard'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import { news } from '../data/news'
import { services } from '../data/services'
import { site } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'Beranda',
    description:
      'Selamat datang di Puskesmas Dasuk. Informasi profil, layanan kesehatan, berita, jadwal, dan kontak Puskesmas Dasuk, Kecamatan Dasuk, Kabupaten Sumenep.',
  })

  const portraitRef = useRef(null)
  const [portraitVisible, setPortraitVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const node = portraitRef.current
    if (!node || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPortraitVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero__decor" aria-hidden="true">
          <span className="hero__blob hero__blob--green" />
          <span className="hero__blob hero__blob--yellow" />
          <span className="hero__grid" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Puskesmas Dasuk · Kabupaten Sumenep
            </p>
            <h1>
              Selamat Datang di <span>Puskesmas Dasuk</span>
            </h1>
            <p className="hero__lead">
              Puskesmas Dasuk hadir sebagai fasilitas pelayanan kesehatan
              tingkat pertama untuk masyarakat Kecamatan Dasuk. Kami
              berkomitmen menghadirkan pelayanan yang ramah, mudah diakses, dan
              berorientasi pada kebutuhan masyarakat.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/pelayanan" icon={ArrowRight}>
                Lihat Pelayanan
              </ButtonLink>
              <ButtonLink
                to="/kontak"
                variant="secondary"
                icon={MessageCircle}
              >
                Hubungi Kami
              </ButtonLink>
            </div>
            <ul className="hero__points">
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                Pelayanan terpadu
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                Lingkungan ramah
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                Berbasis masyarakat
              </li>
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__photo">
              <img
                src="/images/hero-layanan.jpg"
                alt="Tenaga kesehatan memeriksa tekanan darah seorang pasien di fasilitas pelayanan kesehatan"
                width="1600"
                height="1092"
                fetchPriority="high"
              />
            </div>

            <span className="hero__ring" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section welcome" id="sambutan">
        {/* Dekorasi lengkung abstrak sudut halaman */}
        <div className="welcome__decor-corner welcome__decor-corner--tr" aria-hidden="true">
          <svg viewBox="0 0 450 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M120 0C180 80 260 110 330 90C390 70 420 120 450 160V0H120Z"
              fill="url(#greenWave1)"
            />
            <path
              d="M0 0C90 60 170 50 250 130C320 200 390 190 450 240V0H0Z"
              fill="url(#greenWave2)"
            />
            <defs>
              <linearGradient id="greenWave1" x1="450" y1="0" x2="200" y2="160" gradientUnits="userSpaceOnUse">
                <stop stopColor="#22c55e" stopOpacity="0.32" />
                <stop offset="1" stopColor="#86efac" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="greenWave2" x1="450" y1="0" x2="100" y2="240" gradientUnits="userSpaceOnUse">
                <stop stopColor="#15803d" stopOpacity="0.2" />
                <stop offset="1" stopColor="#dcfce7" stopOpacity="0.04" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="welcome__decor-corner welcome__decor-corner--bl" aria-hidden="true">
          <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 240V120C60 90 140 140 190 110C240 80 280 120 320 90V240H0Z"
              fill="url(#greenWave3)"
            />
            <defs>
              <linearGradient id="greenWave3" x1="0" y1="240" x2="260" y2="90" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4ade80" stopOpacity="0.22" />
                <stop offset="1" stopColor="#bbf7d0" stopOpacity="0.03" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container welcome__grid">
          {/* Sisi Kiri: Foto Utama & Identitas Kepala Puskesmas */}
          <div className="welcome__portrait" ref={portraitRef}>
            {/* Aksen Kuning di sudut bawah kartu */}
            <span className="welcome__accent-yellow" aria-hidden="true" />

            <div className="welcome__portrait-card">
              {/* Background gedung Puskesmas halus */}
              <div
                className="welcome__card-bg-building"
                style={{ backgroundImage: "url('/images/fasilitas-puskesmas.jpg')" }}
                aria-hidden="true"
              />

              {/* Dekorasi visual kesehatan minimalis */}
              <span className="welcome__health-cross welcome__health-cross--tl" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M13 5a3 3 0 0 1 6 0v5h5a3 3 0 0 1 0 6h-5v5a3 3 0 0 1-6 0v-5H8a3 3 0 0 1 0-6h5V5z" />
                </svg>
              </span>
              <span className="welcome__health-cross welcome__health-cross--tr" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M13 5a3 3 0 0 1 6 0v5h5a3 3 0 0 1 0 6h-5v5a3 3 0 0 1-6 0v-5H8a3 3 0 0 1 0-6h5V5z" />
                </svg>
              </span>

              {/* Foto Kepala Puskesmas Asli */}
              <div
                className={`welcome__portrait-figure${
                  portraitVisible ? ' is-visible' : ''
                }`}
              >
                <img
                  src="/images/kepala-puskesmas-hd.png"
                  alt="Kepala Puskesmas Dasuk"
                  width="682"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = '/images/kepala-puskesmas-dasuk.png'
                  }}
                />
              </div>

              {/* Kotak Identitas Kepala Puskesmas menyatu di bagian bawah foto */}
              <div className="welcome__identity-box">
                <div className="welcome__identity-icon">
                  <User size={20} strokeWidth={2.2} aria-hidden="true" />
                </div>
                <div className="welcome__identity-text">
                  <strong>{site.head.name}</strong>
                  <span>Kabupaten Sumenep</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Sambutan & Kotak Kutipan */}
          <div className="welcome__content">
            <div className="welcome__header">
              <p className="welcome__eyebrow">
                <span className="welcome__eyebrow-bar" aria-hidden="true" />
                SAMBUTAN
              </p>
              <h2 className="welcome__heading">
                Melayani dengan hati, tumbuh bersama masyarakat
              </h2>
              <p className="welcome__lead">
                Puskesmas Dasuk berkomitmen menjadi mitra kesehatan masyarakat Kecamatan Dasuk melalui pelayanan yang mudah diakses dan edukasi yang berkelanjutan.
              </p>
            </div>

            {/* Kotak Sambutan Elegan */}
            <blockquote className="welcome__quote">
              <span className="welcome__quote-accent" aria-hidden="true" />
              <div className="welcome__quote-body">
                <span className="welcome__quote-icon" aria-hidden="true">
                  <Quote size={26} strokeWidth={2.4} />
                </span>
                <p className="welcome__quote-text">
                  “{site.head.message}”
                </p>
              </div>
              <footer className="welcome__quote-footer">
                <strong>{site.head.name}</strong>
                <span>Kabupaten Sumenep</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section--muted profile-summary">
        <div className="container profile-summary__grid">
          <div className="profile-summary__media">
            <img
              src="/images/profil-sejarah.jpg"
              alt="Tenaga kesehatan berkonsultasi dengan pasien"
              width="1200"
              height="960"
              loading="lazy"
            />
          </div>

          <div className="profile-summary__content">
            <SectionHeading
              eyebrow="Tentang Kami"
              title="Puskesmas untuk masyarakat Kecamatan Dasuk"
              description="Puskesmas Dasuk merupakan fasilitas pelayanan kesehatan tingkat pertama yang melayani masyarakat di wilayah Kecamatan Dasuk. Kami mengedepankan pelayanan yang ramah, mudah diakses, dan berorientasi pada kebutuhan masyarakat."
            />

            <div className="value-grid">
              <article>
                <span>
                  <HeartPulse size={20} aria-hidden="true" />
                </span>
                <h3>Pelayanan</h3>
                <p>Pendekatan pelayanan yang mengutamakan kebutuhan pasien.</p>
              </article>
              <article>
                <span>
                  <Users size={20} aria-hidden="true" />
                </span>
                <h3>Berbasis Masyarakat</h3>
                <p>Promosi kesehatan dan pemberdayaan masyarakat.</p>
              </article>
              <article>
                <span>
                  <ShieldCheck size={20} aria-hidden="true" />
                </span>
                <h3>Mutu & Aman</h3>
                <p>Menjaga mutu dan keamanan dalam setiap pelayanan.</p>
              </article>
            </div>

            <ButtonLink to="/profil" variant="ghost" icon={ArrowRight}>
              Selengkapnya tentang profil
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <SectionHeading
            eyebrow="Pelayanan"
            title="Layanan kesehatan untuk seluruh keluarga"
            description="Berbagai kategori pelayanan yang dapat dimanfaatkan masyarakat. Ketersediaan dan jadwal setiap layanan dapat dikonfirmasi langsung kepada Puskesmas Dasuk."
            action={
              <ButtonLink to="/pelayanan" variant="ghost" icon={ArrowRight}>
                Lihat semua layanan
              </ButtonLink>
            }
          />

          <div className="services-grid">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section schedule-section">
        <div className="container">
          <div className="schedule-panel">
            <div className="schedule-panel__content">
              <p className="eyebrow eyebrow--light">
                <span className="eyebrow__dot" aria-hidden="true" />
                Jam Operasional
              </p>
              <h2>Rencanakan kunjungan Anda</h2>
              <p>
                Layanan buka Senin–Sabtu pukul 08.00–14.00 dan tutup pada
                Minggu. Untuk memastikan jadwal poli atau layanan tertentu,
                silakan hubungi Puskesmas Dasuk melalui halaman Kontak.
              </p>
              <ButtonLink
                to="/kontak"
                variant="yellow"
                icon={MessageCircle}
              >
                Tanyakan jadwal
              </ButtonLink>
            </div>

            <div className="schedule-panel__list">
              {site.schedule.map((item) => (
                <div className="schedule-panel__row" key={item.day}>
                  <div>
                    <strong>{item.day}</strong>
                    <span>{item.note}</span>
                  </div>
                  <span className="schedule-panel__hours">{item.hours}</span>
                </div>
              ))}
              <p className="schedule-panel__note">
                <Info size={16} aria-hidden="true" />
                {site.hoursNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted news-preview">
        <div className="container">
          <SectionHeading
            eyebrow="Berita & Informasi"
            title="Informasi terbaru dari Puskesmas Dasuk"
            description="Ikuti berita, edukasi kesehatan, dan informasi kegiatan yang bermanfaat bagi masyarakat."
            action={
              <ButtonLink to="/berita" variant="ghost" icon={ArrowRight}>
                Lihat semua berita
              </ButtonLink>
            }
          />

          <div className="news-grid">
            {news.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="container location__grid">
          <div className="location__content">
            <SectionHeading
              eyebrow="Lokasi"
              title="Temukan Puskesmas Dasuk"
              description="Puskesmas Dasuk berada di Jl. Raya Dasuk, Kecamatan Dasuk, Kabupaten Sumenep. Gunakan peta berikut untuk membantu perjalanan Anda."
            />

            <ul className="location__list">
              <li>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <strong>Alamat</strong>
                  <span>{site.address}</span>
                </div>
              </li>
              <li>
                <Clock size={20} aria-hidden="true" />
                <div>
                  <strong>Jam layanan</strong>
                  <span>{site.hoursNote}</span>
                </div>
              </li>
              <li>
                <Phone size={20} aria-hidden="true" />
                <div>
                  <strong>Telepon</strong>
                  <span>{site.phone || 'Nomor resmi menyusul.'}</span>
                </div>
              </li>
            </ul>

            <ButtonLink
              href={site.mapsLink}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              icon={MapPin}
            >
              Buka di Google Maps
            </ButtonLink>
          </div>

          <MapEmbed />
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" aria-hidden="true" />
              Puskesmas Dasuk
            </p>
            <h2>Butuh informasi atau ingin berkunjung?</h2>
            <p>
              Halaman Kontak menyediakan informasi lokasi, jam layanan, dan
              formulir pesan masyarakat.
            </p>
          </div>
          <div className="cta-band__actions">
            <ButtonLink to="/kontak" variant="yellow" icon={MessageCircle}>
              Hubungi Kami
            </ButtonLink>
            <ButtonLink
              to="/pelayanan"
              variant="outline-light"
              icon={ArrowRight}
            >
              Lihat Pelayanan
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
