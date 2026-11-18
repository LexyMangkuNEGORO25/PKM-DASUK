export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  action,
}) {
  return (
    <div
      className={`section-heading section-heading--${align}${
        light ? ' section-heading--light' : ''
      }`}
    >
      <div className="section-heading__text">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {description && (
          <p className="section-heading__desc">{description}</p>
        )}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </div>
  )
}
