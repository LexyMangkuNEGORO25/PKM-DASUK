import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NewsCard({ item }) {
  return (
    <article className="news-card">
      <div className="news-card__media">
        <img
          src={item.image}
          alt={item.imageAlt}
          width="1200"
          height="800"
          loading="lazy"
        />
        <span className="news-card__category">{item.category}</span>
      </div>
      <div className="news-card__body">
        <p className="news-card__meta">
          <CalendarDays size={14} aria-hidden="true" />
          <time dateTime={item.date}>{item.dateLabel}</time>
        </p>
        <h3>
          <Link to={`/berita/${item.slug}`}>{item.title}</Link>
        </h3>
        <p>{item.excerpt}</p>
        <Link
          className="news-card__link"
          to={`/berita/${item.slug}`}
          aria-label={`Baca selengkapnya: ${item.title}`}
        >
          Baca selengkapnya
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
