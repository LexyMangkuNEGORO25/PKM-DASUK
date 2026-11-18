import {
  ArrowRight,
  Check,
  ClipboardList,
  Info,
  MessageCircle,
} from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import { services } from '../data/services'
import { site } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

const steps = [
  {
    number: '01',
    title: 'Registrasi',
    description:
      'Datang dan lakukan pendaftaran di meja layanan yang tersedia.',
  },
  {
    number: '02',
    title: 'Pemeriksaan',
    description:
      'Sampaikan keluhan kepada petugas untuk mendapatkan pemeriksaan awal.',
  },
  {
    number: '03',
    title: 'Pelayanan',
    description:
      'Terima tindakan, obat, atau pemeriksaan penunjang sesuai indikasi.',
  },
  {
    number: '04',
    title: 'Tindak Lanjut',
    description:
      'Ikuti saran, jadwal kontrol, atau rujukan apabila diperlukan.',
  },
]

const visitTips = [
  'Membawa identitas diri dan kartu berobat jika sudah memiliki.',
  'Menyampaikan riwayat keluhan dan obat yang sedang dikonsumsi.',
  'Membawa buku KIA bagi ibu dan anak, bila ada.',
  'Mengikuti alur pelayanan dan arahan petugas.',
  'Menanyakan informasi yang belum dipahami kepada petugas.',
]

export default function Pelayanan() {
  usePageMeta({
    title: 'Pelayanan',
    description:
      'Informasi kategori pelayanan kesehatan Puskesmas Dasuk, alur pelayanan, dan persiapan kunjungan.',
  })

  return (
    <>
      <PageHero
        eyebrow="Layanan Kesehatan"
        title="Pelayanan Puskesmas Dasuk"
        description="Informasi kategori pelayanan, alur kunjungan, dan hal yang perlu dipersiapkan sebelum datang ke Puskesmas Dasuk."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Kategori Layanan"
            title="Pelayanan untuk kebutuhan kesehatan masyarakat"
            description="Puskesmas Dasuk menyediakan berbagai kategori pelayanan kesehatan. Ketersediaan jenis layanan, jadwal, dan persyaratan dapat berbeda sesuai fasilitas dan ketentuan yang berlaku."
          />

          <div className="services-grid services-grid--detailed">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                detailed
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeading
            eyebrow="Alur Pelayanan"
            title="Langkah kunjungan yang mudah diikuti"
            description="Alur berikut merupakan gambaran umum. Petugas di lokasi akan membantu mengarahkan sesuai kebutuhan layanan."
            align="center"
          />

          <div className="process-grid">
            {steps.map((step) => (
              <article className="process-card" key={step.number}>
                <span className="process-card__number" aria-hidden="true">
                  {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container visit-grid">
          <div className="visit-card">
            <SectionHeading
              eyebrow="Persiapan Kunjungan"
              title="Agar kunjungan lebih lancar"
            />
            <ul className="check-list">
              {visitTips.map((tip) => (
                <li key={tip}>
                  <span>
                    <Check size={15} aria-hidden="true" />
                  </span>
                  <p>{tip}</p>
                </li>
              ))}
            </ul>
            <div className="visit-card__note">
              <ClipboardList size={18} aria-hidden="true" />
              <p>
                Persyaratan dapat berbeda untuk setiap jenis layanan. Konfirmasi
                kepada petugas atau melalui halaman Kontak.
              </p>
            </div>
          </div>

          <div className="visit-card visit-card--schedule">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Jadwal Layanan
            </p>
            <h2>Informasi jam operasional</h2>
            <p className="visit-card__lead">
              Layanan buka Senin–Sabtu pukul 08.00–14.00 dan tutup pada Minggu.
              Jadwal poli atau layanan tertentu dapat berbeda.
            </p>

            <ul className="schedule-list">
              {site.schedule.map((item) => (
                <li key={item.day}>
                  <div>
                    <strong>{item.day}</strong>
                    <span>{item.note}</span>
                  </div>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>

            <p className="visit-card__info">
              <Info size={16} aria-hidden="true" />
              {site.hoursNote}
            </p>

            <ButtonLink
              to="/kontak"
              variant="yellow"
              icon={MessageCircle}
            >
              Tanyakan jadwal
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" aria-hidden="true" />
              Butuh Bantuan?
            </p>
            <h2>Hubungi Puskesmas Dasuk untuk informasi layanan</h2>
            <p>
              Sampaikan pertanyaan mengenai layanan, persyaratan, atau jadwal
              kunjungan melalui halaman Kontak.
            </p>
          </div>
          <div className="cta-band__actions">
            <ButtonLink to="/kontak" variant="yellow" icon={MessageCircle}>
              Hubungi Kami
            </ButtonLink>
            <ButtonLink to="/berita" variant="outline-light" icon={ArrowRight}>
              Lihat Berita
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
