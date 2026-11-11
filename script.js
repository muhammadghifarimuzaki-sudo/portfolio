/**
 * Software Engineer Portfolio - Modern Dark Mode
 * JavaScript Interactivity & Handlers
 */

// Project Data Store for Rich Modal
const projectData = {
  nutrifit: {
    title: 'Aplikasi Android NutriFit',
    category: 'Mobile Application (Native Android)',
    description: 'NutriFit adalah aplikasi pemantau gizi dan kesehatan holistik yang dirancang untuk pengguna yang ingin mencapai target berat badan ideal secara teratur dan terukur. Mengutamakan kenyamanan pengguna, aplikasi ini bekerja 100% offline dengan sinkronisasi basis data lokal yang sangat cepat.',
    features: [
      'Kalkulator Kebutuhan Kalori Harian (BMR & TDEE) berdasarkan profil fisiologis dan intensitas aktivitas fisik.',
      'Logging Makanan & Makronutrisi (Karbohidrat, Protein, Lemak) dengan pencarian makanan lokal yang cepat.',
      'Visualisasi Tren Mingguan & Bulanan dengan MPAndroidChart interaktif yang responsif.',
      'Arsitektur MVVM (Model-View-ViewModel) terstruktur dengan Room Database, LiveData, dan ViewModel lifecycle-aware.',
      'Desain antarmuka mematuhi Material Design 3 dengan dukungan Dark Theme otomatis.'
    ],
    tech: ['Java', 'Android Studio', 'Room SQLite', 'MVVM', 'MPAndroidChart', 'Material 3'],
    github: 'https://github.com'
  },
  audiotherapy: {
    title: 'Audio Therapy & Meditation App',
    category: 'Mobile Application (Flutter & Dart)',
    description: 'Aplikasi kesehatan mental dan relaksasi yang menghadirkan pengalaman audio imersif. Aplikasi ini dirancang untuk penderita insomnia, gangguan kecemasan ringan, serta pekerja yang membutuhkan fokus tinggi melalui frekuensi binaural beats dan suara alam ambient.',
    features: [
      'Multi-Channel Audio Mixer: Memungkinkan pengguna memutar beberapa instrumen suara sekaligus (contoh: hujan lebat + petir lembut + frekuensi Alpha 10Hz) dengan slider volume mandiri.',
      'Background Audio Service: Audio tetap berjalan tanpa henti saat layar mati atau saat membuka aplikasi lain menggunakan just_audio background execution.',
      'Pengatur Waktu Tidur (Smart Sleep Timer): Suara memudar secara bertahap (fade-out) ketika timer berakhir agar tidak mengagetkan pengguna yang tertidur.',
      'Penyimpanan Preset Favorit offline menggunakan NoSQL Hive Database berkecepatan tinggi.',
      'State Management rapi dengan BLoC pattern dan Clean Architecture (Data, Domain, Presentation layers).'
    ],
    tech: ['Flutter', 'Dart', 'BLoC Pattern', 'just_audio', 'Hive NoSQL', 'Clean Architecture'],
    github: 'https://github.com'
  },
  todolist: {
    title: 'Todo List (Flutter & Laravel 11)',
    category: 'Full-Stack Mobile & Web API',
    description: 'Sistem manajemen tugas dan produktivitas terintegrasi lintas platform. Menggabungkan backend API Laravel 11 dengan arsitektur RESTful yang kokoh dan aplikasi klien Flutter yang gesit dengan kemampuan sinkronisasi offline-first.',
    features: [
      'Autentikasi Aman Berbasis Token: Implementasi Laravel Sanctum untuk otentikasi stateless yang aman dan efisien.',
      'Offline-First Capability: Tugas tetap dapat dibuat dan diubah tanpa koneksi internet, lalu disinkronkan otomatis ke server saat online.',
      'Kategori Berwarna, Sub-tugas (Checklist), serta Filter Prioritas (Tinggi, Sedang, Rendah).',
      'Pengingat Tenggat Waktu (Due Date Reminders) dan notifikasi push terjadwal.',
      'REST API terdokumentasi rapi dengan Resource Controllers, Form Requests validation, dan Eloquent ORM.'
    ],
    tech: ['Flutter', 'Dart', 'Laravel 11', 'PHP 8.2', 'MySQL', 'Laravel Sanctum', 'RESTful API'],
    github: 'https://github.com'
  },
  analytics: {
    title: 'Web Streamlit & Flask Data Analytics',
    category: 'Data Science & Web Microservices',
    description: 'Solusi analitik data dan penyebaran model Machine Learning interaktif. Platform ini memudahkan analis dan manajer bisnis mengeksplorasi data, melihat metrik kinerja secara visual, serta memicu prediksi berbasis AI melalui REST endpoint berlatensi rendah.',
    features: [
      'Dashboard Visualisasi Interaktif menggunakan Streamlit dan grafik interaktif Plotly dengan filter dinamis.',
      'REST API Inference Terpisah yang dibangun dengan Flask untuk melayani inferensi model prediktif (Scikit-Learn/XGBoost).',
      'Fitur Pembersihan Data Otomatis & Ekstraksi Fitur (Feature Engineering) dengan Pandas & NumPy.',
      'Kemampuan Export Laporan Otomatis dalam format PDF ringkasan dan CSV dataset tersaring.',
      'Modular dan mudah dikonfigurasi melalui environment variables dan container Docker.'
    ],
    tech: ['Python 3', 'Flask', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-Learn', 'Plotly'],
    github: 'https://github.com'
  },
  automation: {
    title: 'Workflow Automation System dengan n8n',
    category: 'DevOps & Enterprise Automation',
    description: 'Infrastruktur otomatisasi alur kerja tanpa batas yang di-host mandiri (self-hosted) di atas VPS Linux menggunakan Docker Compose. Mengotomasi proses-proses rutin bisnis, sinkronisasi antar platform, monitoring server, dan pengiriman notifikasi instan.',
    features: [
      'Self-Hosted n8n Instance yang aman dengan reverse proxy Nginx, SSL Let\'s Encrypt, dan volume Docker persisten.',
      'Integrasi Webhook multi-arah untuk menerima payload data formulir leads dan menyimpannya langsung ke database internal.',
      'Automated Incident Alerting: Bot Telegram otomatis yang memberi peringatan jika ada penggunaan CPU/RAM abnormal atau API downtime.',
      'Sinkronisasi Data Otomatis berkala (Cron Trigger) untuk backup database harian dan pelaporan status ke email.',
      'Custom Python Script Nodes untuk transformasi data JSON rumit sebelum diteruskan ke tujuan berikutnya.'
    ],
    tech: ['n8n', 'Docker & Compose', 'Linux VPS', 'Python', 'Webhooks', 'Telegram Bot API', 'Nginx'],
    github: 'https://github.com'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Navbar Background Blur on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('glass-panel', 'shadow-lg', 'border-b', 'border-slate-800');
    } else {
      navbar.classList.remove('glass-panel', 'shadow-lg', 'border-b', 'border-slate-800');
    }
  });

  // 3. Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.remove('fa-bars-staggered');
        menuIcon.classList.add('fa-xmark');
      } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars-staggered');
      }
    });

    // Close menu when clicking any mobile link
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars-staggered');
      });
    });
  }

  // 4. Smooth Active Nav Link Spy on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-cyan-400', 'bg-slate-800/80');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400', 'bg-slate-800/80');
      }
    });
  });

  // 5. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 6. Project Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active tab styling
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 7. Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        showToast('Mohon lengkapi semua kolom wajib!', 'error');
        return;
      }

      // Simulate loading state
      btnText.textContent = 'Mengirim Pesan...';
      btnIcon.className = 'fa-solid fa-spinner fa-spin';
      submitBtn.disabled = true;

      setTimeout(() => {
        btnText.textContent = 'Pesan Terkirim!';
        btnIcon.className = 'fa-solid fa-circle-check';

        showToast(`Terima kasih ${name}, pesan Anda berhasil dikirim!`, 'success');
        contactForm.reset();

        setTimeout(() => {
          btnText.textContent = 'Kirim Pesan Sekarang';
          btnIcon.className = 'fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform';
          submitBtn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }

  // 8. Close Modal when clicking outside the content
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeProjectModal();
      }
    });
  }
});

