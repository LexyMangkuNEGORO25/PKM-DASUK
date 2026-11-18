import { useEffect, useState } from 'react'
import { site } from '../../data/site'

export default function MapEmbed({ className = '', title = 'Peta lokasi Puskesmas Dasuk' }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div className={`map-embed ${className}`.trim()}>
      {ready && (
        <iframe
          title={title}
          src={site.mapsEmbed}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  )
}
