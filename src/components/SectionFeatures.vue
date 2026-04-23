<script setup>
const features = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></svg>`,
    tag: 'Finance & Tax',
    title: 'Keuangan & Perpajakan',
    desc: 'Kelola arus kas dan kewajiban pajak tanpa kerumitan manual. Laporan keuangan yang siap audit kapan saja, sesuai standar Indonesia.',
    points: ['Laporan Keuangan Instan', 'Bebas Risiko Salah Hitung Pajak', 'Patuh PSAK & Regulasi DJP', 'Audit-Ready Kapan Saja'],
    color: '#1E6FD9',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    tag: 'Inventory',
    title: 'Manajemen Inventaris',
    desc: 'Tidak ada lagi stok menumpuk atau kehabisan barang. Kendalikan seluruh pergerakan inventaris secara real-time di semua gudang.',
    points: ['Nol Kehilangan Stok', 'Restock Sebelum Kehabisan', 'Kelola Banyak Gudang Sekaligus', 'Visibilitas Stok Real-Time'],
    color: '#00A3FF',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
    tag: 'Sales & CRM',
    title: 'Penjualan & Hubungan Pelanggan',
    desc: 'Konversi lebih banyak prospek menjadi pelanggan setia. Pantau seluruh perjalanan penjualan dan jangkau pelanggan di mana pun mereka berada.',
    points: ['Tingkatkan Conversion Rate', 'Jangkau Pelanggan Lebih Luas', 'Pantau Pipeline Secara Menyeluruh', 'Retensi Pelanggan Lebih Tinggi'],
    color: '#00C896',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    tag: 'Production & Renting',
    title: 'Produksi & Manajemen Aset',
    desc: 'Maksimalkan kapasitas produksi dan optimalkan nilai aset. Kurangi downtime, hindari keterlambatan, dan tingkatkan efisiensi operasional.',
    points: ['Kurangi Downtime Produksi', 'Optimalkan Penggunaan Aset', 'Kontrol Biaya Produksi', 'Efisiensi Operasional Terukur'],
    color: '#FF6B35',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/></svg>`,
    tag: 'POS Retail',
    title: 'Point of Sales',
    desc: 'Percepat transaksi dan tingkatkan pengalaman belanja pelanggan. Kelola seluruh cabang dari satu layar tanpa hambatan operasional.',
    points: ['Checkout Lebih Cepat & Akurat', 'Kendalikan Semua Cabang', 'Promosi Tepat Sasaran', 'Laporan Penjualan Instan'],
    color: '#FF4181',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
    tag: 'HCM',
    title: 'Human Capital Management',
    desc: 'Otomasi seluruh siklus HR — dari rekrutmen hingga penggajian. Pastikan kepatuhan regulasi ketenagakerjaan tanpa beban administrasi.',
    points: ['Otomasi Payroll Bulanan', 'Minim Risiko Pelanggaran Regulasi', 'Produktivitas SDM Terukur', 'Kelola Cuti & Absensi Digital'],
    color: '#9C27B0',
  }
]
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="text-center">
        <div class="section-label">Modul Terintegrasi</div>
        <h2 class="section-title">Semua yang Bisnis Anda Butuhkan</h2>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">
          Setiap modul dirancang spesifik untuk kebutuhan bisnis Indonesia — saling terhubung, real-time, dan siap pakai.
        </p>
      </div>

      <div class="features-grid">
        <div
          v-for="(f, i) in features"
          :key="f.tag"
          class="feature-card reveal"
          :style="{ '--card-color': f.color, animationDelay: `${i * 120}ms` }"
        >
          <div class="feature-header">
            <div class="feature-icon-wrap" :style="{ background: `${f.color}18`, border: `1px solid ${f.color}40` }">
              <span :style="{ color: f.color }" v-html="f.icon"></span>
            </div>
            <span class="feature-tag" :style="{ color: f.color, background: `${f.color}15` }">{{ f.tag }}</span>
          </div>
          <h3 class="feature-title">{{ f.title }}</h3>
          <p class="feature-desc">{{ f.desc }}</p>
          <ul class="feature-points">
            <li v-for="pt in f.points" :key="pt">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" :style="{ stroke: f.color }" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ pt }}
            </li>
          </ul>
          <div class="feature-glow" :style="{ background: `radial-gradient(circle at 50% 100%, ${f.color}20, transparent 70%)` }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 56px;
}

.feature-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px;
  overflow: hidden;
  transition: var(--transition);
}
.feature-card:hover {
  border-color: var(--card-color, var(--electric-blue));
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.3);
}


.feature-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.feature-icon-wrap {
  width: 56px; height: 56px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}
.feature-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 999px;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 12px;
}
.feature-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 20px;
}
.feature-points {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.feature-points li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.feature-glow {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 120px;
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--transition);
}
.feature-card:hover .feature-glow { opacity: 1; }

@media (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .features-grid { grid-template-columns: 1fr; }
}
</style>
