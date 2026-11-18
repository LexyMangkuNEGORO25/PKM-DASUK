import {
  Baby,
  FlaskConical,
  HeartHandshake,
  Pill,
  Smile,
  Stethoscope,
  Syringe,
} from 'lucide-react'

/**
 * Kategori pelayanan.
 *
 * Ketersediaan jenis layanan, jadwal, dan persyaratan dapat berbeda sesuai
 * fasilitas dan ketentuan yang berlaku.
 */
export const services = [
  {
    slug: 'pemeriksaan-umum',
    icon: Stethoscope,
    title: 'Pemeriksaan Umum',
    summary:
      'Pelayanan pemeriksaan kesehatan dasar untuk keluhan umum, konsultasi, dan penanganan awal sesuai kebutuhan pasien.',
    details: [
      'Pemeriksaan awal dan konsultasi keluhan umum',
      'Penanganan awal sesuai indikasi',
      'Rujukan bila diperlukan',
    ],
  },
  {
    slug: 'kesehatan-gigi',
    icon: Smile,
    title: 'Kesehatan Gigi & Mulut',
    summary:
      'Pemeriksaan dan konsultasi kesehatan gigi serta mulut untuk mendukung kesehatan rongga mulut.',
    details: [
      'Pemeriksaan kesehatan gigi dan mulut',
      'Konsultasi perawatan',
      'Edukasi kebersihan mulut',
    ],
  },
  {
    slug: 'kia-kb',
    icon: Baby,
    title: 'KIA & KB',
    summary:
      'Pelayanan kesehatan ibu, anak, dan keluarga berencana yang berfokus pada pemantauan serta pendampingan.',
    details: [
      'Pemantauan kesehatan ibu hamil',
      'Pelayanan kesehatan anak',
      'Konsultasi keluarga berencana',
    ],
  },
  {
    slug: 'imunisasi',
    icon: Syringe,
    title: 'Imunisasi',
    summary:
      'Pemberian imunisasi sesuai jadwal dan ketentuan program kesehatan yang berlaku.',
    details: [
      'Imunisasi dasar dan lanjutan sesuai jadwal',
      'Pencatatan status imunisasi',
      'Edukasi orang tua',
    ],
  },
  {
    slug: 'laboratorium',
    icon: FlaskConical,
    title: 'Laboratorium',
    summary:
      'Pemeriksaan penunjang sederhana untuk membantu penegakan diagnosis dan pemantauan kesehatan.',
    details: [
      'Pemeriksaan laboratorium sederhana',
      'Dukungan penegakan diagnosis',
      'Pemantauan hasil pemeriksaan',
    ],
    note: 'Jenis pemeriksaan mengikuti fasilitas dan ketentuan yang berlaku.',
  },
  {
    slug: 'farmasi',
    icon: Pill,
    title: 'Farmasi',
    summary:
      'Pelayanan obat dan informasi penggunaan obat sesuai resep serta ketentuan yang berlaku.',
    details: [
      'Penyerahan obat sesuai resep',
      'Informasi penggunaan obat',
      'Edukasi kepatuhan minum obat',
    ],
  },
  {
    slug: 'kesehatan-masyarakat',
    icon: HeartHandshake,
    title: 'Kesehatan Masyarakat',
    summary:
      'Kegiatan promotif dan preventif berbasis masyarakat, termasuk edukasi kesehatan dan kemitraan dengan kader.',
    details: [
      'Promosi kesehatan',
      'Pemberdayaan kader dan masyarakat',
      'Kemitraan lintas sektor',
    ],
  },
]
