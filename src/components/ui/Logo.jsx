import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link
      to="/"
      className={`brand${light ? ' brand--light' : ''}`}
      aria-label="Puskesmas Dasuk — Beranda"
    >
      <span className="brand__mark">
        <img
          src="/logo-puskesmas-dasuk.png"
          alt="Logo Puskesmas Dasuk"
          width="52"
          height="52"
        />
      </span>
      <span className="brand__text">
        <strong>Puskesmas Dasuk</strong>
        <small>Kabupaten Sumenep</small>
      </span>
    </Link>
  )
}
