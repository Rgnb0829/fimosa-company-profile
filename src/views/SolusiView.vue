<script setup>
const modules = [
  {
    id: 'finance',
    icon: '💰',
    title: 'Finance & Accounting',
    subtitle: 'Laporan keuangan otomatis sesuai PSAK',
    color: '#1E6FD9',
    features: [
      { name: 'General Ledger', desc: 'Buku besar otomatis dengan jurnal entri ganda' },
      { name: 'Accounts Payable/Receivable', desc: 'Kelola hutang dan piutang dengan aging schedule' },
      { name: 'Bank Reconciliation', desc: 'Rekonsiliasi bank otomatis dalam hitungan menit' },
      { name: 'Financial Reporting', desc: 'Neraca, Laba Rugi, Arus Kas sesuai PSAK' },
      { name: 'Tax Management', desc: 'Penghitungan PPN, PPh 21, PPh 23, PPh Badan otomatis' },
      { name: 'Audit Trail', desc: 'Setiap transaksi tercatat dengan timestamp dan user ID' },
    ]
  },
  {
    id: 'inventory',
    icon: '📦',
    title: 'Inventory Control',
    subtitle: 'Stok akurat dengan metode Moving Average',
    color: '#00A3FF',
    features: [
      { name: 'Multi-Gudang', desc: 'Kelola stok di banyak lokasi dalam satu dashboard' },
      { name: 'Moving Average & FIFO', desc: 'Metode valuation stok sesuai kebijakan perusahaan' },
      { name: 'Stock Opname Digital', desc: 'Opname stok via barcode, tanpa kertas' },
      { name: 'Reorder Point Alert', desc: 'Notifikasi otomatis saat stok mendekati minimum' },
      { name: 'Batch & Serial Number', desc: 'Traceability produk hingga ke level batch/lot' },
      { name: 'Supplier Management', desc: 'Bandingkan harga & performa supplier secara objektif' },
    ]
  },
  {
    id: 'sales',
    icon: '📈',
    title: 'Sales & CRM',
    subtitle: 'Dari prospek hingga closing dalam satu platform',
    color: '#00C896',
    features: [
      { name: 'Sales Pipeline', desc: 'Visualisasi funnel penjualan secara real-time' },
      { name: 'Quotation & Invoice', desc: 'Buat penawaran dan faktur profesional dalam 1 klik' },
      { name: 'Customer Database', desc: 'Riwayat pembelian dan interaksi setiap pelanggan' },
      { name: 'Target & Commission', desc: 'Pantau pencapaian target dan komisi sales team' },
      { name: 'Follow-up Reminder', desc: 'Pengingat otomatis untuk tindak lanjut prospek' },
      { name: 'Sales Analytics', desc: 'Dashboard konversi, win rate, dan tren penjualan' },
    ]
  },
  {
    id: 'production',
    icon: '🏭',
    title: 'Production & Renting',
    subtitle: 'Produksi efisien dan manajemen sewa tanpa ribet',
    color: '#FF6B35',
    features: [
      { name: 'Bill of Materials (BOM)', desc: 'Struktur komponen produk hingga multi-level' },
      { name: 'Work Order Management', desc: 'Jadwal dan pantau proses produksi real-time' },
      { name: 'Routing & Capacity', desc: 'Rencanakan rute produksi sesuai kapasitas mesin' },
      { name: 'Quality Control', desc: 'Checkpoint QC di setiap tahap produksi' },
      { name: 'Asset Rental', desc: 'Kontrak sewa aset dengan kalkulasi otomatis' },
      { name: 'Maintenance Schedule', desc: 'Jadwal perawatan aset dengan notifikasi otomatis' },
    ]
  },
]
</script>

<template>
  <div>
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container" style="position:relative;z-index:1;padding-top:140px;padding-bottom:80px">
        <div class="section-label">Modul FIMOSA ERP</div>
        <h1 class="section-title" style="font-size:clamp(2rem,4vw,3.2rem);max-width:720px">
          Fitur Lengkap untuk<br/>Setiap Lini Bisnis Anda
        </h1>
        <div class="divider"></div>
        <p class="section-subtitle">
          Setiap modul dirancang saling terintegrasi — data dari satu modul otomatis
          mengalir ke modul lainnya tanpa input manual berulang.
        </p>
      </div>
    </section>

    <!-- Modules -->
    <section class="section" v-for="(mod, i) in modules" :key="mod.id" :class="{ 'section--alt': i % 2 === 1 }">
      <div class="container">
        <div class="module-layout" :class="{ reverse: i % 2 === 1 }">
          <div class="module-info">
            <div class="module-icon-big" :style="{ background: `${mod.color}15`, border: `1px solid ${mod.color}30` }">
              <span style="font-size:3.5rem">{{ mod.icon }}</span>
            </div>
            <div class="section-label" :style="{ color: mod.color }">Modul {{ String(i+1).padStart(2,'0') }}</div>
            <h2 class="section-title">{{ mod.title }}</h2>
            <p class="section-subtitle">{{ mod.subtitle }}</p>
            <a href="/kontak" class="btn btn-primary" :style="{ background: `linear-gradient(135deg, ${mod.color}, ${mod.color}cc)` }" style="margin-top:24px;width:fit-content">
              Request Demo Modul Ini
            </a>
          </div>

          <div class="module-features">
            <div v-for="f in mod.features" :key="f.name" class="module-feature-item">
              <div class="mf-dot" :style="{ background: mod.color }"></div>
              <div>
                <div class="mf-name">{{ f.name }}</div>
                <div class="mf-desc">{{ f.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="section section--alt">
      <div class="container text-center">
        <h2 class="section-title">Semua Modul Terhubung, Satu Ekosistem</h2>
        <p class="section-subtitle" style="margin:0 auto">
          FIMOSA ERP menghubungkan Finance → Inventory → Sales → Production dalam satu sistem terpadu.
          Tidak ada lagi data silo atau rekonsiliasi manual antar departemen.
        </p>
        <div style="display:flex;gap:16px;justify-content:center;margin-top:36px">
          <a href="/kontak" class="btn btn-primary">Jadwalkan Demo Gratis</a>
          <a href="/mengapa-fimosa" class="btn btn-ghost">Mengapa FIMOSA?</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  position: relative;
  overflow: hidden;
}
.page-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #040c1a, #0A1628);
}
.module-layout {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: start;
}
.module-layout.reverse { direction: rtl; }
.module-layout.reverse > * { direction: ltr; }

.module-icon-big {
  width: 80px; height: 80px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.module-features {
  display: flex;
  flex-direction: column;
  gap: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.module-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  transition: background var(--transition);
}
.module-feature-item:last-child { border-bottom: none; }
.module-feature-item:hover { background: var(--accent-soft); }
.mf-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 7px; }
.mf-name { font-size: 0.9rem; font-weight: 600; color: var(--white); margin-bottom: 2px; }
.mf-desc { font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; }

@media (max-width: 1024px) {
  .module-layout { grid-template-columns: 1fr; gap: 32px; direction: ltr !important; }
}
</style>
