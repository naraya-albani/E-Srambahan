# 📖 E-Srambahan

> **E-Srambahan** adalah aplikasi web interaktif berbasis budaya Jawa yang menyajikan konten seputar lagu dalam kebudayaan dalam Jawa secara digital. Nama *srambahan* berasal dari Bahasa Jawa yang berarti sesuatu yang bersifat umum atau meluas — mencerminkan semangat aplikasi ini untuk menjangkau khalayak luas dalam melestarikan budaya Jawa.

🌐 **Live Demo:** [e-srambahan.vercel.app](https://e-srambahan.vercel.app)

---

## ✨ Fitur

- Terdapat pendeteksi fitur deteksi pitch yang sesuai dengan tangga nada di Jawa
- Antarmuka berbahasa Jawa yang autentik (*Mlêbêt*, dll.)
- Navigasi intuitif berbasis halaman dengan Next.js App Router
- Desain responsif untuk berbagai ukuran layar
- Performa tinggi dengan optimasi gambar dan font otomatis dari Next.js

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| [Next.js 14+](https://nextjs.org) | Framework React dengan App Router |
| [TypeScript](https://www.typescriptlang.org) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com) | Styling dan desain responsif |
| [Vercel](https://vercel.com) | Hosting dan deployment |

---

## 🚀 Memulai

### Prasyarat

Pastikan kamu sudah menginstal:
- [Node.js](https://nodejs.org) versi 18 ke atas
- npm / yarn / pnpm / bun

### Instalasi

1. **Clone repositori ini**

   ```bash
   git clone https://github.com/naraya-albani/E-Srambahan.git
   cd E-Srambahan
   ```

2. **Install dependensi**

   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Jalankan server pengembangan**

   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

---

## 📁 Struktur Proyek

```
E-Srambahan/
├── app/              # Halaman dan layout (Next.js App Router)
├── components/       # Komponen UI yang dapat digunakan ulang
├── public/           # Aset statis (gambar, ikon, dll.)
├── types/            # Definisi TypeScript
├── next.config.ts    # Konfigurasi Next.js
├── tsconfig.json     # Konfigurasi TypeScript
└── package.json      # Dependensi dan skrip proyek
```

---

## 📦 Scripts

| Perintah | Fungsi |
|---------|--------|
| `npm run dev` | Menjalankan server development |
| `npm run build` | Membuat build produksi |
| `npm run start` | Menjalankan server produksi |
| `npm run lint` | Menjalankan ESLint |

---

## 🌍 Deployment

Aplikasi ini di-deploy menggunakan **Vercel**. Setiap push ke branch `master` akan otomatis men-trigger deployment baru.

Untuk deploy secara mandiri, kunjungi [vercel.com](https://vercel.com/new) dan import repositori ini.

---

<p align="center">Dibuat <a href="https://github.com/naraya-albani">naraya-albani</a></p>
