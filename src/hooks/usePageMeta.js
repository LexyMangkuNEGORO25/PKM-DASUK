import { useEffect } from 'react'

const DEFAULT_TITLE = 'Puskesmas Dasuk — Pelayanan Kesehatan Kecamatan Dasuk'
const DEFAULT_DESCRIPTION =
  'Website profil resmi Puskesmas Dasuk, Kecamatan Dasuk, Kabupaten Sumenep. Informasi profil, pelayanan kesehatan, berita, dan kontak.'

function setMeta(attribute, value, content) {
  const element = document.head.querySelector(`meta[${attribute}="${value}"]`)
  if (element) {
    element.setAttribute('content', content)
  }
}

export function usePageMeta({ title, description, image } = {}) {
  useEffect(() => {
    const pageTitle = title ? `${title} | Puskesmas Dasuk` : DEFAULT_TITLE
    const pageDescription = description || DEFAULT_DESCRIPTION

    document.title = pageTitle
    setMeta('name', 'description', pageDescription)
    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:description', pageDescription)
    if (image) {
      setMeta('property', 'og:image', image)
    }
  }, [title, description, image])
}
