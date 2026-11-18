import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { site } from '../../data/site'

const initialForm = {
  nama: '',
  email: '',
  telepon: '',
  topik: '',
  pesan: '',
  consent: false,
}

const topikOptions = [
  'Pertanyaan umum',
  'Informasi layanan',
  'Jadwal kunjungan',
  'Saran dan masukan',
  'Lainnya',
]

function validate(values) {
  const errors = {}

  if (!values.nama.trim()) {
    errors.nama = 'Nama wajib diisi.'
  } else if (values.nama.trim().length < 2) {
    errors.nama = 'Nama minimal 2 karakter.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email wajib diisi.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Format email belum benar.'
  }

  if (values.telepon && !/^[0-9+\-\s()]{7,20}$/.test(values.telepon)) {
    errors.telepon = 'Format nomor telepon belum benar.'
  }

  if (!values.topik) {
    errors.topik = 'Pilih topik pesan.'
  }

  if (!values.pesan.trim()) {
    errors.pesan = 'Pesan wajib diisi.'
  } else if (values.pesan.trim().length < 10) {
    errors.pesan = 'Pesan minimal 10 karakter.'
  }

  if (!values.consent) {
    errors.consent = 'Centang persetujuan sebelum mengirim pesan.'
  }

  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(null)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: '' }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      requestAnimationFrame(() => {
        document.getElementById(`field-${firstError}`)?.focus()
      })
      return
    }

    const reference = `PKM-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`
    const payload = {
      ...form,
      reference,
      createdAt: new Date().toISOString(),
    }

    try {
      const existing = JSON.parse(
        window.localStorage.getItem('pkm-dasuk-messages') || '[]',
      )
      window.localStorage.setItem(
        'pkm-dasuk-messages',
        JSON.stringify([...existing, payload]),
      )
    } catch {
      // Penyimpanan lokal dapat tidak tersedia pada mode privat tertentu.
    }

    setResult({ reference, nama: form.nama.trim() })
    setForm(initialForm)
    setErrors({})
  }

  if (result) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success__icon">
          <CheckCircle2 size={34} aria-hidden="true" />
        </span>
        <h3>Pesan berhasil disimpan</h3>
        <p>
          Terima kasih, {result.nama}. Pesan Anda tersimpan sebagai catatan
          lokal di perangkat ini.
        </p>
        <span className="form-success__ref">
          Nomor referensi: {result.reference}
        </span>
        <p className="form-success__note">
          Catatan: formulir ini belum terhubung ke email atau WhatsApp resmi
          Puskesmas. Untuk kebutuhan mendesak, hubungi nomor telepon resmi
          {site.phone ? ` ${site.phone}.` : '.'}
        </p>
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => setResult(null)}
        >
          Kirim pesan lain
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="field-nama">
            Nama lengkap <span aria-hidden="true">*</span>
          </label>
          <input
            id="field-nama"
            name="nama"
            type="text"
            autoComplete="name"
            value={form.nama}
            onChange={handleChange}
            aria-invalid={Boolean(errors.nama)}
            aria-describedby={errors.nama ? 'error-nama' : undefined}
            placeholder="Nama Anda"
          />
          {errors.nama && (
            <p className="field__error" id="error-nama">
              {errors.nama}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="field-email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            placeholder="nama@email.com"
          />
          {errors.email && (
            <p className="field__error" id="error-email">
              {errors.email}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="field-telepon">Nomor telepon (opsional)</label>
          <input
            id="field-telepon"
            name="telepon"
            type="tel"
            autoComplete="tel"
            value={form.telepon}
            onChange={handleChange}
            aria-invalid={Boolean(errors.telepon)}
            aria-describedby={errors.telepon ? 'error-telepon' : undefined}
            placeholder="08xxxxxxxxxx"
          />
          {errors.telepon && (
            <p className="field__error" id="error-telepon">
              {errors.telepon}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="field-topik">
            Topik pesan <span aria-hidden="true">*</span>
          </label>
          <select
            id="field-topik"
            name="topik"
            value={form.topik}
            onChange={handleChange}
            aria-invalid={Boolean(errors.topik)}
            aria-describedby={errors.topik ? 'error-topik' : undefined}
          >
            <option value="">Pilih topik</option>
            {topikOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.topik && (
            <p className="field__error" id="error-topik">
              {errors.topik}
            </p>
          )}
        </div>

        <div className="field field--full">
          <div className="field__label-row">
            <label htmlFor="field-pesan">
              Pesan <span aria-hidden="true">*</span>
            </label>
            <span className="field__hint">{form.pesan.length}/1000</span>
          </div>
          <textarea
            id="field-pesan"
            name="pesan"
            rows="5"
            maxLength="1000"
            value={form.pesan}
            onChange={handleChange}
            aria-invalid={Boolean(errors.pesan)}
            aria-describedby={errors.pesan ? 'error-pesan' : undefined}
            placeholder="Tuliskan pesan atau pertanyaan Anda"
          />
          {errors.pesan && (
            <p className="field__error" id="error-pesan">
              {errors.pesan}
            </p>
          )}
        </div>

        <div className="field field--full">
          <label className="checkbox" htmlFor="field-consent">
            <input
              id="field-consent"
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={handleChange}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? 'error-consent' : undefined}
            />
            <span>
              Saya menyetujui data yang saya kirimkan digunakan untuk keperluan
              komunikasi dan pelayanan.
            </span>
          </label>
          {errors.consent && (
            <p className="field__error" id="error-consent">
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn--primary">
          <span>Kirim Pesan</span>
          <Send size={18} aria-hidden="true" />
        </button>
        <p className="form-note">
          Pesan tersimpan sebagai catatan lokal di perangkat Anda. Untuk
          kebutuhan mendesak, hubungi nomor telepon resmi
          {site.phone ? ` ${site.phone}.` : ' Puskesmas.'}
        </p>
      </div>
    </form>
  )
}
