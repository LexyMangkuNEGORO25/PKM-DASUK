import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  parent,
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__pattern" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Beranda</Link>
          <ChevronRight size={14} aria-hidden="true" />
          {parent && (
            <>
              <Link to={parent.to}>{parent.label}</Link>
              <ChevronRight size={14} aria-hidden="true" />
            </>
          )}
          <span aria-current="page">{breadcrumb || title}</span>
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
      </div>
    </section>
  )
}
