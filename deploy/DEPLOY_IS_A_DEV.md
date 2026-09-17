# Panduan Lengkap Deploy Portfolio ke Vercel & Registrasi Domain `is-a.dev`

Portfolio personal **Danu Sakti Aditya Permana** (`KUZE3EZ`) siap dideploy ke **Vercel** dan menggunakan custom domain gratis developer **`is-a.dev`**.

---

## 🎯 Status Ketersediaan Domain (Cek per 17 September 2026)
- ✅ **`kuze3ez.is-a.dev`** : **TERSEDIA (AVAILABLE)** (Sangat direkomendasikan, sesuai persona & identity brand!)
- ✅ **`danusakti.is-a.dev`** : **TERSEDIA (AVAILABLE)** (Alternatif nama formal)

---

## 🚀 Langkah 1: Push Source Code ke GitHub

Buka terminal di root project `C:\Users\LENOVO\OneDrive\Documents\Portofolio`, lalu jalankan:

```powershell
# 1. Tambahkan semua file
git add .

# 2. Buat commit
git commit -m "feat: complete masterpiece portfolio architecture"

# 3. Buat repo baru di GitHub akun ronngranz-droid (public)
gh repo create danu-portfolio --public --source=. --remote=origin --push
```

---

## ☁️ Langkah 2: Deploy ke Vercel (Gratis)

1. Buka [https://vercel.com](https://vercel.com) dan login menggunakan akun GitHub Anda (**`ronngranz-droid`**).
2. Klik **Add New...** → **Project**.
3. Cari repository **`danu-portfolio`**, lalu klik **Import**.
4. Biarkan konfigurasi default (Framework Preset: **Next.js**).
5. Klik **Deploy**.
6. Tunggu sekitar 1–2 menit hingga selesai. Anda akan mendapatkan URL bawaan (misal: `danu-portfolio.vercel.app`).

---

## 🌐 Langkah 3: Registrasi Domain di `is-a-dev/register`

Layanan `is-a.dev` gratis untuk developer dengan mengajukan Pull Request (PR) ke repository resmi GitHub mereka.

1. Buka repository resmi: [https://github.com/is-a-dev/register](https://github.com/is-a-dev/register)
2. Klik tombol **Fork** (di pojok kanan atas) untuk membuat salinan repo ke akun GitHub Anda.
3. Di repo hasil fork Anda, masuk ke folder **`domains/`**.
4. Klik **Add file** → **Create new file**.
5. Beri nama file:
   - Jika memilih nama alias: **`domains/kuze3ez.json`**
   - Atau nama lengkap: **`domains/danusakti.json`**
6. Salin isi file JSON berikut (sudah disiapkan di folder `deploy/is-a-dev/`):

```json
{
  "owner": {
    "username": "ronngranz-droid",
    "email": "danusaktiaditya@gmail.com"
  },
  "records": {
    "CNAME": "cname.vercel-dns.com"
  }
}
```

7. Klik tombol hijau **Commit changes...**
8. Klik tab **Pull requests** di repo fork Anda, lalu klik **New pull request** → **Create pull request**.
9. Beri judul PR: `Register kuze3ez.is-a.dev` (atau `Register danusakti.is-a.dev`).
10. Bot `is-a.dev` akan memvalidasi format JSON dalam 1–2 menit. Setelah lolos, maintainer akan me-merge PR Anda.

---

## 🔗 Langkah 4: Hubungkan Domain di Dashboard Vercel

Setelah PR di-merge (atau bisa dipasang terlebih dahulu):
1. Masuk ke dashboard project Anda di Vercel: `danu-portfolio`.
2. Klik tab **Settings** → menu **Domains** di sebelah kiri.
3. Di kolom input domain, masukkan: **`kuze3ez.is-a.dev`** (atau `danusakti.is-a.dev`), lalu klik **Add**.
4. Vercel akan otomatis memverifikasi CNAME `cname.vercel-dns.com` dan menerbitkan sertifikat HTTPS/SSL gratis.
5. Selamat! Portfolio Anda kini resmi live di **`https://kuze3ez.is-a.dev`**!
