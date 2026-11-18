# Website Profil Puskesmas Dasuk

Website profil Puskesmas Dasuk, Kecamatan Dasuk, Kabupaten Sumenep. Dibangun
dengan Vite, React, dan React Router.

## Halaman

- Beranda (`/`)
- Profil (`/profil`)
- Pelayanan (`/pelayanan`)
- Berita (`/berita`) dan detail berita (`/berita/:slug`)
- Kontak (`/kontak`)

## Menjalankan proyek

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
npm run preview
```

Pemeriksaan kode:

```bash
npm run lint
```

## Mengubah data situs

Sebagian besar konten terpusat di:

- `src/data/site.js` — alamat, telepon, jam layanan, visi/misi, motto, dan
  profil kepala puskesmas.
- `src/data/news.js` — daftar berita contoh.
- `src/data/navigation.js` — menu navigasi utama.

## Identitas & Logo

- Logo resmi Puskesmas Dasuk (`public/logo-puskesmas-dasuk.png`) telah dipasang pada header navigasi, footer, favicon, serta badge profil beranda dan tentang kami dengan slogan resmi **"Bismillah Melayani"**.

## Catatan penting

- Alamat, nomor telepon, dan jam layanan bersumber dari informasi publik
  Google Maps dan dapat berubah. Verifikasi sebelum dipublikasikan.
- Nama kepala puskesmas, visi, misi, dan berita masih berupa draf yang dapat
  disesuaikan dengan dokumen resmi Puskesmas. Foto kepala puskesmas
  menggunakan `public/images/kepala-puskesmas-dasuk.png`.
- Formulir kontak menyimpan pesan di `localStorage` perangkat pengunjung
  (`pkm-dasuk-messages`) karena belum ada backend atau integrasi email.
- Nomor WhatsApp dan email resmi belum tersedia, sehingga tombol terkait
  disembunyikan.
