# 🚀 Modern Dark Mode Software Engineer Portfolio

Halaman web portofolio profesional untuk **Software Engineer** dengan estetika modern bertema **Dark Mode**, efek *glassmorphism*, tipografi *Plus Jakarta Sans* & *JetBrains Mono*, serta interaktivitas penuh.

---

## 🌟 Fitur & Bagian Halaman

1. **Header & Sticky Navigation**:
   - Logo developer dengan ikon kode `</>`.
   - Indikator ketersediaan real-time (*"Tersedia untuk Pekerjaan / Proyek"* dengan radar pulse hijau).
   - Navigasi responsif dengan *Active Scroll Spy* & *Mobile Hamburger Menu*.

2. **Hero Section**:
   - Sapaan & perkenalan peran (*Software Engineer & Systems Builder*).
   - Deskripsi ringkas mengenai keahlian dalam rekayasa perangkat lunak.
   - Tombol Call-to-Action (CTA): **View Projects**, **Contact Me**, dan **Unduh Resume**.
   - *Interactive Code Terminal Card* bergaya macOS dengan manifest Python syntax highlighting dan metric badges mengambang (*Clean Architecture*, *High Performance*).

3. **About Me Section**:
   - Narasi latar belakang teknis di bidang Information Technology & Rekayasa Perangkat Lunak.
   - 3 Pilar Kompetensi: Mobile Engineering, Backend & REST APIs, serta DevOps & Automation.
   - Metrik statistik capaian proyek dan fokus keandalan (*99.9% Reliability*).

4. **Skills Section**:
   - Kartu keahlian dengan logo resmi (Devicon & FontAwesome) dan efek hover glowing:
     - 🐍 **Python** (Data processing, automation script, backend)
     - 🍶 **Flask** (Microservices & RESTful API)
     - ☕ **Java / Android Studio** (Native Android development, Room DB, MVVM)
     - 💙 **Flutter** (Cross-platform mobile apps, BLoC pattern, Dart)
     - 🔴 **Laravel** (MVC architecture, Eloquent ORM, Sanctum Auth)
     - 🐳 **Docker** (Containerization, Compose, consistent environments)
     - 🐧 **Linux** (VPS Server Administration, Bash scripting, SSH)
     - ⚡ **n8n Workflow Automation** (Webhooks, Bot Telegram, database sync)
   - Banner alat pendukung: Streamlit, Git/GitHub, MySQL, SQLite, RESTful API.

5. **Projects Showcase**:
   - Filter dinamis berdasarkan kategori: *Semua Proyek*, *Mobile Apps*, *Backend & Web*, dan *Automation & Data*.
   - Proyek unggulan:
     - 📱 **Aplikasi Android NutriFit** (Java, Android Studio, SQLite/Room, Material 3, MPAndroidChart)
     - 🎧 **Audio Therapy App** (Flutter, Dart, Clean Architecture, just_audio, Hive DB)
     - 📝 **Todo List (Flutter & Laravel)** (Flutter, Laravel 11, MySQL, Sanctum Auth, REST API)
     - 📊 **Web Streamlit & Flask** (Python, Flask, Streamlit, Pandas, Scikit-Learn)
     - 🤖 **Workflow Automation n8n** (n8n, Docker, Linux Server, Python, Webhooks, Telegram Bot)
   - Setiap kartu proyek dilengkapi:
     - Badge platform & kategori
     - Deskripsi fitur dan checklist arsitektur
     - Tag teknologi (*tech stack tags*)
     - Tombol **Detail Proyek** (membuka Modal interaktif dengan spesifikasi lengkap) & link repository GitHub.

6. **Contact Section & Social Media**:
   - Informasi kontak langsung dengan tombol **Salin Email ke Clipboard** sekali klik (*one-click copy*).
   - Link akun media sosial (GitHub, LinkedIn, WhatsApp, Telegram).
   - Formulir kontak interaktif dengan validasi form, efek loading pada tombol kirim, dan *toast notification*.

7. **Footer & Navigasi Cepat**:
   - Hak cipta dinamis, ringkasan arsitektur, dan tombol floating **Back to Top**.

---

## 📂 Struktur File

```text
profil/
├── index.html        # Struktur semantik HTML5, Tailwind CSS & Devicons
├── style.css         # Styling kustom (glassmorphism, ambient blob glow, custom scrollbars)
├── script.js         # Logika interaktif (filter proyek, modal detail, copy email, submit form)
└── README.md         # Panduan penggunaan & penyesuaian
```

---

## 💻 Cara Menjalankan & Pratinjau Lokal

Anda dapat membuka file `index.html` langsung di browser favorit Anda, atau menjalankan server lokal sederhana:

### Menggunakan Python (Sudah Terinstal):
Jalankan perintah berikut di terminal:
```bash
python -m http.server 3000
```
Buka browser di alamat: [http://localhost:3000](http://localhost:3000)

### Menggunakan Node.js (npx serve):
```bash
npx serve .
```

---

## 🎨 Cara Kustomisasi

1. **Nama & Biodata**:
   Buka [index.html](file:///c:/antigravity-project/profil/index.html) dan cari teks `Software Engineer` atau `Halo Dunia!` untuk mengganti nama Anda.
2. **Email & Nomor Kontak**:
   Buka [index.html](file:///c:/antigravity-project/profil/index.html) dan cari `engineer.portfolio@example.com` untuk mengganti dengan alamat email asli Anda. Update juga fungsi `copyEmail()` di [script.js](file:///c:/antigravity-project/profil/script.js).
3. **Link Media Sosial & GitHub**:
   Perbarui atribut `href` pada bagian kontak dan hero untuk mengarah ke profil GitHub dan LinkedIn Anda.
4. **Data Proyek**:
   Buka objek `projectData` di [script.js](file:///c:/antigravity-project/profil/script.js) untuk menambahkan gambar screenshot atau deskripsi spesifik proyek Anda.
