import { Check } from 'lucide-react'

export default function ServiceCard({ service, index, detailed = false }) {
  const Icon = service.icon

  return (
    <article
      className={`service-card${detailed ? ' service-card--detailed' : ''}`}
    >
      <span className="service-card__icon">
        <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <div className="service-card__content">
        <span className="service-card__number" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        {detailed && service.details && (
          <ul className="service-card__details">
            {service.details.map((item) => (
              <li key={item}>
                <Check size={15} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        {detailed && service.note && (
          <p className="service-card__note">{service.note}</p>
        )}
      </div>
    </article>
  )
}
