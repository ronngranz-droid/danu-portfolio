import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'kelana',
    title: 'Kelana',
    category: 'Gamified Language Platform',
    tagline: 'Belajar bahasa baru kini seru, cepat & gratis!',
    description:
      'Platform belajar bahasa gamified berbasis web untuk menguasai percakapan, kosakata, dan tata bahasa lewat pelajaran ringkas, XP streaks, latihan kilat interaktif, audio pronunciation, dan keyboard virtual Hangul.',
    status: 'Active Development',
    isFlagship: true,
    featuredOrder: 1,
    imageUrl: '/images/projects/kelana.png',
    role: [
      'Product Concept & Fullstack Architecture',
      'UI/UX Design & Gamification Tokens',
      'Frontend Engineering (Next.js 15)',
      'Virtual Hangul Input & Syllable Composer',
      'Audio & Spaced-Repetition System',
    ],
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'Web Audio API',
      'Lucide React',
      'LocalStorage Sync',
    ],
    keyFeatures: [
      'Latihan Kilat & Instant Answer Check dengan XP Rewards (+15 XP)',
      'Streak & Hearts Gamification Engine untuk retensi konsistensi',
      'Voice Recognition & Native Audio Pronunciation',
      'Papan Peringkat Liga (Leaderboard) & Weekly Milestones',
      'Virtual Hangul Keyboard Composer (Jamo-to-Syllable Assembly)',
      'Mistake Notebook (Buku Catatan Kesalahan) untuk latihan terarah',
      'Dukungan Bahasa Internasional & Bahasa Daerah Nusantara',
    ],
    problemSolved: {
      problem:
        'Belajar bahasa mandiri seringkali terasa membosankan dan cepat terhenti karena materi kaku tanpa sistem retensi memori atau motivasi harian yang jelas.',
      solution:
        'Membangun platform pembelajaran gamified interaktif dengan kuis ringkas, streak harian, latihan kilat instan, dan engine keyboard virtual untuk aksara non-Latin.',
    },
    demoUrl: 'https://belajarsamakelana.vercel.app/',
    githubUrl: 'https://github.com/ronngranz-droid/Kelana',
    overview:
      'Kelana dirancang untuk menjembatani kesenjangan antara buku teks bahasa yang kaku dan aplikasi belajar modern. Menggabungkan kurikulum terstruktur dengan mekanisme gamifikasi seperti streak harian, leaderboard liga, dan kalkulasi spaced repetition agar materi yang dipelajari tersimpan kuat di memori jangka panjang.',
    goals: [
      'Menyediakan micro-lessons harian yang interaktif dan bebas distraksi',
      'Menghilangkan friksi input aksara non-Latin melalui keyboard virtual Hangul',
      'Menerapkan Mistake Notebook otomatis untuk mengulang soal yang pernah salah',
      'Melestarikan bahasa daerah Nusantara (Jawa, Sunda) berdampingan dengan bahasa global',
    ],
    challenges: [
      {
        title: 'Komposisi Suku Kata Hangul Dinamis',
        description:
          'Aksara Korea terbentuk dari kombinasi konsonan awal (Choseong), vokal (Jungseong), dan konsonan akhir (Jongseong) dalam satu blok Unicode. Input teks biasa tidak bisa merangkai Jamo secara otomatis.',
        solution:
          'Mengembangkan state machine perakitan Unicode sesuai algoritma Hangul Syllables (U+AC00 - U+D7A3) yang menghitung codepoint secara real-time dari ketukan tombol virtual.',
      },
      {
        title: 'Persistensi Kemajuan Belajar Tanpa Lag',
        description:
          'Siswa sering berpindah tab atau mengalami koneksi tidak stabil saat mengerjakan latihan soal.',
        solution:
          'Merancang layer state lokal reaktif dengan debounced snapshot sync, menjamin streak dan XP tidak hilang.',
      },
    ],
    architecture: {
      frontend: 'Next.js 15 App Router (React 19 Server & Client Components) dengan TypeScript',
      backend: 'Next.js Server Actions & Edge Route Handlers',
      database: 'Relational schema ready (PostgreSQL / Supabase) dengan LocalStorage cache',
      apis: ['Web Audio API untuk playback suara', 'Internationalization (i18n) localization'],
      description:
        'Arsitektur modular memisahkan engine data latihan soal, komponen input interaktif, dan state store progres gamifikasi.',
    },
    learningOutcomes: [
      'Menguasai state machine kompleks client-side dan logika kompilasi Unicode Hangul',
      'Mendesain UI gamifikasi dengan feedback visual dan micro-interaction responsif',
      'Mengimplementasikan prinsip aksesibilitas ARIA pada komponen kuis interaktif',
    ],
    nextImprovements: [
      'Speech recognition scoring untuk evaluasi pelafalan aksen',
      'Fitur komunitas untuk berbagi custom vocabulary flashcards',
      'Dukungan Offline PWA dengan service worker',
    ],
    mockupType: 'kelana',
  },
  {
    slug: 'danatrail',
    title: 'DANATRAIL',
    category: 'Outdoor Marketplace & Rental',
    tagline: 'Siapkan Alat. Temukan Jalurmu.',
    description:
      'Platform rental perlengkapan outdoor dan eksplorasi petualangan dengan katalog lengkap, pengecekan ketersediaan stok, kalkulator durasi sewa, sistem wishlist, dan integrasi chat admin.',
    status: 'Active Development',
    isFlagship: false,
    featuredOrder: 2,
    imageUrl: '/images/projects/danatrail.png',
    role: [
      'Fullstack Development',
      'Perancangan Basis Data Relasional (MySQL 3NF)',
      'Alur Autentikasi JWT & Role Authorization',
      'Logika Collision Tanggal Sewa & Validasi Stok',
    ],
    technologies: [
      'Next.js / React',
      'Node.js REST API',
      'MySQL 8 / phpMyAdmin',
      'Tailwind CSS',
      'JWT Authentication',
    ],
    keyFeatures: [
      'Katalog Perlengkapan Outdoor Terkategori (Tenda, Carrier, Cooking, Climbing)',
      'Kalkulator Harga Sewa & Pemilihan Rentang Tanggal Dinamis',
      'Validasi Bentrok Tanggal Sewa Mencegah Double-Booking',
      'Manajemen Wishlist, Keranjang Sewa, dan Notifikasi Pesanan',
      'Portal Akun Pengguna & Riwayat Penyewaan Aktif (Kuze Portal)',
      'Tombol Integrasi Direct Chat Admin & Panduan Cara Sewa',
    ],
    problemSolved: {
      problem:
        'Penyewaan alat outdoor konvensional masih mengandalkan pencatatan manual/buku catatan, memicu bentrok jadwal sewa tanggal ganda dan lambatnya pengecekan ketersediaan stok.',
      solution:
        'Membangun sistem inventaris relasional terpadu yang memvalidasi ketersediaan unit terhadap tanggal sewa aktif sebelum transaksi disetujui.',
    },
    demoUrl: 'https://danatrail.vercel.app/',
    githubUrl: 'https://github.com/ronngranz-droid/danatrail',
    overview:
      'DANATRAIL dirancang untuk menyelesaikan hambatan operasional toko rental outdoor. Menghubungkan pendaki yang membutuhkan perlengkapan berkualitas dengan pengelola rental yang membutuhkan pencatatan tanggal sewa, jaminan deposit, dan kontrol stok yang akurat.',
    goals: [
      'Membangun validasi reservasi barang yang aman dari bentrok tanggal',
      'Menyajikan katalog perlengkapan mobile-first dengan spesifikasi detail',
      'Memberikan dashboard CRUD yang cepat bagi pengelola toko rental',
    ],
    challenges: [
      {
        title: 'Penanganan Collision Tanggal Sewa',
        description:
          'Banyak pengguna memesan unit tenda yang sama pada rentang hari libur/akhir pekan yang tumpang tindih.',
        solution:
          'Menerapkan query SQL intersection (`start_a <= end_b AND end_a >= start_b`) dalam transaksi ACID sebelum konfirmasi sewa.',
      },
    ],
    architecture: {
      frontend: 'React dengan Tailwind CSS UI system',
      backend: 'Node.js Express / Next.js API layer dengan service pattern',
      database: 'MySQL 8 dengan skema ternormalisasi 3NF (users, products, rentals)',
      apis: ['RESTful JSON API', 'Bearer JWT Auth Middleware'],
      description:
        'Arsitektur 3-tier klasik dengan pemisahan layer presentasi, logika bisnis, dan persistensi data SQL terstruktur.',
    },
    learningOutcomes: [
      'Merancang skema relasional 3NF dengan foreign key cascading constraints',
      'Mengimplementasikan role-based access control (Admin vs Customer)',
      'Menangani kalkulasi rentang waktu temporal pada level database dan backend',
    ],
    nextImprovements: [
      'Integrasi Payment Gateway otomatis (Midtrans / Xendit Sandbox)',
      'Notifikasi WhatsApp otomatis saat mendekati batas akhir pengembalian alat',
      'Modul upload foto inspeksi kondisi barang sebelum dan sesudah disewa',
    ],
    mockupType: 'danatrail',
  },
  {
    slug: 'classhub',
    title: 'ClassHub',
    category: 'Student Productivity & Workspace',
    tagline: 'Class Workspace & Centralized Task Management.',
    description:
      'Workspace produktivitas kelas siswa Rekayasa Perangkat Lunak untuk mengorganisasi tugas harian, deadline mendesak, jadwal mata pelajaran, kalender kelas, jadwal ujian, dan pengumuman KBM terpadu.',
    status: 'Production',
    isFlagship: false,
    featuredOrder: 3,
    imageUrl: '/images/projects/classhub.png',
    role: [
      'Frontend Engineering',
      'Riset Kebutuhan Siswa RPL Kelas XI',
      'Manajemen State & Filtering Tugas',
      'Persistensi Data Lokal & Fitur Pengumuman',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Lucide React',
      'LocalStorage API',
    ],
    keyFeatures: [
      'Dashboard Hari Ini dengan Peringatan Tugas Aktif & Deadline Mendesak',
      'Pengumuman Kelas Resmi dengan Aksi "Tandai Dibaca"',
      'Daftar Tugas & Deadline Berdasarkan Mata Pelajaran',
      'Jadwal Pelajaran & Kalender Kelas Terintegrasi (XI RPL 1 / RPL1-26)',
      'Direktori Jadwal Ujian & Materi Belajar Digital',
      'Feed Aktivitas Kelas & Log Pembaruan Akademik',
    ],
    problemSolved: {
      problem:
        'Tugas sekolah, jadwal mata pelajaran, dan pengumuman kelas yang disebarkan lewat grup pesan instan sering tertimbun obrolan santai, sehingga siswa melewatkan deadline penting.',
      solution:
        'Menyediakan satu workspace dashboard terpusat yang memetakan status tugas hari ini, jadwal mingguan, dan pengumuman kelas yang dapat ditandai selesai/dibaca.',
    },
    demoUrl: 'https://bautask.vercel.app/',
    githubUrl: 'https://github.com/ronngranz-droid/classtask',
    overview:
      'ClassHub (ClassTask) dibangun untuk menjawab kebutuhan nyata di kelas Rekayasa Perangkat Lunak. Memprioritaskan kecepatan loading, tampilan rapi tanpa iklan, dan navigasi sidebar yang intuitif untuk mengakses jadwal, materi, dan tugas harian.',
    goals: [
      'Memberikan visibilitas instan atas tugas yang harus diselesaikan hari ini',
      'Menyediakan arsip jadwal pelajaran dan pengumuman doa/KBM yang rapi',
      'Memastikan aplikasi dapat diakses sangat cepat di perangkat smartphone siswa',
    ],
    challenges: [
      {
        title: 'Akses Cepat Tanpa Bergantung pada Koneksi Lambat',
        description:
          'Koneksi internet di area sekolah terkadang lambat, membuat web app yang lambat sulit dibuka saat jam pergantian pelajaran.',
        solution:
          'Membangun arsitektur offline-first dengan LocalStorage dan state in-memory, menghasilkan respon navigasi sub-milidetik.',
      },
    ],
    architecture: {
      frontend: 'React SPA dengan TypeScript & Tailwind CSS',
      backend: 'Client-side reactive data store',
      database: 'LocalStorage persistence dengan state migration',
      description:
        'Arsitektur client-first yang ringan dan hemat kuota data, dirancang khusus untuk kenyamanan siswa sehari-hari.',
    },
    learningOutcomes: [
      'Mendalami perancangan dashboard produktivitas dan hierarki navigasi sidebar',
      'Mengembangkan sistem penanda status (Tandai Dibaca, Pending, Selesai)',
      'Melakukan usability testing langsung dengan teman sekelas untuk kenyamanan UX',
    ],
    nextImprovements: [
      'Sinkronisasi real-time antar pengurus kelas menggunakan Supabase / WebSocket',
      'Integrasi ekspor tugas ke format PDF atau Google Calendar',
      'Fitur voting pemilihan ketua/agenda kelas',
    ],
    mockupType: 'classhub',
  },
  {
    slug: 'danewai',
    title: 'D4new Ai',
    category: 'AI Chat & Developer Workspace',
    tagline: 'Mulai percakapan cerdas dengan AI multi-modal.',
    description:
      'Workspace AI cerdas untuk tanya jawab, kirim & scan foto, bantuan penulisan naskah, curated prompt templates, bantuan debugging coding logic, dan manajemen riwayat chat multi-sesi.',
    status: 'Prototype',
    isFlagship: false,
    featuredOrder: 4,
    imageUrl: '/images/projects/danewai.png',
    role: [
      'Konsep Produk & Frontend Engineering',
      'Integrasi API Model LLM',
      'Prompt Engineering & Template Shortcuts',
      'Handling Input Multi-modal (Text, Foto, File, Voice)',
    ],
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'LLM API Integration',
      'Streaming Response SSE',
      'PWA Manifest',
    ],
    keyFeatures: [
      'Chat AI Multi-modal dengan Streaming Token Response',
      'Fitur Kirim & Scan Foto untuk analisis gambar dan teks visual',
      'Bantuan Coding Logic, Code Review, dan Debugging Syntax',
      'Quick Prompt Shortcuts (Jelaskan Sesuatu, Bantu Menulis, Scan Foto)',
      'Manajemen Riwayat Chat 30 Hari Terakhir & Multi-Session History',
      'PWA Support (Install D4new Ai ke HP) & Lampiran File (PDF/Excel)',
    ],
    problemSolved: {
      problem:
        'Antarmuka chat AI generik seringkali tidak memiliki shortcut cepat untuk tugas coding, analisis foto, atau template prompt yang terstruktur untuk kebutuhan harian.',
      solution:
        'Menyediakan workspace terfokus dengan kartu shortcut cepat (Jelaskan Sesuatu, Bantu Nulis, Kirim Foto, Bantuan Coding), upload lampiran, dan dukungan instalasi PWA.',
    },
    demoUrl: 'https://danew-ai.vercel.app/',
    githubUrl: 'https://github.com/ronngranz-droid/DanewAI',
    overview:
      'D4new Ai adalah platform eksplorasi AI yang menggabungkan kemampuan percakapan cerdas dengan alat bantu developer dan produktivitas harian. Menawarkan antarmuka clean minimalis dengan akses instan ke berbagai kapabilitas AI generatif.',
    goals: [
      'Menerapkan response streaming Server-Sent Events (SSE) yang halus',
      'Menyediakan shortcut prompt yang mempermudah pemula maupun programmer',
      'Mendukung analisis multi-modal dari teks, gambar, hingga dokumen file',
    ],
    challenges: [
      {
        title: 'Handling Streaming dan Parsing Markdown Kode',
        description:
          'Parsing chunk teks yang masuk secara bertahap dapat menyebabkan rendering syntax highlighter berkedip.',
        solution:
          'Menerapkan buffer streaming inkremental dengan sanitasi AST markdown, memastikan blok kode dan teks tetap rapi.',
      },
    ],
    architecture: {
      frontend: 'Next.js 15 App Router dengan React Server Components',
      backend: 'Next.js API Edge Route proxy untuk streaming inference',
      apis: ['OpenAI / Gemini compatible LLM endpoints', 'Server-Sent Events (SSE)'],
      description:
        'Edge streaming pipeline yang meneruskan prompt dan lampiran ke backend LLM dan mengalirkan chunk langsung ke DOM browser.',
    },
    learningOutcomes: [
      'Menguasai penanganan asynchronous streams dan Server-Sent Events',
      'Memahami prompt engineering dan perancangan UI multi-modal',
      'Mengkonfigurasi Progressive Web App (PWA) untuk instalasi native-like di mobile',
    ],
    nextImprovements: [
      'Penyimpanan percakapan berbasis database cloud tersinkronisasi',
      'Fitur branch conversation (percabangan sesi chat)',
      'Dukungan eksekusi snippet kode langsung di browser (WebAssembly)',
    ],
    mockupType: 'danewai',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.sort((a, b) => a.featuredOrder - b.featuredOrder);
}

