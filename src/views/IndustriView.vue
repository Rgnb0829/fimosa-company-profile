<script setup>
import { ref } from 'vue'

const segments = [
  {
    id: 'retail',
    label: 'Retail',
    icon: '🏪',
    color: '#1E6FD9',
    desc: 'Solusi terintegrasi untuk bisnis retail modern — dari manajemen stok hingga pengalaman pelanggan di kasir.',
    subsegments: [
      {
        id: 'toko-fashion',
        label: 'Toko Fashion',
        icon: '👗',
        headline: 'Kelola Ratusan SKU Tanpa Kerumitan',
        desc: 'Dari pakaian hingga aksesori, FIMOSA membantu toko fashion mengelola inventaris multi-varian (ukuran, warna), program loyalitas pelanggan, dan laporan penjualan per koleksi.',
        benefits: [
          'Manajemen SKU multi-varian (size × color)',
          'Program loyalty & membership terintegrasi',
          'Analitik tren produk terlaris',
          'Integrasi kasir POS & e-commerce',
        ],
      },
      {
        id: 'toko-kelontong-fmcg',
        label: 'Toko Kelontong / FMCG',
        icon: '🛒',
        headline: 'Kontrol Stok Cepat Gerak dengan Presisi',
        desc: 'Produk FMCG bergerak cepat dan margin tipis. FIMOSA membantu Anda mengendalikan rotasi stok, mengelola tanggal kadaluarsa, dan memantau margin per produk secara real-time.',
        benefits: [
          'Manajemen expired date otomatis',
          'Reorder point & auto-purchase order',
          'Laporan margin per-SKU',
          'Multi-cabang terpusat',
        ],
      },
      {
        id: 'food--beverage',
        label: 'Food & Beverage',
        icon: '🍽️',
        headline: 'Dari Dapur ke Meja, Semua Terkontrol',
        desc: 'Operasional F&B yang kompleks — bahan baku, resep, food cost — kini bisa dikendalikan dari satu platform. Kurangi pemborosan dan maksimalkan profitabilitas per menu.',
        benefits: [
          'Manajemen resep & food cost otomatis',
          'Kontrol bahan baku & pemborosan',
          'Laporan profitabilitas per menu',
          'Integrasi kasir & sistem pemesanan',
        ],
      },
    ],
  },
  {
    id: 'manufaktur',
    label: 'Manufaktur',
    icon: '🏭',
    color: '#FF6B35',
    desc: 'Platform produksi end-to-end untuk industri manufaktur — dari perencanaan bahan baku hingga pengiriman produk jadi.',
    subsegments: [
      {
        id: 'assembly-plant',
        label: 'Assembly Plant',
        icon: '⚙️',
        headline: 'Orkestrasi Lini Perakitan yang Efisien',
        desc: 'Kelola Bill of Materials (BOM), work order, dan jadwal produksi secara terintegrasi. Minimalkan idle time dan pastikan setiap komponen tersedia tepat waktu.',
        benefits: [
          'Bill of Materials (BOM) multi-level',
          'Work order & jadwal produksi otomatis',
          'Pelacakan WIP (Work-in-Progress)',
          'Laporan efisiensi lini produksi',
        ],
      },
      {
        id: 'process-manufacturing',
        label: 'Process Manufacturing',
        icon: '🔬',
        headline: 'Presisi dalam Setiap Batch Produksi',
        desc: 'Untuk industri kimia, farmasi, makanan & minuman olahan — FIMOSA membantu mengelola formula produksi, kontrol kualitas batch, dan traceability bahan baku.',
        benefits: [
          'Manajemen formula & batch processing',
          'Quality control & traceability',
          'Kalkulasi biaya produksi per-batch',
          'Kepatuhan standar industri',
        ],
      },
      {
        id: 'warehouse-management',
        label: 'Warehouse Management',
        icon: '📦',
        headline: 'Gudang Cerdas, Distribusi Tepat Sasaran',
        desc: 'Optimalkan tata letak gudang, percepat proses penerimaan dan pengiriman barang, dan lacak setiap pergerakan stok dengan akurasi 100%.',
        benefits: [
          'Slot & layout gudang digital',
          'Proses penerimaan & pengiriman cepat',
          'Barcode & QR scanning',
          'Laporan akurasi inventaris real-time',
        ],
      },
    ],
  },
]

const activeSegment = ref(segments[0])
const activeSubsegment = ref(segments[0].subsegments[0])

