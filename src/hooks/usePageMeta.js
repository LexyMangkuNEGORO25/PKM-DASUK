import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'

const DEFAULT_TITLE = 'Puskesmas Dasuk — Pelayanan Kesehatan Kecamatan Dasuk'
const DEFAULT_DESCRIPTION =
  'Website profil resmi Puskesmas Dasuk, Kecamatan Dasuk, Kabupaten Sumenep. Informasi profil, pelayanan kesehatan, berita, dan kontak.'

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export function usePageMeta({
  title,
  description,
  image,
  path,
  noindex = false,
} = {}) {
  const location = useLocation()

  useEffect(() => {
    const pageTitle = title ? `${title} | Puskesmas Dasuk` : DEFAULT_TITLE
    const pageDescription = description || DEFAULT_DESCRIPTION

    document.title = pageTitle
    setMeta('name', 'description', pageDescription)
    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:description', pageDescription)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')

    const siteUrl = site.url || 'https://puskesmasdasuk.com'
    const targetPath =
      path ?? (location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, ''))
    const canonicalUrl = targetPath === '/' ? `${siteUrl}/` : `${siteUrl}${targetPath}`

    setCanonical(canonicalUrl)
    setMeta('property', 'og:url', canonicalUrl)

    if (image) {
      const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`
      setMeta('property', 'og:image', fullImageUrl)
    }
  }, [title, description, image, path, noindex, location.pathname])
}

