<script setup>
import { ref } from 'vue'

const openCareer = ref(null)
function toggleCareer(i) {
  openCareer.value = openCareer.value === i ? null : i
}

const careers = [
  { role: 'Full-Stack Developer (Vue + Node)', type: 'Full-time · Remote', dept: 'Engineering' },
  { role: 'Business Analyst – ERP Implementation', type: 'Full-time · Hybrid Jakarta', dept: 'Consulting' },
  { role: 'UI/UX Designer (B2B SaaS)', type: 'Full-time · Remote', dept: 'Design' },
  { role: 'Account Executive – Enterprise', type: 'Full-time · Jakarta', dept: 'Sales' },
]

const services = [
  {
    icon: '🚀',
    title: 'Implementasi & Onboarding',
    desc: 'Tim konsultan kami memandu proses implementasi dari awal hingga go-live. Termasuk konfigurasi, migrasi data, dan pelatihan pengguna.',
    color: '#1E6FD9',
  },
  {
    icon: '🔧',
    title: 'Kustomisasi & Integrasi',
    desc: 'Setiap bisnis unik. Kami menyesuaikan FIMOSA sesuai proses bisnis Anda dan mengintegrasikannya dengan sistem yang sudah ada.',
    color: '#00A3FF',
  },
  {
    icon: '📚',
    title: 'Pelatihan & Sertifikasi',
    desc: 'Program pelatihan terstruktur untuk tim Anda — dari pengguna akhir hingga administrator sistem. Tersedia online dan onsite.',
    color: '#00C896',
  },
  {
    icon: '🛡️',
    title: 'Dukungan & Pemeliharaan',
    desc: 'Dukungan teknis 24/7 untuk paket Enterprise. Tim kami siap memastikan sistem Anda berjalan tanpa gangguan.',
    color: '#FF6B35',
  },
]
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="tentang-hero section">
      <div class="container">
        <div class="hero-inner">
          <div class="hero-text">
            <div class="section-label">Tentang FIMOSA</div>
            <h1 class="hero-heading">Sistem Saraf Pusat<br/>Perusahaan Modern</h1>
            <div class="divider"></div>
            <p class="hero-sub">
              FIMOSA dibangun untuk satu tujuan: menjadi pondasi digital yang tak tergoyahkan
              bagi bisnis Indonesia. Bukan sekadar software akuntansi — melainkan
              platform operasional yang menghubungkan setiap aspek bisnis Anda dalam satu ekosistem cerdas.
            </p>
          </div>
          <div class="hero-stats">
            <div class="stat-card reveal">
              <div class="stat-num">500<span>+</span></div>
              <div class="stat-label">Perusahaan Aktif</div>
            </div>
            <div class="stat-card reveal">
              <div class="stat-num">99.9<span>%</span></div>
              <div class="stat-label">Uptime SLA</div>
            </div>
            <div class="stat-card reveal">
              <div class="stat-num">15<span>+</span></div>
              <div class="stat-label">Industri Terlayani</div>
            </div>
            <div class="stat-card reveal">
              <div class="stat-num">7<span> Thn</span></div>
              <div class="stat-label">Pengalaman Industri</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section section--alt">
      <div class="container">
        <div class="about-grid">
          <div class="about-content reveal">
            <div class="section-label">Misi Kami</div>
            <h2 class="section-title">Mengakselerasi Pertumbuhan<br/>Bisnis Indonesia</h2>
            <div class="divider"></div>
            <p class="about-text">
              Didirikan oleh para praktisi industri yang memahami kompleksitas bisnis di Indonesia,
              FIMOSA hadir sebagai jawaban atas kebutuhan ERP yang benar-benar lokal —
              patuh regulasi, adaptif terhadap kondisi pasar, dan dapat diandalkan sepenuhnya.
            </p>
            <p class="about-text">
              Kami percaya bahwa setiap perusahaan Indonesia, dari UMKM hingga korporasi besar,
              berhak mendapatkan infrastruktur digital kelas dunia dengan harga yang terjangkau.
            </p>
          </div>
          <div class="about-values reveal">
            <div class="value-item" v-for="v in [
              { icon: '🏆', label: 'Keandalan', desc: 'Sistem yang tidak pernah mengecewakan saat bisnis membutuhkannya paling kritis.' },
              { icon: '🔒', label: 'Keamanan Data', desc: 'Enkripsi end-to-end, server lokal Indonesia, dan audit trail yang komprehensif.' },
              { icon: '🌱', label: 'Skalabilitas', desc: 'Bertumbuh bersama bisnis Anda — dari 5 user hingga 5.000 user tanpa hambatan.' },
            ]" :key="v.label">
              <div class="value-icon">{{ v.icon }}</div>
              <div>
                <div class="value-label">{{ v.label }}</div>
                <div class="value-desc">{{ v.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- KEAMANAN & COMPLIANCE (dipindahkan dari Home) -->
    <section class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom: 56px;">
          <div class="section-label">Keamanan & Kepatuhan</div>
          <h2 class="section-title">Built-in Security.<br/>Bukan Tambahan.</h2>
          <div class="divider divider--center"></div>
          <p class="section-subtitle">
            Keamanan bukan fitur opsional di FIMOSA. Ini adalah pondasi dari setiap baris kode yang kami tulis.
          </p>
        </div>
        <div class="security-grid reveal">
          <div class="security-item" v-for="s in [
            { icon: '🔐', label: 'Enkripsi AES-256', desc: 'Semua data sensitif dienkripsi dengan standar militer sebelum disimpan.' },
            { icon: '📋', label: 'Patuh PSAK & DJP', desc: 'Seluruh proses keuangan mengikuti standar akuntansi dan perpajakan Indonesia.' },
            { icon: '🏦', label: 'Server Lokal Indonesia', desc: 'Data Anda tidak pernah keluar dari wilayah hukum Indonesia.' },
            { icon: '📊', label: 'Audit Trail Lengkap', desc: 'Setiap perubahan data tercatat otomatis — siap untuk keperluan audit kapan saja.' },
            { icon: '⏱️', label: '99.9% Uptime SLA', desc: 'Infrastruktur redundant yang menjamin operasional bisnis tanpa gangguan.' },
            { icon: '🔄', label: 'Backup Otomatis', desc: 'Backup harian dengan pemulihan data dalam hitungan menit.' },
          ]" :key="s.label">
            <div class="security-icon">{{ s.icon }}</div>
            <div class="security-label">{{ s.label }}</div>
            <div class="security-desc">{{ s.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- LAYANAN -->
    <section id="layanan" class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom: 56px;">
          <div class="section-label">Layanan Kami</div>
          <h2 class="section-title">Lebih dari Sekadar Software</h2>
          <div class="divider divider--center"></div>
        </div>
        <div class="services-grid">
          <div
            v-for="svc in services"
            :key="svc.title"
            class="service-card reveal"
            :style="{ '--svc-color': svc.color }"
          >
            <div class="service-icon">{{ svc.icon }}</div>
            <h3 class="service-title">{{ svc.title }}</h3>
            <p class="service-desc">{{ svc.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- KARIR -->
    <section id="karir" class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom: 56px;">
          <div class="section-label">Bergabung dengan Kami</div>
          <h2 class="section-title">Karir di FIMOSA</h2>
          <div class="divider divider--center"></div>
          <p class="section-subtitle">
            Kami sedang membangun tim terbaik untuk mengubah cara bisnis Indonesia bekerja.
            Apakah kamu ingin menjadi bagian dari perjalanan ini?
          </p>
        </div>
        <div class="career-list">
          <div
            v-for="(job, i) in careers"
            :key="i"
            class="career-item reveal"
          >
            <div class="career-main">
              <div>
                <div class="career-role">{{ job.role }}</div>
                <div class="career-meta">{{ job.type }} · {{ job.dept }}</div>
              </div>
              <a href="/kontak" class="btn career-apply">Lamar Sekarang</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--alt">
      <div class="container text-center">
        <h2 class="section-title reveal" style="max-width: 560px; margin: 0 auto 24px;">
          Siap Menjadikan FIMOSA<br/>Tulang Punggung Bisnis Anda?
        </h2>
        <a href="/kontak" class="btn btn-primary btn-lg reveal">Jadwalkan Konsultasi</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tentang-hero {
  padding-top: 140px;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.hero-heading {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: var(--heading-color);
  line-height: 1.15;
  margin-bottom: 20px;
}
.hero-sub {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 520px;
}
.hero-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.stat-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}
.stat-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}
.stat-num {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--accent), #00C896);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 8px;
}
.stat-num span {
  font-size: 1.5rem;
}
.stat-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* ABOUT */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}
.about-text {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 16px;
}
.about-values {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.value-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md, 12px);
}
.value-icon { font-size: 1.5rem; flex-shrink: 0; }
.value-label {
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 4px;
}
.value-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* SECURITY */
.security-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.security-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}
.security-item:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}
.security-icon { font-size: 2rem; margin-bottom: 12px; }
.security-label {
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 8px;
}
.security-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* SERVICES */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition);
}
.service-card:hover {
  border-color: var(--svc-color, var(--accent));
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.2);
}
.service-icon { font-size: 2rem; margin-bottom: 16px; }
.service-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 12px;
}
.service-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* CAREER */
.career-list {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.career-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md, 12px);
  padding: 20px 24px;
  transition: var(--transition);
}
.career-item:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}
.career-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.career-role {
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 4px;
}
.career-meta {
  font-size: 0.8rem;
  color: var(--text-secondary);
}
.career-apply {
  padding: 10px 20px;
  border: 1.5px solid var(--accent);
  color: var(--accent);
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.875rem;
  transition: var(--transition);
  white-space: nowrap;
  background: transparent;
}
.career-apply:hover {
  background: var(--accent);
  color: #fff;
}

.btn-lg { padding: 16px 40px; font-size: 1rem; }

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; gap: 40px; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .security-grid { grid-template-columns: repeat(2, 1fr); }
  .services-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .hero-stats { grid-template-columns: 1fr 1fr; }
  .security-grid { grid-template-columns: 1fr; }
}
</style>
