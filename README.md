# Retto UPVC Jakarta

Website perusahaan modern untuk distributor material uPVC pintu & jendela di Jakarta dengan Next.js 14 dan Tailwind CSS. Proyek ini menampilkan profil perusahaan, katalog produk, portofolio proyek, serta formulir kontak dengan integrasi EmailJS dan reCAPTCHA.

## ✨ Fitur Utama
- Desain modern sesuai identitas brand dengan tipografi Poppins dan warna merah sebagai aksen utama.
- Animasi halus menggunakan Framer Motion dan AOS (Animate On Scroll).
- Navigasi multi-halaman (Home, About, Products, Projects, Contact) dengan konten SEO-friendly.
- Produk dengan tab interaktif, galeri proyek dengan filter kategori, dan testimoni pelanggan.
- Formulir kontak yang mengirimkan data ke EmailJS dan dukungan verifikasi Google reCAPTCHA.
- Optimisasi SEO: metadata lengkap, sitemap, robots, dan struktur URL bersih.
- Responsif penuh untuk perangkat desktop, tablet, dan mobile.

## 🧰 Teknologi
- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [AOS](https://michalsnik.github.io/aos/)
- [EmailJS](https://www.emailjs.com/)
- [Google reCAPTCHA v2](https://www.google.com/recaptcha/about/)

## 🚀 Memulai Pengembangan

```bash
npm install
npm run dev
```

Aplikasi akan berjalan pada `http://localhost:3000`.

## 🔧 Variabel Lingkungan
Buat file `.env.local` dan isikan dengan kredensial berikut sebelum menjalankan secara penuh:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX           # Opsional, Google Analytics
NEXT_PUBLIC_RECAPTCHA_KEY=your_site_key  # reCAPTCHA v2
RECAPTCHA_SECRET_KEY=your_secret_key     # reCAPTCHA secret
EMAILJS_SERVICE_ID=service_xxxxx         # EmailJS Service ID
EMAILJS_TEMPLATE_ID=template_xxxxx       # EmailJS Template ID
EMAILJS_API_KEY=public_xxxxx             # EmailJS Public API key
```

Jika variabel EmailJS tidak tersedia, formulir tetap akan merespons sukses tanpa mengirim email (untuk mempermudah pengembangan).

## 🧪 Perintah Tambahan
- `npm run build` – Build production.
- `npm run start` – Jalankan server production lokal.
- `npm run lint` – Jalankan linting dengan ESLint.

## 📁 Struktur Folder Singkat
```
app/
  ├─ (halaman Next.js, metadata, API route)
components/
  ├─ Header, Footer, ScrollToTop, Analytics, AOSInit
public/images/
  ├─ Ilustrasi SVG untuk hero, produk, tim, dan proyek
```

## 📄 Lisensi
Proyek ini dibuat untuk kebutuhan presentasi Retto UPVC Jakarta. Gunakan konten dan aset sesuai kebutuhan internal perusahaan.
