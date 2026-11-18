import { ArrowLeft, CalendarDays } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ButtonLink from '../components/ui/ButtonLink'
import DraftNotice from '../components/ui/DraftNotice'
import NewsCard from '../components/ui/NewsCard'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { news } from '../data/news'
import { usePageMeta } from '../hooks/usePageMeta'

export default function BeritaDetail() {
  const { slug } = useParams()
  const article = news.find((item) => item.slug === slug)

  usePageMeta({
    title: article ? article.title : 'Berita tidak ditemukan',
    description: article ? article.excerpt : 'Halaman berita tidak ditemukan.',
    image: article ? article.image : undefined,
  })

  if (!article) {
    return (
      <section className="section not-found">
        <div className="container not-found__inner">
          <p className="eyebrow">Berita</p>
          <h1>Berita tidak ditemukan</h1>
          <p>
            Tautan yang Anda buka tidak tersedia atau sudah dipindahkan.
            Silakan kembali ke halaman Berita untuk melihat daftar informasi.
          </p>
          <ButtonLink to="/berita" icon={ArrowLeft} iconPosition="left">
            Kembali ke Berita
          </ButtonLink>
        </div>
      </section>
    )
  }

  const related = news.filter((item) => item.slug !== article.slug).slice(0, 2)

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        parent={{ to: '/berita', label: 'Berita' }}
        breadcrumb={article.title}
      />

      <article className="article">
        <div className="container">
          <div className="article__meta">
            <span className="article__category">{article.category}</span>
            <span className="article__date">
              <CalendarDays size={15} aria-hidden="true" />
              <time dateTime={article.date}>{article.dateLabel}</time>
            </span>
            <span className="article__source">Puskesmas Dasuk</span>
          </div>

          <div className="article__media">
            <img
              src={article.image}
              alt={article.imageAlt}
              width="1200"
              height="800"
            />
          </div>

          <div className="article__body">
            {article.content.map((block, index) => {
              if (block.type === 'heading') {
                return <h2 key={`${block.type}-${index}`}>{block.text}</h2>
              }
              if (block.type === 'list') {
                return (
                  <ul key={`${block.type}-${index}`}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={`${block.type}-${index}`}>{block.text}</p>
            })}

            <DraftNotice tone="info">
              Artikel ini merupakan contoh konten untuk memperlihatkan tata
              letak halaman berita. Konten resmi akan diperbarui oleh pengelola
              website Puskesmas Dasuk.
            </DraftNotice>

            <Link className="article__back" to="/berita">
              <ArrowLeft size={16} aria-hidden="true" />
              Kembali ke daftar berita
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Berita Lainnya"
              title="Baca juga"
              description="Informasi lain yang mungkin bermanfaat untuk Anda dan keluarga."
            />
            <div className="news-grid news-grid--two">
              {related.map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
