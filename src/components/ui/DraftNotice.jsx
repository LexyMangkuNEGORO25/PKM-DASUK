import { Info } from 'lucide-react'

export default function DraftNotice({ children, tone = 'warning' }) {
  return (
    <div className={`draft-notice draft-notice--${tone}`} role="note">
      <Info size={18} aria-hidden="true" />
      <p>{children}</p>
    </div>
  )
}