// Toast notification helper
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast || !toastMsg || !toastIcon) return;

  toastMsg.textContent = message;

  if (type === 'error') {
    toastIcon.className = 'text-rose-400';
    toastIcon.innerHTML = '<i class="fa-solid fa-circle-exclamation text-base"></i>';
    toast.style.borderColor = 'rgba(244, 63, 94, 0.4)';
  } else {
    toastIcon.className = 'text-emerald-400';
    toastIcon.innerHTML = '<i class="fa-solid fa-circle-check text-base"></i>';
    toast.style.borderColor = 'rgba(16, 185, 129, 0.4)';
  }

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Copy Email Function
function copyEmail() {
  const email = 'engineer.portfolio@example.com';
  navigator.clipboard.writeText(email).then(() => {
    const copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
      const originalHTML = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check text-emerald-400"></i> <span class="hidden sm:inline text-emerald-400">Tersalin!</span>';
      copyBtn.classList.add('bg-emerald-500/20');

      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.classList.remove('bg-emerald-500/20');
      }, 2500);
    }
    showToast('Alamat email berhasil disalin ke clipboard!', 'success');
  }).catch(() => {
    showToast('Gagal menyalin email. Silakan salin manual.', 'error');
  });
}

// Open Project Detail Modal
function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalFeatures = document.getElementById('modal-features');
  const modalTech = document.getElementById('modal-tech');
  const modalGithub = document.getElementById('modal-github');

  modalCategory.textContent = data.category;
  modalTitle.textContent = data.title;
  modalDesc.textContent = data.description;

  // Render Features list
  modalFeatures.innerHTML = '';
  data.features.forEach(feature => {
    const li = document.createElement('li');
    li.className = 'flex items-start gap-2.5';
    li.innerHTML = `<i class="fa-solid fa-check text-emerald-400 text-xs mt-1 shrink-0"></i><span>${feature}</span>`;
    modalFeatures.appendChild(li);
  });

  // Render Tech Badges
  modalTech.innerHTML = '';
  data.tech.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'tech-tag';
    span.textContent = tech;
    modalTech.appendChild(span);
  });

  if (modalGithub) {
    modalGithub.href = data.github || '#';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
}

