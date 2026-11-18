import {
  Activity,
  Ambulance,
  ArrowRight,
  Award,
  Baby,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  Compass,
  FlaskConical,
  HeartPulse,
  MapPin,
  MessageCircle,
  Network,
  Pill,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { site } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

const facilities = [
  {
    icon: Building2,
    title: 'Ruang Pendaftaran & Rekam Medis',
    description:
      'Pelayanan administrasi terpadu dengan sistem registrasi rapi, tertib, dan pendataan riwayat pasien yang aman.',
    tag: 'Administrasi',
  },
  {
    icon: Users,
    title: 'Ruang Tunggu Pasien',
    description:
      'Area tunggu berpendingin udara yang bersih, lapang, ramah disabilitas, lansia, serta ibu hamil dan anak.',
    tag: 'Kenyamanan',
  },
  {
    icon: Stethoscope,
    title: 'Ruang Pemeriksaan Umum (Poli Umum)',
    description:
      'Pemeriksaan kesehatan dasar, penegakan diagnosis, dan konsultasi dokter yang komprehensif untuk seluruh usia.',
    tag: 'Pelayanan Dasar',
  },
  {
    icon: Baby,
    title: 'Ruang Kesehatan Ibu & Anak (KIA / KB)',
    description:
      'Pelayanan antenatal, pemeriksaan kehamilan, imunisasi balita, pemantauan tumbuh kembang, dan konseling KB.',
    tag: 'Ibu & Anak',
  },
  {
    icon: Pill,
    title: 'Ruang Farmasi & Apotek',
    description:
      'Penyediaan obat-obatan esensial terstandar disertai penjelasan aturan pakai yang jelas oleh tenaga kefarmasian.',
    tag: 'Kefarmasian',
  },
  {
    icon: FlaskConical,
    title: 'Laboratorium Sederhana',
    description:
      'Pemeriksaan penunjang medis seperti tes darah rutin, glukosa, kolesterol, asam urat, dan tes cepat lainnya.',
    tag: 'Diagnostik',
  },
  {
    icon: Ambulance,
    title: 'Ruang Tindakan & Kesiapsiagaan UGD',
    description:
      'Penanganan pertama kegawatdaruratan medis dasar dan tindakan medis cepat dengan standar keselamatan pasien.',
    tag: 'Darurat Medis',
  },
  {
    icon: HeartPulse,
    title: 'Pojok Gizi & Konseling Kesehatan',
    description:
      'Konseling gizi seimbang, penanganan stunting terpadu, serta edukasi perilaku hidup bersih dan sehat (PHBS).',
    tag: 'Promotif Preventif',
  },
]

const emblemMeanings = [
  {
    icon: Building2,
    badge: 'Kemenkes RI',
    title: 'Palang Hijau & Bangunan',
    description:
      'Simbol resmi pelayanan kesehatan primer Republik Indonesia. Menegaskan dedikasi Puskesmas dalam menyelenggarakan upaya promotif, preventif, kuratif, dan rehabilitatif secara berkesinambungan.',
  },
  {
    icon: Activity,
    badge: 'Kearifan Sumenep',
    title: 'Kuda Kencak Bersayap Hitam',
    description:
      'Ikon kebanggaan Kabupaten Sumenep yang melambangkan kecepatan aksi, ketangkasan, dan kesiapsiagaan tenaga medis dalam menjangkau masyarakat hingga ke pelosok desa di Kecamatan Dasuk.',
  },
  {
    icon: ShieldCheck,
    badge: 'Perlindungan Warga',
    title: 'Naga Merah Tangguh',
    description:
      'Melambangkan keberanian, ketangguhan, dan kewaspadaan tinggi dalam membentengi keselamatan masyarakat serta menjaga derajat kesehatan warga dari ancaman penyakit.',
  },
  {
    icon: Sparkles,
    badge: 'Motto Resmi',
    title: 'Pita Bismillah Melayani',
    description:
      'Komitmen moral dan spiritual bahwa setiap pelayanan diawali dengan niat tulus beribadah, keramahan, dan dedikasi ikhlas melayani sepenuh hati sejalan dengan visi Pemerintah Kabupaten Sumenep.',
  },
]

// Struktur organisasi — sumber data: papan resmi "Struktur Organisasi
// Puskesmas Dasuk" (foto). Ejaan nama dan gelar mengikuti papan.
const orgClusters = [
  {
    icon: ClipboardList,
    code: 'Klaster I',
    name: 'Manajemen',
    pj: 'Ach Taufik Rahman, S.S.T, M.M.',
  },
  {
    icon: Baby,
    code: 'Klaster II',
    name: 'Ibu dan Anak',
    pj: 'Tirta Taurusyanti W, A.Md.Gz',
  },
  {
    icon: Stethoscope,
    code: 'Klaster III',
    name: 'Usia Dewasa dan Lansia',
    pj: 'Ach. Fathoni R, A.Md.Kep',
  },
  {
    icon: ShieldCheck,
    code: 'Klaster IV',
    name: 'Penyakit Menular',
    pj: 'Isfandi Prayitno, A.Md. Kep',
  },
  {
    icon: Network,
    code: 'Klaster V',
    name: 'Lintas Klaster',
    pj: 'dr. Meidiawati Kusuma',
  },
]

const headInfo = {
  name: 'Titik Nurhayati, SST, M.Kes',
  role: 'Kepala Puskesmas',
}

export default function Profil() {
  usePageMeta({
    title: 'Profil',
    description:
      'Profil Puskesmas Dasuk: sejarah, visi, misi, motto Bismillah Melayani, makna lambang resmi, profil pimpinan, struktur organisasi, dan sarana prasarana.',
  })

  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Profil Puskesmas Dasuk"
        description="Mengenal lebih dekat peran, sejarah, lambang resmi, arah pelayanan, kepemimpinan, dan sarana prasarana Puskesmas Dasuk dalam melayani masyarakat."
      />

      {/* 1. SEJARAH & PERAN UTAMA */}
      <section className="section">
        <div className="container profile-story">
          <div className="profile-story__media">
            <img
              src="/images/gedung-puskesmas-dasuk.png"
              alt="Gedung Puskesmas Dasuk dengan papan nama, halaman depan, dan bendera Merah Putih"
              width="1656"
              height="950"
              loading="lazy"
            />
          </div>

          <div className="profile-story__content">
            <SectionHeading
              eyebrow="Sejarah & Peran"
              title="Ujung tombak pelayanan kesehatan masyarakat Kecamatan Dasuk"
            />
            <p>
              Puskesmas Dasuk merupakan fasilitas pelayanan kesehatan tingkat
              pertama milik Pemerintah Kabupaten Sumenep yang bertugas
              menyelenggarakan pelayanan kesehatan masyarakat dan perorangan di
              seluruh wilayah Kecamatan Dasuk.
            </p>
            <p>
              Dengan semangat <strong>Bismillah Melayani</strong>, Puskesmas
              Dasuk terus berupaya mendekatkan akses layanan yang ramah, cepat,
              dan bermutu. Pelayanan promotif dan preventif menjadi pilar utama
              dalam pencegahan penyakit, didukung layanan kuratif dan
              rehabilitatif sesuai standar Kementerian Kesehatan RI.
            </p>

            {/* Quick Stats Pill Grid */}
            <div className="profile-highlights">
              <div className="profile-highlight-card">
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <strong>15 Desa</strong>
                  <span>Wilayah Binaan</span>
                </div>
              </div>
              <div className="profile-highlight-card">
                <Compass size={20} aria-hidden="true" />
                <div>
                  <strong>UKM & UKP</strong>
                  <span>Layanan Terpadu</span>
                </div>
              </div>
              <div className="profile-highlight-card">
                <Sparkles size={20} aria-hidden="true" />
                <div>
                  <strong>Bismillah Melayani</strong>
                  <span>Semboyan Kerja</span>
                </div>
              </div>
            </div>

            <ul className="profile-story__list">
              <li>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Pelayanan kesehatan perorangan yang ramah dan tepat waktu.</span>
              </li>
              <li>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Upaya pemberdayaan masyarakat dan posyandu di setiap desa binaan.</span>
              </li>
              <li>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Kolaborasi solid bersama lintas sektor, pemerintah desa, dan kader kesehatan.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. VISI, MISI, MOTTO & TATA NILAI */}
      <section className="section section--muted">
        <div className="container">
          <SectionHeading
            eyebrow="Arah Pelayanan"
            title="Visi, misi, motto, dan tata nilai Puskesmas Dasuk"
            description="Arah kebijakan dan nilai kerja Puskesmas Dasuk disusun untuk mendukung terwujudnya masyarakat Kecamatan Dasuk yang unggul, mandiri, dan sejahtera."
          />

          <div className="vision-grid">
            <article className="vision-card">
              <div className="vision-card__header">
                <p className="eyebrow eyebrow--light">
                  <span className="eyebrow__dot" aria-hidden="true" />
                  Visi Utama
                </p>
                <Award size={26} aria-hidden="true" />
              </div>
              <h2>{site.vision}</h2>
              <p className="vision-card__note">Visi resmi Puskesmas Dasuk</p>
            </article>

            <article className="mission-card">
              <div className="mission-card__header">
                <p className="eyebrow">
                  <span className="eyebrow__dot" aria-hidden="true" />
                  Misi Strategis
                </p>
                <span className="mission-card__count">4 Misi Utama</span>
              </div>
              <h2>Langkah Nyata Mewujudkan Visi</h2>
              <ul className="mission-list">
                {site.missions.map((mission, index) => (
                  <li key={mission}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <p>{mission}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* MOTTO PELAYANAN RESMI */}
          <div className="motto-card">
            <div className="motto-card__body">
              <div className="motto-card__badge">
                <Sparkles size={16} aria-hidden="true" />
                <span>Motto Pelayanan</span>
              </div>
              <h3 className="motto-card__title">{site.motto}</h3>
              <p className="motto-card__desc">
                Pelayanan kesehatan yang dilandasi niat suci beribadah, ketulusan
                hati, kesopanan budi pekerti, dan dedikasi profesional demi
                terwujudnya derajat kesehatan masyarakat Kecamatan Dasuk yang optimal.
              </p>
            </div>
            <div className="motto-card__visual" aria-hidden="true">
              <HeartPulse size={64} />
            </div>
          </div>

          {/* TATA NILAI PRIMA */}
          <div className="tn-block">
            <div className="tn-block__head">
              <h3>Tata Nilai PRIMA</h3>
              <p>
                Lima nilai kerja yang menjadi landasan setiap pelayanan
                Puskesmas Dasuk.
              </p>
            </div>
            <div className="tn-grid">
              {site.values.map((value) => (
                <article className="tn-card" key={value.letter}>
                  <span className="tn-card__letter" aria-hidden="true">
                    {value.letter}
                  </span>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAKNA LAMBANG & IDENTITAS RESMI */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Identitas & Lambang Resmi"
            title="Arti dan makna lambang Puskesmas Dasuk"
            description="Setiap unsur grafis pada lambang resmi Puskesmas Dasuk mencerminkan nilai luhur kesehatan, kekayaan kearifan lokal Sumenep, serta tekad pengabdian."
          />

          <div className="emblem-layout">
            <div className="emblem-showcase">
              <div className="emblem-showcase__circle">
                <img
                  src="/logo-puskesmas-dasuk.png"
                  alt="Lambang Resmi Puskesmas Dasuk — Kabupaten Sumenep"
                  width="280"
                  height="256"
                />
              </div>
              <div className="emblem-showcase__caption">
                <strong>Puskesmas Dasuk</strong>
                <span>Kabupaten Sumenep — Jawa Timur</span>
                <span className="emblem-showcase__pill">Motto: Bismillah Melayani</span>
              </div>
            </div>

            <div className="emblem-grid">
              {emblemMeanings.map((item) => {
                const Icon = item.icon
                return (
                  <article className="emblem-card" key={item.title}>
                    <div className="emblem-card__top">
                      <span className="emblem-card__icon">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <span className="emblem-card__badge">{item.badge}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEPEMIMPINAN / PROFIL KEPALA PUSKESMAS */}
      <section className="section section--muted">
        <div className="container">
          <SectionHeading
            eyebrow="Kepemimpinan"
            title="Sambutan Kepala Puskesmas Dasuk"
            description="Komitmen pimpinan Puskesmas Dasuk dalam mengawal mutu pelayanan dan kepuasan masyarakat."
          />

          <div className="head-profile">
            <div className="head-profile__avatar">
              <div className="head-profile__seal">
                <Stethoscope size={48} aria-hidden="true" />
                <span className="head-profile__seal-badge">Pimpinan PKM</span>
              </div>
              <div className="head-profile__meta">
                <strong>{site.head.name}</strong>
                <span>{site.head.position}</span>
              </div>
            </div>

            <div className="head-profile__body">
              <div className="head-profile__role-chip">
                <Award size={15} aria-hidden="true" />
                <span>{site.head.position} Puskesmas Dasuk</span>
              </div>
              <h2>{site.head.name}</h2>
              <blockquote className="head-profile__message">
                <Quote size={28} aria-hidden="true" />
                <p>“{site.head.message}”</p>
              </blockquote>

              <div className="head-profile__tags">
                <span className="head-tag">
                  <CheckCircle2 size={14} aria-hidden="true" /> Pelayanan Humanis & Ramah
                </span>
                <span className="head-tag">
                  <CheckCircle2 size={14} aria-hidden="true" /> Akses Kesehatan Merata
                </span>
                <span className="head-tag">
                  <CheckCircle2 size={14} aria-hidden="true" /> Standar Mutu Berkelanjutan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRUKTUR ORGANISASI */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Bagan Organisasi"
            title="Struktur organisasi Puskesmas Dasuk"
            description="Kepala Puskesmas membina lima kelompok kerja — Klaster I–IV dan Lintas Klaster — sesuai papan resmi Struktur Organisasi Puskesmas Dasuk."
            align="center"
          />

          <div className="org-hierarchy">
            {/* Level 1: Kepala Puskesmas */}
            <div className="org-hierarchy__lead">
              <div className="org-card org-card--lead">
                <div className="org-card__header">
                  <Award size={20} aria-hidden="true" />
                  <span className="org-card__pill">{headInfo.role}</span>
                </div>
                <h3>{headInfo.name}</h3>
                <p>
                  Memimpin dan mengoordinasikan Klaster I–IV serta Lintas
                  Klaster dalam penyelenggaraan pelayanan Puskesmas Dasuk.
                </p>
              </div>
            </div>

            <div className="org-hierarchy__line" aria-hidden="true" />

            {/* Level 2: Lima klaster */}
            <div className="org-hierarchy__clusters">
              {orgClusters.map((cluster) => {
                const Icon = cluster.icon
                return (
                  <article className="org-card" key={cluster.code}>
                    <div className="org-card__header">
                      <Icon size={18} aria-hidden="true" />
                      <span className="org-card__pill">{cluster.code}</span>
                    </div>
                    <h3>{cluster.name}</h3>
                    <p className="org-card__pj">
                      <BadgeCheck size={15} aria-hidden="true" />
                      <span>{cluster.pj}</span>
                    </p>
                  </article>
                )
              })}
            </div>
          </div>

          <p className="org-hierarchy__note">
            Nama penanggung jawab klaster disalin dari papan resmi Struktur
            Organisasi Puskesmas Dasuk.
          </p>
        </div>
      </section>

      {/* 6. SARANA & PRASARANA FASILITAS */}
      <section className="section section--muted">
        <div className="container">
          <SectionHeading
            eyebrow="Sarana & Prasarana"
            title="Fasilitas pendukung pelayanan kesehatan"
            description="Puskesmas Dasuk dilengkapi sarana prasarana yang bersih, representatif, dan terstandar untuk memberikan rasa aman dan nyaman kepada masyarakat."
          />

          <div className="facilities-layout">
            <div className="facilities-layout__media">
              <img
                src="/images/fasilitas-puskesmas.jpg"
                alt="Sarana prasarana dan fasilitas pelayanan Puskesmas Dasuk"
                width="1400"
                height="876"
                loading="lazy"
              />
              <div className="facilities-layout__badge">
                <ShieldCheck size={20} aria-hidden="true" />
                <div>
                  <strong>Standar Pelayanan Primer</strong>
                  <span>Fasilitas Terawat & Nyaman</span>
                </div>
              </div>
            </div>

            <div className="facilities-grid">
              {facilities.map((facility) => {
                const Icon = facility.icon
                return (
                  <article className="facility-card" key={facility.title}>
                    <div className="facility-card__header">
                      <span className="facility-card__icon">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="facility-card__tag">{facility.tag}</span>
                    </div>
                    <h3>{facility.title}</h3>
                    <p>{facility.description}</p>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="profile-footnote">
            <p>
              Seluruh fasilitas, sarana, dan prasarana di Puskesmas Dasuk
              dipelihara secara berkala demi menjamin keamanan dan kenyamanan
              pasien, pengunjung, serta tenaga kesehatan yang bertugas.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CTA BAND */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" aria-hidden="true" />
              Pelayanan Kesehatan
            </p>
            <h2>Ingin Mengetahui Jadwal & Ragam Layanan?</h2>
            <p>
              Pelajari informasi jadwal buka poli, prosedur pendaftaran, atau
              hubungi kontak resmi Puskesmas Dasuk untuk konsultasi langsung.
            </p>
          </div>
          <div className="cta-band__actions">
            <ButtonLink to="/pelayanan" variant="yellow" icon={ArrowRight}>
              Lihat Layanan
            </ButtonLink>
            <ButtonLink
              to="/kontak"
              variant="outline-light"
              icon={MessageCircle}
            >
              Hubungi Kami
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
