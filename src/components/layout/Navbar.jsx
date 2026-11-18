import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  ChevronRight,
  Menu,
  X,
} from 'lucide-react'
import { navigation } from '../../data/navigation'
import Logo from '../ui/Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <nav className="navbar__links" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <>
          <button
            type="button"
            className="mobile-menu__backdrop"
            aria-label="Tutup menu"
            onClick={() => setOpen(false)}
          />
          <div id="mobile-menu" className="mobile-menu">
            <nav className="mobile-menu__links" aria-label="Navigasi seluler">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `mobile-menu__link${isActive ? ' is-active' : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={18} aria-hidden="true" />
                </NavLink>
              ))}
            </nav>

            <Link
              to="/kontak"
              className="mobile-menu__cta"
              onClick={() => setOpen(false)}
            >
              Hubungi Kami
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </>
      )}
    </header>
  )
}
