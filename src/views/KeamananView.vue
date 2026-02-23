<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container" style="position:relative;z-index:1;padding-top:140px;padding-bottom:80px">
        <div class="section-label">Keamanan & Teknologi</div>
        <h1 class="section-title" style="font-size:clamp(2rem,4vw,3.2rem);max-width:720px">
          Teknologi Mutakhir untuk<br/>Perlindungan Data Bisnis Anda
        </h1>
        <div class="divider"></div>
        <p class="section-subtitle">
          Dari lapisan enkripsi hingga database transactions, setiap keputusan teknis FIMOSA
          dibuat dengan satu tujuan: keamanan dan keandalan data Anda.
        </p>
      </div>
    </section>

    <!-- Tech Stack Detail -->
    <section class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom:56px">
          <div class="section-label">Tech Stack</div>
          <h2 class="section-title">Fondasi Teknologi FIMOSA</h2>
          <div class="divider divider--center"></div>
        </div>

        <div class="stack-grid">
          <div v-for="tech in techStack" :key="tech.name" class="stack-card">
            <div class="stack-logo">{{ tech.emoji }}</div>
            <div class="stack-info">
              <div class="stack-name">{{ tech.name }}</div>
              <div class="stack-version">{{ tech.version }}</div>
              <div class="stack-desc">{{ tech.desc }}</div>
            </div>
            <div class="stack-tag" :style="{ color: tech.color, background: tech.color + '15' }">{{ tech.tag }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Layers -->
    <section class="section">
      <div class="container">
        <div class="sec-layout">
          <div>
            <div class="section-label">Keamanan Berlapis</div>
            <h2 class="section-title">7 Lapisan<br/>Perlindungan Data</h2>
            <div class="divider"></div>
            <p class="section-subtitle">
              FIMOSA menggunakan arsitektur keamanan berlapis — jika satu lapisan dibobol,
              enam lapisan lainnya tetap melindungi data Anda.
            </p>
          </div>
          <div class="layers-stack">
            <div v-for="(layer, i) in secLayers" :key="layer.name" class="layer-row">
              <div class="layer-num">{{ String(i+1).padStart(2,'0') }}</div>
              <div class="layer-icon">{{ layer.icon }}</div>
              <div>
                <div class="layer-name">{{ layer.name }}</div>
                <div class="layer-desc">{{ layer.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance -->
    <section class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom:48px">
          <div class="section-label">Kepatuhan & Standar</div>
          <h2 class="section-title">Siap untuk Audit & Compliance</h2>
          <div class="divider divider--center"></div>
        </div>
        <div class="compliance-grid">
          <div v-for="c in compliance" :key="c.name" class="compliance-card">
            <div class="compliance-icon">{{ c.icon }}</div>
            <div class="compliance-name">{{ c.name }}</div>
            <div class="compliance-desc">{{ c.desc }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techStack: [
        { emoji: '⚡', name: 'Vue.js 3', version: 'v3.5+', tag: 'Frontend', color: '#42d392', desc: 'Composition API dengan reaktivitas optimal dan bundle size minimal untuk UX yang cepat.' },
        { emoji: '🚀', name: 'Vite', version: 'v7.x', tag: 'Build Tool', color: '#646cff', desc: 'Hot Module Replacement instan, build production terkompresi, target PageSpeed > 90.' },
        { emoji: '🟢', name: 'Node.js', version: 'LTS', tag: 'Backend', color: '#68a063', desc: 'Event-driven non-blocking I/O untuk menangani ribuan request bersamaan tanpa bottleneck.' },
        { emoji: '🐘', name: 'PostgreSQL', version: 'v16+', tag: 'Database', color: '#336791', desc: 'Enterprise RDBMS dengan ACID transactions, JSON support, dan performa query terbaik kelasnya.' },
        { emoji: '🔒', name: 'AES-256', version: 'CBC/GCM', tag: 'Encryption', color: '#ff6b35', desc: 'Standard enkripsi yang digunakan oleh NSA, perbankan global, dan pemerintahan dunia.' },
        { emoji: '🛡️', name: 'SSL/TLS 1.3', version: 'TLS 1.3', tag: 'Transport', color: '#00c896', desc: 'Koneksi terenkripsi end-to-end. Semua data in-transit terlindungi dari eavesdropping.' },
      ],
      secLayers: [
        { icon: '🌐', name: 'HTTPS / TLS 1.3', desc: 'Semua komunikasi terenkripsi antara browser dan server' },
        { icon: '🔑', name: 'OAuth 2.0 + JWT', desc: 'Autentikasi stateless dengan token expiry otomatis' },
        { icon: '👥', name: 'Role-Based Access Control', desc: 'Setiap user hanya bisa akses data sesuai rolenya' },
        { icon: '🔐', name: 'AES-256 Data at Rest', desc: 'Data tersimpan di database dalam kondisi terenkripsi penuh' },
        { icon: '📋', name: 'Audit Trail', desc: 'Setiap aksi pengguna tercatat dengan timestamp & IP' },
        { icon: '☁️', name: 'Cloud Redundancy', desc: 'Data direplikasi ke multiple availability zone' },
        { icon: '🛡️', name: 'WAF & DDoS Protection', desc: 'Web Application Firewall memblokir serangan sebelum masuk' },
      ],
      compliance: [
        { icon: '📊', name: 'PSAK Ready', desc: 'Laporan keuangan mengikuti Standar Akuntansi Keuangan Indonesia' },
        { icon: '🏛️', name: 'DJP / Perpajakan', desc: 'Kalkulasi pajak sesuai regulasi Direktorat Jenderal Pajak' },
        { icon: '🔒', name: 'ISO 27001 Ready', desc: 'Prosedur keamanan informasi sesuai standar internasional' },
        { icon: '🇮🇩', name: 'UU PDP', desc: 'Kepatuhan terhadap Undang-Undang Perlindungan Data Pribadi' },
        { icon: '💼', name: 'BPJS Compliant', desc: 'Perhitungan BPJS Kesehatan & Ketenagakerjaan terintegrasi' },
        { icon: '✅', name: 'Audit-Ready', desc: 'Dokumentasi dan log lengkap untuk keperluan audit eksternal' },
      ]
    }
  }
}
</script>

<style scoped>
.page-hero { position: relative; overflow: hidden; }
.page-hero-bg { position: absolute; inset: 0; background: linear-gradient(180deg, #040c1a, #0A1628); }

.stack-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.stack-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: var(--transition);
}
.stack-card:hover { border-color: var(--border-hover); transform: translateY(-3px); }
.stack-logo { font-size: 2.5rem; }
.stack-name { font-size: 1.05rem; font-weight: 700; color: var(--white); }
.stack-version { font-size: 0.72rem; color: var(--text-muted); margin-top: -8px; }
.stack-desc { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6; flex: 1; }
.stack-tag { font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 999px; width: fit-content; }

.sec-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start; }
.layers-stack { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
.layer-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 18px 24px;
  border-bottom: 1px solid var(--border);
  transition: background var(--transition);
}
.layer-row:last-child { border-bottom: none; }
.layer-row:hover { background: var(--accent-soft); }
.layer-num { font-size: 0.7rem; font-weight: 700; color: var(--electric-blue); min-width: 24px; margin-top: 3px; }
.layer-icon { font-size: 1.2rem; flex-shrink: 0; }
.layer-name { font-size: 0.9rem; font-weight: 600; color: var(--white); margin-bottom: 2px; }
.layer-desc { font-size: 0.8rem; color: var(--text-muted); }

.compliance-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.compliance-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}
.compliance-card:hover { border-color: var(--border-hover); transform: translateY(-3px); }
.compliance-icon { font-size: 2rem; margin-bottom: 12px; }
.compliance-name { font-size: 0.95rem; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.compliance-desc { font-size: 0.8rem; color: var(--text-muted); line-height: 1.6; }

@media (max-width: 1024px) {
  .stack-grid { grid-template-columns: repeat(2, 1fr); }
  .sec-layout { grid-template-columns: 1fr; gap: 40px; }
  .compliance-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .stack-grid { grid-template-columns: 1fr; }
  .compliance-grid { grid-template-columns: 1fr; }
}
</style>
