import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink'
import ContactForm from '../components/ui/ContactForm'
import MapEmbed from '../components/ui/MapEmbed'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { site } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

const contactCards = [
  {
    icon: MapPin,
    title: 'Alamat',
    value: site.address,
    note: 'Gunakan peta untuk melihat wilayah layanan.',
  },
  {
    icon: Phone,
    title: 'Telepon',
    value: site.phone || 'Belum tersedia',
    note: 'Berdasarkan informasi publik Google Maps.',
  },
  {
    icon: Mail,
    title: 'Email',
    value: site.email || 'Belum tersedia',
    note: 'Email resmi Puskesmas Dasuk.',
  },
  {
    icon: Clock,
    title: 'Jam Layanan',
    value: 'Senin–Sabtu, 08.00–14.00',
    note: 'Minggu tutup. Konfirmasi sebelum berkunjung.',
  },
]

export default function Kontak() {
  usePageMeta({
    title: 'Kontak',
    description:
      'Kontak Puskesmas Dasuk: alamat, telepon, email, jam layanan, peta lokasi, dan formulir pesan masyarakat.',
  })

  const whatsappLink = site.whatsapp
    ? `https://wa.me/${site.whatsapp.replace(/\D/g, '')}`
    : null

  return (
    <>
      <PageHero
        eyebrow="Hubungi Kami"
        title="Kontak Puskesmas Dasuk"
        description="Temukan informasi kontak, lokasi, dan jam layanan. Sampaikan pertanyaan atau pesan melalui formulir yang tersedia."
      />

      <section className="section">
        <div className="container">
          <div className="contact-cards">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <article className="contact-card" key={card.title}>
                  <span className="contact-card__icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.value}</p>
                  <small>{card.note}</small>
                </article>
              )
            })}
          </div>

          <div className="contact-layout">
            <div className="contact-form-card">
              <SectionHeading
                eyebrow="Formulir Pesan"
                title="Kirim pesan kepada kami"
                description="Isi data berikut dengan lengkap. Pesan akan tersimpan sebagai catatan lokal hingga kanal pengiriman resmi Puskesmas diaktifkan."
              />
              <ContactForm />
            </div>

            <aside className="contact-aside">
              <div className="contact-aside__card">
                <p className="eyebrow eyebrow--light">
                  <span className="eyebrow__dot" aria-hidden="true" />
                  Kunjungi Kami
                </p>
                <h2>Puskesmas Dasuk</h2>
                <p>
                  Silakan datang pada jam layanan. Untuk memastikan jadwal,
                  hubungi kanal resmi Puskesmas Dasuk terlebih dahulu.
                </p>

                <ul className="contact-aside__list">
                  <li>
                    <MapPin size={18} aria-hidden="true" />
                    <span>{site.address}</span>
                  </li>
                  <li>
                    <Clock size={18} aria-hidden="true" />
                    <span>{site.hoursNote}</span>
                  </li>
                  <li>
                    <Phone size={18} aria-hidden="true" />
                    <span>
                      {site.phone ? (
                        <a href={site.phoneHref}>{site.phone}</a>
                      ) : (
                        'Nomor telepon resmi menyusul.'
                      )}
                    </span>
                  </li>
                  <li>
                    <Mail size={18} aria-hidden="true" />
                    <span>
                      {site.email ? (
                        <a href={`mailto:${site.email}`}>{site.email}</a>
                      ) : (
                        'Email resmi menyusul.'
                      )}
                    </span>
                  </li>
                </ul>

                <div className="contact-aside__actions">
                  {site.phone && (
                    <ButtonLink
                      href={site.phoneHref}
                      variant="yellow"
                      icon={Phone}
                    >
                      Telepon Puskesmas
                    </ButtonLink>
                  )}
                  {whatsappLink && (
                    <ButtonLink
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      variant="outline-light"
                      icon={MessageCircle}
                    >
                      Chat WhatsApp
                    </ButtonLink>
                  )}
                </div>

                {!whatsappLink && (
                  <p className="contact-aside__note">
                    Nomor WhatsApp resmi belum dikonfirmasi. Silakan hubungi
                    nomor telepon yang tertera.
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeading
            eyebrow="Lokasi"
            title="Peta lokasi Puskesmas Dasuk"
            description="Peta berikut menampilkan lokasi Puskesmas Dasuk berdasarkan titik pada Google Maps. Gunakan tombol di bawah untuk membuka lokasi di aplikasi Google Maps."
          />

          <MapEmbed />

          <div className="map-actions">
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
        </div>
      </section>
    </>
  )
}