function selectSegment(seg) {
  activeSegment.value = seg
  activeSubsegment.value = seg.subsegments[0]
}
function selectSub(sub) {
  activeSubsegment.value = sub
}
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="industri-hero section">
      <div class="container text-center">
        <div class="section-label">Solusi per Industri</div>
        <h1 class="section-title">Dirancang Khusus<br/>untuk Industri Anda</h1>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">
          Setiap industri memiliki tantangan uniknya. FIMOSA hadir dengan konfigurasi
          yang telah disesuaikan, bukan solusi satu ukuran untuk semua.
        </p>
      </div>
    </section>

    <!-- SEGMENT SELECTOR -->
    <section class="section section--alt">
      <div class="container">
        <!-- Top tabs: Retail vs Manufaktur -->
        <div class="segment-tabs">
          <button
            v-for="seg in segments"
            :key="seg.id"
            class="segment-tab"
            :class="{ active: activeSegment.id === seg.id }"
            :style="activeSegment.id === seg.id ? { borderColor: seg.color, color: seg.color } : {}"
            @click="selectSegment(seg)"
          >
            <span class="segment-tab-icon">{{ seg.icon }}</span>
            {{ seg.label }}
          </button>
        </div>

        <!-- Sub-segment tabs -->
        <div class="subsegment-tabs">
          <button
            v-for="sub in activeSegment.subsegments"
            :key="sub.id"
            class="subsegment-tab"
            :class="{ active: activeSubsegment.id === sub.id }"
            :style="activeSubsegment.id === sub.id ? { background: activeSegment.color, borderColor: activeSegment.color } : {}"
            :id="`sub-${sub.id}`"
            @click="selectSub(sub)"
          >
            {{ sub.icon }} {{ sub.label }}
          </button>
        </div>

        <!-- Content panel -->
        <div class="subsegment-content reveal" :key="activeSubsegment.id">
          <div class="content-text">
            <div class="content-label" :style="{ color: activeSegment.color }">
              {{ activeSegment.label }} · {{ activeSubsegment.label }}
            </div>
            <h2 class="content-headline">{{ activeSubsegment.headline }}</h2>
            <p class="content-desc">{{ activeSubsegment.desc }}</p>
            <ul class="content-benefits">
              <li v-for="b in activeSubsegment.benefits" :key="b">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" :style="{ stroke: activeSegment.color }" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ b }}
              </li>
            </ul>
            <a href="/kontak" class="btn" :style="{ background: activeSegment.color, color: '#fff', borderColor: activeSegment.color }">
              Konsultasi Gratis
            </a>
          </div>
          <div class="content-visual">
            <div class="visual-card" :style="{ borderColor: activeSegment.color + '40' }">
              <div class="visual-icon">{{ activeSubsegment.icon }}</div>
              <div class="visual-label">{{ activeSubsegment.label }}</div>
              <div class="visual-segment" :style="{ color: activeSegment.color }">{{ activeSegment.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container text-center">
        <h2 class="section-title reveal" style="max-width: 560px; margin: 0 auto 24px;">
          Tidak Menemukan Industri Anda?
        </h2>
        <p class="section-subtitle reveal" style="max-width: 480px; margin: 0 auto 40px;">
          FIMOSA sangat fleksibel dan dapat dikonfigurasi untuk hampir semua jenis bisnis.
          Hubungi tim kami untuk konsultasi gratis.
        </p>
        <a href="/kontak" class="btn btn-primary btn-lg reveal">Hubungi Tim Kami</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.industri-hero { padding-top: 140px; }

/* SEGMENT TABS */
.segment-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  justify-content: center;
}
.segment-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border: 2px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: var(--transition);
}
.segment-tab:hover { border-color: var(--accent); color: var(--heading-color); }
.segment-tab.active { background: var(--surface); }
.segment-tab-icon { font-size: 1.3rem; }

/* SUBSEGMENT TABS */
.subsegment-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  justify-content: center;
  flex-wrap: wrap;
}
.subsegment-tab {
  padding: 8px 20px;
  border: 1.5px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: var(--transition);
}
.subsegment-tab:hover { border-color: var(--accent); color: var(--heading-color); }
.subsegment-tab.active { color: #fff; }

/* CONTENT PANEL */
.subsegment-content {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 64px;
  align-items: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 56px;
}
.content-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.content-headline {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--heading-color);
  margin-bottom: 20px;
  line-height: 1.3;
}
.content-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 28px;
}
.content-benefits {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 36px;
}
.content-benefits li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}
.content-benefits svg { flex-shrink: 0; }

/* VISUAL */
.content-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}
.visual-card {
  width: 240px;
  height: 240px;
  border: 2px solid;
  border-radius: var(--radius-lg);
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  padding: 24px;
  transition: var(--transition);
}
.visual-icon { font-size: 4rem; }
.visual-label {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--heading-color);
}
.visual-segment {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.btn-lg { padding: 16px 40px; font-size: 1rem; }

@media (max-width: 900px) {
  .subsegment-content {
    grid-template-columns: 1fr;
    padding: 32px;
    gap: 32px;
  }
  .content-visual { display: none; }
}
@media (max-width: 600px) {
  .segment-tabs { flex-direction: column; }
}
</style>
