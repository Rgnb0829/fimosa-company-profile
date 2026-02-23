<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container" style="position:relative;z-index:1;padding-top:140px;padding-bottom:80px">
        <div class="section-label">Mengapa FIMOSA?</div>
        <h1 class="section-title" style="font-size:clamp(2rem,4vw,3.2rem);max-width:680px">
          Lebih dari Sekadar<br/>Software — Mitra Bisnis Anda
        </h1>
        <div class="divider"></div>
        <p class="section-subtitle">
          Ribuan ERP tersedia di pasaran. Berikut mengapa FIMOSA menjadi pilihan bisnis cerdas di Indonesia.
        </p>
      </div>
    </section>

    <!-- Main Comparison -->
    <section class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom:56px">
          <div class="section-label">Perbandingan Lengkap</div>
          <h2 class="section-title">FIMOSA vs. Alternatif Lainnya</h2>
          <div class="divider divider--center"></div>
        </div>

        <div class="compare-table-wrap">
          <table class="compare-table">
            <thead>
              <tr>
                <th class="feature-col">Fitur</th>
                <th class="fimosa-col">✅ FIMOSA ERP</th>
                <th>📊 ERP Global</th>
                <th>📒 Manual / Excel</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in compareRows" :key="i">
                <td class="feature-name">{{ row.feature }}</td>
                <td class="fimosa-col">
                  <span class="check yes">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ row.fimosa }}
                  </span>
                </td>
                <td>
                  <span :class="['check', row.globalClass]">{{ row.global }}</span>
                </td>
                <td>
                  <span class="check no">❌ {{ row.manual }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Value Props -->
    <section class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom:56px">
          <div class="section-label">Keunggulan Utama</div>
          <h2 class="section-title">4 Alasan Memilih FIMOSA</h2>
          <div class="divider divider--center"></div>
        </div>
        <div class="value-grid">
          <div v-for="v in values" :key="v.title" class="value-card">
            <div class="value-number">{{ v.num }}</div>
            <div class="value-icon">{{ v.icon }}</div>
            <h3 class="value-title">{{ v.title }}</h3>
            <p class="value-desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container text-center">
        <h2 class="section-title">Mulai Tanpa Risiko</h2>
        <p class="section-subtitle" style="margin:0 auto 36px">Coba FIMOSA gratis selama 30 hari. Tidak perlu kartu kredit. Batalkan kapan saja.</p>
        <a href="/kontak" class="btn btn-primary" style="font-size:1rem;padding:16px 36px">Mulai Uji Coba Gratis</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compareRows: [
        { feature: 'Kepatuhan PSAK & Perpajakan Indonesia', fimosa: 'Built-in, selalu update', global: '⚠️ Perlu kustomisasi mahal', globalClass: 'partial', manual: 'Tidak ada' },
        { feature: 'Bahasa & Dukungan Lokal', fimosa: 'Bahasa Indonesia, Tim WIB', global: '❌ Bahasa Inggris, zona beda', globalClass: 'no', manual: 'Tidak ada' },
        { feature: 'Biaya Implementasi', fimosa: 'Terjangkau, transparan', global: '❌ Ratusan juta rupiah', globalClass: 'no', manual: 'Rendah, tapi tersembunyi' },
        { feature: 'Waktu Go-Live', fimosa: '2–4 minggu', global: '❌ 6–18 bulan', globalClass: 'no', manual: 'Seketika (tapi tidak scalable)' },
        { feature: 'Enkripsi AES-256', fimosa: 'Standar bawaan', global: '✅ Ya', globalClass: 'yes', manual: 'Tidak ada' },
        { feature: 'Mobile Responsive', fimosa: 'Penuh (Vue.js SPA)', global: '⚠️ Bervariasi', globalClass: 'partial', manual: 'Tidak ada' },
        { feature: 'Audit Trail Lengkap', fimosa: 'Setiap transaksi terekam', global: '✅ Ya, tapi kompleks', globalClass: 'yes', manual: 'Tidak ada' },
        { feature: 'Integrasi Custom', fimosa: 'REST API terbuka', global: '⚠️ Locked-in / berbayar', globalClass: 'partial', manual: 'Tidak ada' },
      ],
      values: [
        { num: '01', icon: '🇮🇩', title: 'Dibuat untuk Indonesia', desc: 'Dirancang khusus dengan regulasi PSAK, PPN, PPh, dan peraturan ketenagakerjaan Indonesia. Tidak perlu kustomisasi tambahan.' },
        { num: '02', icon: '⚡', title: 'Cepat & Intuitif', desc: 'Dibangun dengan Vue.js + Vite — UI modern dan responsif yang dapat dipelajari karyawan baru dalam 1–2 hari.' },
        { num: '03', icon: '🔒', title: 'Keamanan Berlapis', desc: 'Enkripsi AES-256, ACID transactions, OAuth 2.0, MFA, dan audit trail lengkap. Data Anda tidak akan pernah hilang atau bocor.' },
        { num: '04', icon: '🤝', title: 'Support Lokal 24/7', desc: 'Tim support kami ada di zona waktu yang sama. Chat, telepon, atau kunjungan onsite — dalam Bahasa Indonesia.' },
      ]
    }
  }
}
</script>

<style scoped>
.page-hero { position: relative; overflow: hidden; }
.page-hero-bg { position: absolute; inset: 0; background: linear-gradient(180deg, #040c1a, #0A1628); }

.compare-table-wrap { border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border); }
.compare-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
.compare-table thead tr { background: var(--surface-2); }
.compare-table thead th {
  padding: 16px 20px; text-align: left;
  font-size: 0.8rem; font-weight: 700; color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
}
.fimosa-col { background: rgba(30,111,217,0.06) !important; border-left: 2px solid var(--electric-blue); }
.compare-table tbody tr { border-bottom: 1px solid var(--border); transition: background var(--transition); }
.compare-table tbody tr:last-child { border-bottom: none; }
.compare-table tbody tr:hover { background: rgba(255,255,255,0.02); }
.compare-table td { padding: 14px 20px; vertical-align: middle; }
.feature-name { font-weight: 500; color: var(--text-secondary); }
.check { display: flex; align-items: center; gap: 6px; font-size: 0.82rem; }
.check.yes { color: var(--success); }
.check.partial { color: #FFBD2E; }
.check.no { color: var(--text-muted); }

.value-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.value-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  position: relative;
  transition: var(--transition);
}
.value-card:hover { border-color: var(--border-hover); transform: translateY(-4px); box-shadow: var(--shadow-glow); }
.value-number { font-size: 3rem; font-weight: 900; color: rgba(30,111,217,0.12); line-height: 1; margin-bottom: 16px; }
.value-icon { font-size: 2rem; margin-bottom: 12px; }
.value-title { font-size: 1.05rem; font-weight: 700; color: var(--white); margin-bottom: 10px; }
.value-desc { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.7; }

@media (max-width: 1024px) {
  .value-grid { grid-template-columns: repeat(2, 1fr); }
  .compare-table-wrap { overflow-x: auto; }
}
@media (max-width: 640px) {
  .value-grid { grid-template-columns: 1fr; }
}
</style>
