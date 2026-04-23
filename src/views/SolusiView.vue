<script setup>
const modules = [
  {
    id: 'finance',
    icon: '💰',
    title: 'Finance & Accounting',
    subtitle: 'Laporan keuangan otomatis sesuai standar akuntansi',
    color: '#1E6FD9',
    features: [
      { name: 'Buku Besar Digital', desc: 'Otomatisasi pencatatan jurnal untuk setiap transaksi bisnis' },
      { name: 'Manajemen Hutang & Piutang', desc: 'Pemantauan jadwal pembayaran dan penagihan dengan pengingat otomatis' },
      { name: 'Rekonsiliasi Bank Otomatis', desc: 'Pencocokan mutasi rekening dalam hitungan detik' },
      { name: 'Pelaporan Keuangan Real-time', desc: 'Akses cepat ke Neraca, Laba Rugi, dan Arus Kas' },
      { name: 'Kalkulator Pajak Cerdas', desc: 'Penghitungan otomatis berbagai komponen pajak perusahaan' },
      { name: 'Jejak Audit Tersistem', desc: 'Rekaman aktivitas pengguna untuk transparansi penuh' },
    ]
  },
  {
    id: 'inventory',
    icon: '📦',
    title: 'Inventory Control',
    subtitle: 'Pemantauan stok akurat di berbagai lokasi gudang',
    color: '#00A3FF',
    features: [
      { name: 'Manajemen Multi-Gudang', desc: 'Visibilitas stok di seluruh cabang dalam satu layar' },
      { name: 'Valuasi Stok Fleksibel', desc: 'Dukungan metode pencatatan sesuai kebijakan operasional Anda' },
      { name: 'Audit Stok Digital', desc: 'Proses opname cepat dan akurat menggunakan barcode' },
      { name: 'Pengingat Stok Minimum', desc: 'Peringatan cerdas sebelum kehabisan barang krusial' },
      { name: 'Pelacakan Produk Detail', desc: 'Ketertelusuran barang hingga ke tingkat batch atau serial' },
      { name: 'Evaluasi Pemasok', desc: 'Analisis kinerja vendor untuk keputusan pembelian yang lebih baik' },
    ]
  },
  {
    id: 'sales',
    icon: '📈',
    title: 'Sales & CRM',
    subtitle: 'Konversi prospek menjadi pelanggan setia secara efisien',
    color: '#00C896',
    features: [
      { name: 'Visualisasi Penjualan', desc: 'Pantau status penawaran dari kontak awal hingga kesepakatan' },
      { name: 'Dokumen Penjualan Instan', desc: 'Pembuatan penawaran dan faktur profesional secara otomatis' },
      { name: 'Database Pelanggan Terpusat', desc: 'Riwayat interaksi dan preferensi setiap klien' },
      { name: 'Manajemen Target Tim', desc: 'Pemantauan kinerja dan perhitungan komisi tenaga penjual' },
      { name: 'Otomatisasi Tindak Lanjut', desc: 'Pengingat untuk tidak melewatkan potensi kesepakatan' },
      { name: 'Analisis Kinerja Penjualan', desc: 'Wawasan mendalam tentang tingkat konversi dan tren pasar' },
    ]
  },
  {
    id: 'production',
    icon: '🏭',
    title: 'Production & Renting',
    subtitle: 'Optimalisasi lini produksi dan utilisasi aset perusahaan',
    color: '#FF6B35',
    features: [
      { name: 'Resep Produk Standar', desc: 'Pengelolaan daftar bahan baku dan komponen secara terstruktur' },
      { name: 'Perintah Kerja Digital', desc: 'Penjadwalan dan pelacakan proses manufaktur secara langsung' },
      { name: 'Perencanaan Kapasitas', desc: 'Alokasi sumber daya mesin dan tenaga kerja secara efisien' },
      { name: 'Kendali Mutu Terintegrasi', desc: 'Standarisasi pemeriksaan kualitas di setiap tahapan' },
      { name: 'Manajemen Sewa Aset', desc: 'Pengaturan kontrak dan penjadwalan peminjaman peralatan' },
      { name: 'Perawatan Terjadwal', desc: 'Peringatan pemeliharaan aset untuk mencegah kerusakan mendadak' },
    ]
  },
  {
    id: 'pos',
    icon: '🏪',
    title: 'Point of Sales (POS)',
    subtitle: 'Transaksi retail yang cepat, terhubung langsung ke back-office',
    color: '#FF4181',
    features: [
      { name: 'Kasir Berbasis Cloud', desc: 'Proses pembayaran instan yang tetap berfungsi walau offline sejenak' },
      { name: 'Sinkronisasi Multi-Cabang', desc: 'Pembaruan data harga dan produk di seluruh gerai secara bersamaan' },
      { name: 'Manajemen Diskon Dinamis', desc: 'Pengaturan promosi kompleks, paket bundling, dan program loyalitas' },
      { name: 'Beragam Metode Pembayaran', desc: 'Dukungan tunai, kartu, QRIS, hingga e-wallet dalam satu sistem' },
      { name: 'Pemotongan Stok Otomatis', desc: 'Inventaris pusat langsung berkurang setiap ada barang terjual' },
      { name: 'Laporan Shift Harian', desc: 'Rekapitulasi pendapatan dan selisih kas di akhir jam kerja' },
    ]
  },
  {
    id: 'hcm',
    icon: '👥',
    title: 'Human Capital Management',
    subtitle: 'Pengelolaan SDM yang menyederhanakan administrasi personalia',
    color: '#9C27B0',
    features: [
      { name: 'Portal Informasi Karyawan', desc: 'Akses mandiri untuk slip gaji, sisa cuti, dan pembaruan data diri' },
      { name: 'Sistem Absensi Cerdas', desc: 'Pencatatan kehadiran berbasis lokasi atau mesin sidik jari terintegrasi' },
      { name: 'Persetujuan Cuti Berjenjang', desc: 'Alur persetujuan digital untuk absen, cuti, atau klaim biaya' },
      { name: 'Penggajian Sekali Klik', desc: 'Kalkulasi gaji akurat berdasarkan absensi, lembur, dan tunjangan' },
      { name: 'Kepatuhan Regulasi Otomatis', desc: 'Perhitungan potongan pajak PPh 21 dan iuran jaminan sosial' },
      { name: 'Evaluasi Kinerja Berkala', desc: 'Manajemen target kerja (KPI) dan penilaian performa karyawan' },
    ]
  }
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
          FIMOSA ERP menghubungkan SDM → Finance → Inventory → Retail → Sales dalam satu sistem terpadu.
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
:global([data-theme="light"] .section--alt) .module-feature-item:hover {
  background: rgba(248,243,240,0.15);
}
.mf-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 7px; }
.mf-name { font-size: 0.9rem; font-weight: 600; color: var(--heading-color); margin-bottom: 2px; }
.mf-desc { font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; }

@media (max-width: 1024px) {
  .module-layout { grid-template-columns: 1fr; gap: 32px; direction: ltr !important; }
}
</style>