// Close Project Detail Modal
function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Download Resume / CV Handler
function downloadCV(event) {
  if (event) event.preventDefault();

  // Create a structured downloadable CV manifest file
  const resumeContent = `=====================================================
CURRICULUM VITAE - SOFTWARE ENGINEER
=====================================================
Peran: Software Engineer & Full-Stack / Mobile Specialist
Fokus: Clean Architecture, High Performance, Scalability & Automation

KEAHLIAN TEKNIS (CORE TECH STACKS):
-----------------------------------------------------
- Mobile Development: Java (Android Studio), Flutter & Dart
- Backend & Frameworks: Python, Flask, Laravel 11, RESTful APIs
- Cloud & Infrastructure: Docker, Docker Compose, Linux Server (Ubuntu/Debian)
- Automation & Data: n8n Workflow Automation, Streamlit, Pandas, Webhooks
- Database & Tools: MySQL, SQLite/Room DB, Git/GitHub Flow, Postman

PROYEK UNGGULAN:
-----------------------------------------------------
1. Aplikasi Android NutriFit (Java, Android Studio, Room DB, Material 3)
   - Pelacak nutrisi, kalkulator kalori cerdas, grafik asupan makanan offline.
2. Audio Therapy App (Flutter, Dart, Clean Architecture, BLoC, just_audio)
   - Aplikasi relaksasi & meditasi, multi-channel sound mixer, background player.
3. Todo List & Task Manager (Flutter + Laravel 11 + Sanctum Token Auth + MySQL)
   - Sinkronisasi data multi-device, offline-first caching, push reminder.
4. Data Analytics & ML Web App (Python, Streamlit, Flask, Scikit-Learn, Pandas)
   - Dashboard eksplorasi data interaktif dan API inferensi machine learning real-time.
5. Enterprise Workflow Automation (n8n, Docker, Linux, Webhooks, Telegram Bot)
   - Otomatisasi sinkronisasi data antar platform, alerting insiden server 24/7.

KONTAK & MEDIA SOSIAL:
-----------------------------------------------------
Email: engineer.portfolio@example.com
GitHub: https://github.com
LinkedIn: https://linkedin.com
Status: Open for Full-Time / Contract / High-Impact Projects
=====================================================`;

  const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Software_Engineer_CV_Resume.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Resume berhasil diunduh!', 'success');
}
