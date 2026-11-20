import { ArrowLeft } from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Halaman tidak ditemukan',
    description: 'Halaman yang Anda cari tidak tersedia.',
    noindex: true,
  })

  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <p className="eyebrow">404</p>
        <h1>Halaman tidak ditemukan</h1>
        <p>
          Halaman yang Anda cari tidak tersedia atau sudah dipindahkan. Silakan
          kembali ke beranda untuk melanjutkan.
        </p>
        <ButtonLink to="/" icon={ArrowLeft} iconPosition="left">
          Kembali ke Beranda
        </ButtonLink>
      </div>
    </section>
  )
}
