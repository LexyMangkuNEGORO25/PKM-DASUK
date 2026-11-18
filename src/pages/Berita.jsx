import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import ButtonLink from '../components/ui/ButtonLink'
import DraftNotice from '../components/ui/DraftNotice'
import NewsCard from '../components/ui/NewsCard'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { news } from '../data/news'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Berita() {
  usePageMeta({
    title: 'Berita',
    description:
      'Berita, informasi kesehatan, pengumuman, dan dokumentasi kegiatan Puskesmas Dasuk.',
  })

  const [featured, ...rest] = news

  return (
    <>
      <PageHero
        eyebrow="Informasi & Publikasi"
        title="Berita Puskesmas Dasuk"
        description="Berita kegiatan, informasi kesehatan, pengumuman, dan dokumentasi yang bermanfaat bagi masyarakat."
      />

      <section className="section">
        <div className="container">
          <DraftNotice tone="info">
            Konten berita pada halaman ini merupakan contoh tata letak. Berita,
            pengumuman, dan dokumentasi kegiatan resmi akan diperbarui oleh
            pengelola website.
          </DraftNotice>

          <article className="featured-news">
            <div className="featured-news__media">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                width="1200"
                height="800"
                fetchPriority="high"
              />
            </div>
            <div className="featured-news__body">
              <span className="featured-news__category">
                {featured.category}
              </span>
              <p className="news-card__meta">
                <CalendarDays size={14} aria-hidden="true" />
                <time dateTime={featured.date}>{featured.dateLabel}</time>
              </p>
              <h2>
                <Link to={`/berita/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p>{featured.excerpt}</p>
              <ButtonLink
                to={`/berita/${featured.slug}`}
                icon={ArrowRight}
              >
                Baca selengkapnya
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeading
            eyebrow="Berita Lainnya"
            title="Informasi kesehatan dan kegiatan masyarakat"
            description="Konten edukatif yang dapat membantu masyarakat menjaga kesehatan diri, keluarga, dan lingkungan."
          />

          <div className="news-grid news-grid--two">
            {rest.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" aria-hidden="true" />
              Informasi Resmi
            </p>
            <h2>Butuh informasi yang lebih spesifik?</h2>
            <p>
              Sampaikan pertanyaan atau kebutuhan informasi Anda melalui halaman
              Kontak.
            </p>
          </div>
          <div className="cta-band__actions">
            <ButtonLink to="/kontak" variant="yellow" icon={ArrowRight}>
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
