<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container" style="position:relative;z-index:1;padding-top:140px;padding-bottom:80px">
        <div class="section-label">Keamanan &amp; Teknologi</div>
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
          <div class="section-label">Kepatuhan &amp; Standar</div>
          <h2 class="section-title">Siap untuk Audit &amp; Compliance</h2>
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
      secLayers: [
        { icon: '🌐', name: 'Koneksi Terenkripsi', desc: 'Semua komunikasi terenkripsi antara browser dan server' },
        { icon: '🔑', name: 'Autentikasi Multi-Faktor', desc: 'Autentikasi stateless dengan token expiry otomatis' },
        { icon: '👥', name: 'Role-Based Access Control', desc: 'Setiap user hanya bisa akses data sesuai rolenya' },
        { icon: '🔐', name: 'Enkripsi Data Tersimpan', desc: 'Data tersimpan di database dalam kondisi terenkripsi penuh' },
        { icon: '📋', name: 'Audit Trail', desc: 'Setiap aksi pengguna tercatat dengan timestamp &amp; IP' },
        { icon: '☁️', name: 'Cloud Redundancy', desc: 'Data direplikasi ke multiple availability zone' },
        { icon: '🛡️', name: 'WAF &amp; DDoS Protection', desc: 'Web Application Firewall memblokir serangan sebelum masuk' },
      ],
      compliance: [
        { icon: '📊', name: 'PSAK Ready', desc: 'Laporan keuangan mengikuti Standar Akuntansi Keuangan Indonesia' },
        { icon: '🏛️', name: 'DJP / Perpajakan', desc: 'Kalkulasi pajak sesuai regulasi Direktorat Jenderal Pajak' },
        { icon: '🔒', name: 'ISO 27001 Ready', desc: 'Prosedur keamanan informasi sesuai standar internasional' },
        { icon: '🇮🇩', name: 'UU PDP', desc: 'Kepatuhan terhadap Undang-Undang Perlindungan Data Pribadi' },
        { icon: '💼', name: 'BPJS Compliant', desc: 'Perhitungan BPJS Kesehatan &amp; Ketenagakerjaan terintegrasi' },
        { icon: '✅', name: 'Audit-Ready', desc: 'Dokumentasi dan log lengkap untuk keperluan audit eksternal' },
      ]
    }
  }
}
</script>

<style scoped>
.page-hero { position: relative; overflow: hidden; }
.page-hero-bg { position: absolute; inset: 0; background: linear-gradient(180deg, #040c1a, #0A1628); }

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
:global([data-theme="light"]) .layer-row:hover { background: rgba(1,75,170,0.08); }
.layer-num { font-size: 0.7rem; font-weight: 700; color: var(--electric-blue); min-width: 24px; margin-top: 3px; }
.layer-icon { font-size: 1.2rem; flex-shrink: 0; }
.layer-name { font-size: 0.9rem; font-weight: 600; color: var(--heading-color); margin-bottom: 2px; }
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
:global([data-theme="light"]) .compliance-card {
  background: rgba(255,255,255,0.12);
  border-color: rgba(248,243,240,0.22);
}
:global([data-theme="light"]) .compliance-card:hover {
  background: rgba(255,255,255,0.20);
  border-color: rgba(248,243,240,0.50);
}
.compliance-icon { font-size: 2rem; margin-bottom: 12px; }
.compliance-name { font-size: 0.95rem; font-weight: 700; color: var(--heading-color); margin-bottom: 8px; }
.compliance-desc { font-size: 0.8rem; color: var(--text-muted); line-height: 1.6; }

@media (max-width: 1024px) {
  .sec-layout { grid-template-columns: 1fr; gap: 40px; }
  .compliance-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .compliance-grid { grid-template-columns: 1fr; }
}
</style>
