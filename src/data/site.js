/**
 * Data utama website Puskesmas Dasuk.
 *
 * Catatan:
 * - Alamat, nomor telepon, dan jam layanan bersumber dari informasi publik
 *   Google Maps. Mohon verifikasi ulang dengan Puskesmas sebelum dijadikan
 *   acuan resmi.
 * - Visi, misi, motto, dan tata nilai (PRIMA) bersumber dari materi resmi
 *   Puskesmas Dasuk.
 * - Email resmi Puskesmas Dasuk: pkm.dasuk@gmail.com.
 * - Nomor WhatsApp resmi belum tersedia (nilai null) sehingga tombol
 *   terkait tidak ditampilkan.
 */
export const site = {
  name: 'Puskesmas Dasuk',
  shortName: 'PKM Dasuk',
  url: 'https://puskesmasdasuk.com',
  logo: '/logo-puskesmas-dasuk.png',
  tagline: 'Pelayanan kesehatan untuk masyarakat Kecamatan Dasuk',
  location: 'Kecamatan Dasuk, Kabupaten Sumenep, Jawa Timur',
  address:
    'Jl. Raya Dasuk, Battangan, Kerta Barat, Kec. Dasuk, Kabupaten Sumenep, Jawa Timur 69454',
  phone: '0877-3060-3070',
  phoneHref: 'tel:+6287730603070',
  whatsapp: null,
  email: 'pkm.dasuk@gmail.com',
  coordinates: { lat: -6.8961324, lng: 113.8041604 },
  mapsEmbed:
    'https://www.google.com/maps?q=-6.8961324,113.8041604&z=16&hl=id&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=-6.8961324,113.8041604',
  hoursNote:
    'Informasi jam layanan publik: Senin–Sabtu 08.00–14.00, Minggu tutup. Konfirmasi melalui telepon sebelum berkunjung.',
  schedule: [
    {
      day: 'Senin – Sabtu',
      hours: '08.00 – 14.00',
      note: 'Sesuai informasi publik Google Maps.',
    },
    {
      day: 'Minggu',
      hours: 'Tutup',
      note: 'Layanan darurat mengikuti ketentuan Puskesmas.',
    },
    {
      day: 'Libur nasional',
      hours: 'Konfirmasi',
      note: 'Hubungi Puskesmas untuk memastikan layanan.',
    },
  ],
  head: {
    name: 'Kepala Puskesmas Dasuk',
    position: 'Kepala Puskesmas',
    initials: 'KP',
    message:
      'Kesehatan masyarakat merupakan tanggung jawab bersama. Puskesmas Dasuk berkomitmen menghadirkan pelayanan yang mudah diakses, ramah, dan berorientasi pada kebutuhan warga. Mari bersama-sama menjaga kesehatan diri, keluarga, dan lingkungan.',
  },
  motto: 'Bismillah Melayani',
  vision: 'Dasuk Unggul Mandiri dan Sejahtera.',
  missions: [
    'Membangun kualitas Sumber Daya Manusia (SDM) yang berdaya saing di bidang kesehatan.',
    'Meningkatkan kesehatan masyarakat melalui penguatan mutu pelayanan masyarakat.',
    'Mewujudkan tata kelola Puskesmas yang transparan, inovatif, dan responsif dalam melayani masyarakat.',
    'Mendorong kemandirian masyarakat untuk hidup bersih dan sehat dengan meningkatkan kesehatan individu dan keluarga beserta lingkungannya.',
  ],
  values: [
    {
      letter: 'P',
      title: 'Profesional',
      description:
        'Pelayanan kesehatan dilakukan sesuai dengan standar profesinya serta transparan dalam menyelenggarakan pelayanan kesehatan. Tindakan kesehatan yang dilakukan dikomunikasikan dan diputuskan bersama dengan pasien atau pelanggan serta dapat dipertanggungjawabkan.',
    },
    {
      letter: 'R',
      title: 'Responsif',
      description:
        'Cepat dan tanggap dalam menyelenggarakan pelayanan kesehatan.',
    },
    {
      letter: 'I',
      title: 'Inovatif',
      description:
        'Selalu berinovasi membuat terobosan baru dalam menyelenggarakan kegiatan Puskesmas, baik kegiatan dalam gedung maupun luar gedung, untuk meningkatkan pelayanan.',
    },
    {
      letter: 'M',
      title: 'BerMutu',
      description:
        'Terjangkau akses dan layanannya, sehingga selalu dibutuhkan oleh masyarakat di wilayah kerja Puskesmas Dasuk.',
    },
    {
      letter: 'A',
      title: 'Akuntabel',
      description:
        'Melaksanakan tugas sesuai tupoksinya dengan disiplin dan berintegritas tinggi.',
    },
  ],
}
