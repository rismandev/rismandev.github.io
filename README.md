# RISMANDEV Personal Website

Website personal portfolio dengan tampilan modern, responsive, dan siap dipakai untuk GitHub Pages.

## 🌐 Website Live

**[rismandev.site](https://rismandev.site)**

## Overview

Project ini adalah website statis (HTML + CSS + JS) untuk menampilkan:
- Profil personal
- Layanan
- Work experiences
- Portfolio
- Kontak & social links

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap (CSS utility/grid)
- Font Awesome (icons)

## Struktur Folder Utama

```text
.
├── index.html
├── CNAME
├── README.md
├── backups/
└── assets/
    ├── css/
    ├── images/
    ├── icons/
    ├── js/
    └── fonts/
```

## Menjalankan Secara Lokal

### Opsi cepat

Buka file langsung di browser:

```bash
open index.html
```

### Opsi server lokal (disarankan)

```bash
python3 -m http.server 8080
```

Lalu akses:

```text
http://localhost:8080
```

## Deployment

Project ini dapat dipublish melalui **GitHub Pages** dari branch `main`.

Jika menggunakan custom domain, konfigurasi disimpan di file `CNAME`.

## Backup

Backup arsip versi sebelumnya disimpan pada folder `backups/`.

Contoh:
- `backups/website-backup-20260309-153244.tar.gz`
- `backups/website-pre-cleanup-20260312-233208.tar.gz`

Untuk mengekstrak backup:

```bash
tar -xzf backups/website-backup-20260309-153244.tar.gz
```

## Catatan Pengembangan

- Style utama redesign saat ini berada di `assets/css/redesign.css`.
- Halaman utama ada di `index.html`.
- Navbar mobile sudah menggunakan dropdown toggle.
- Runtime CSS yang dipakai saat ini: `bootstrap.min.css`, `font-awesome/css/all.min.css`, dan `redesign.css`.
- Aset legacy template yang tidak dipakai sudah dibersihkan untuk menurunkan ukuran project.

---

Dikembangkan oleh **RISMANDEV**.
