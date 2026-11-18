/**
 * Contoh konten berita untuk memperlihatkan tata letak halaman Berita.
 * Ganti dengan berita, pengumuman, dan dokumentasi kegiatan resmi
 * Puskesmas Dasuk sebelum website dipublikasikan.
 */
export const news = [
  {
    slug: 'menjaga-kesehatan-keluarga-musim-hujan',
    category: 'Informasi Kesehatan',
    date: '2026-11-10',
    dateLabel: '10 November 2026',
    title: 'Menjaga Kesehatan Keluarga di Musim Hujan',
    excerpt:
      'Perubahan cuaca dapat memengaruhi kesehatan. Beberapa kebiasaan sederhana dapat membantu keluarga tetap sehat dan nyaman menjalani aktivitas.',
    image: '/images/berita-kesehatan-keluarga.jpg',
    imageAlt:
      'Tenaga kesehatan memberikan edukasi kesehatan kepada masyarakat',
    content: [
      {
        type: 'paragraph',
        text: 'Musim hujan membawa perubahan suhu dan kelembapan yang dapat memengaruhi kondisi tubuh. Pada periode ini, masyarakat perlu memperhatikan kebersihan lingkungan, kualitas air, dan pola hidup sehari-hari agar tetap sehat.',
      },
      {
        type: 'heading',
        text: 'Jaga kebersihan tangan dan lingkungan',
      },
      {
        type: 'paragraph',
        text: 'Mencuci tangan dengan sabun dan air bersih merupakan kebiasaan sederhana yang dapat membantu mencegah penyebaran kuman. Pastikan juga lingkungan rumah tetap bersih dan tidak menjadi tempat genangan air.',
      },
      {
        type: 'list',
        items: [
          'Cuci tangan dengan sabun sebelum makan dan setelah beraktivitas.',
          'Pastikan air minum dan bahan makanan diolah dengan bersih.',
          'Bersihkan saluran air agar tidak terjadi genangan.',
          'Jaga kebersihan tempat tidur dan ruangan agar tetap kering.',
        ],
      },
      {
        type: 'heading',
        text: 'Penuhi kebutuhan cairan dan istirahat',
      },
      {
        type: 'paragraph',
        text: 'Tubuh membutuhkan cairan dan istirahat yang cukup untuk menjaga daya tahan. Konsumsi air putih, makanan bergizi seimbang, serta tidur yang cukup dapat membantu tubuh beradaptasi dengan perubahan cuaca.',
      },
      {
        type: 'paragraph',
        text: 'Apabila keluhan kesehatan berlanjut atau dirasa mengganggu aktivitas, segera kunjungi fasilitas pelayanan kesehatan terdekat untuk mendapatkan pemeriksaan yang sesuai.',
      },
    ],
  },
  {
    slug: 'pentingnya-pemeriksaan-kesehatan-rutin',
    category: 'Edukasi',
    date: '2026-11-03',
    dateLabel: '3 November 2026',
    title: 'Mengapa Pemeriksaan Kesehatan Rutin Penting?',
    excerpt:
      'Pemeriksaan kesehatan secara rutin membantu mengenali risiko lebih awal dan memberi kesempatan untuk melakukan langkah pencegahan yang tepat.',
    image: '/images/berita-pemeriksaan-rutin.jpg',
    imageAlt: 'Pemeriksaan kesehatan dengan stetoskop oleh tenaga kesehatan',
    content: [
      {
        type: 'paragraph',
        text: 'Pemeriksaan kesehatan rutin bukan hanya untuk orang yang sedang sakit. Kegiatan ini dapat membantu memantau kondisi tubuh, mengenali faktor risiko, dan menentukan langkah pencegahan yang sesuai.',
      },
      {
        type: 'heading',
        text: 'Manfaat pemeriksaan rutin',
      },
      {
        type: 'list',
        items: [
          'Membantu memantau tekanan darah dan kondisi kesehatan umum.',
          'Mengenali faktor risiko lebih awal sebelum menimbulkan keluhan.',
          'Memberikan kesempatan untuk berkonsultasi mengenai pola hidup sehat.',
          'Membantu tenaga kesehatan menentukan tindak lanjut yang tepat.',
        ],
      },
      {
        type: 'heading',
        text: 'Mulai dari langkah sederhana',
      },
      {
        type: 'paragraph',
        text: 'Pemeriksaan dapat dimulai dengan konsultasi mengenai kondisi tubuh, riwayat kesehatan keluarga, dan kebiasaan sehari-hari. Diskusikan juga keluhan yang dirasakan agar tenaga kesehatan dapat memberikan saran yang sesuai.',
      },
      {
        type: 'paragraph',
        text: 'Jadwal dan jenis pemeriksaan dapat berbeda untuk setiap orang. Konsultasikan kebutuhan pemeriksaan dengan tenaga kesehatan di fasilitas pelayanan kesehatan terdekat.',
      },
    ],
  },
  {
    slug: 'peran-posyandu-kesehatan-ibu-anak',
    category: 'Kesehatan Masyarakat',
    date: '2026-10-27',
    dateLabel: '27 Oktober 2026',
    title: 'Peran Posyandu dalam Pemantauan Kesehatan Ibu dan Anak',
    excerpt:
      'Posyandu menjadi salah satu ruang penting bagi keluarga untuk memantau tumbuh kembang anak dan mendapatkan edukasi kesehatan.',
    image: '/images/berita-posyandu.jpg',
    imageAlt:
      'Tenaga kesehatan mendampingi masyarakat dalam kegiatan kesehatan',
    content: [
      {
        type: 'paragraph',
        text: 'Posyandu merupakan bentuk pelayanan kesehatan berbasis masyarakat yang melibatkan kader, tenaga kesehatan, dan keluarga. Kegiatan ini menjadi salah satu upaya untuk mendekatkan layanan kesehatan kepada masyarakat.',
      },
      {
        type: 'heading',
        text: 'Pemantauan tumbuh kembang',
      },
      {
        type: 'paragraph',
        text: 'Melalui kegiatan posyandu, pertumbuhan anak dapat dipantau secara berkala. Pemantauan ini membantu keluarga mengenali perubahan yang perlu diperhatikan dan berkonsultasi dengan tenaga kesehatan.',
      },
      {
        type: 'list',
        items: [
          'Pemantauan berat badan dan tinggi badan anak.',
          'Edukasi gizi dan pola asuh untuk keluarga.',
          'Pemberian informasi mengenai imunisasi.',
          'Pendampingan kesehatan ibu dan anak.',
        ],
      },
      {
        type: 'heading',
        text: 'Partisipasi keluarga',
      },
      {
        type: 'paragraph',
        text: 'Kehadiran keluarga dalam kegiatan posyandu membantu proses pemantauan kesehatan berjalan lebih baik. Orang tua dapat bertanya, berdiskusi, dan memperoleh informasi yang sesuai dengan kebutuhan anak.',
      },
      {
        type: 'paragraph',
        text: 'Untuk informasi jadwal dan kegiatan posyandu di wilayah Anda, silakan hubungi Puskesmas Dasuk atau kader kesehatan setempat.',
      },
    ],
  },
]
