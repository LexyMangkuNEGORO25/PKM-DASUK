import { Link } from 'react-router-dom'

export default function ButtonLink({
  to,
  href,
  variant = 'primary',
  size,
  icon: Icon,
  iconPosition = 'right',
  children,
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon size={18} aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon size={18} aria-hidden="true" />
      )}
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <Link className={classes} to={to} {...rest}>
      {content}
    </Link>
  )
}
