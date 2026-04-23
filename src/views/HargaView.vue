<script setup>
const plans = [
  {
    tier: 'Starter',
    tagline: 'Untuk bisnis yang baru mulai tumbuh',
    price: 'Mulai dari',
    priceValue: 'Rp 1,5 Jt',
    pricePer: '/bulan',
    badge: null,
    color: '#1E6FD9',
    modules: [
      'Manajemen Keuangan & Akuntansi',
      'Inventaris Dasar (1 Gudang)',
      'Laporan Keuangan Standar',
      'PPN & PPh Otomatis',
      'Dukungan Email & Chat',
    ],
    cta: 'Mulai Gratis 14 Hari',
  },
  {
    tier: 'Growth',
    tagline: 'Untuk bisnis yang sedang berkembang pesat',
    price: 'Mulai dari',
    priceValue: 'Rp 4,5 Jt',
    pricePer: '/bulan',
    badge: 'Paling Populer',
    color: '#00A3FF',
    modules: [
      'Semua fitur Starter',
      'Inventaris Multi-Gudang',
      'Modul Penjualan & CRM',
      'Modul Produksi & Sewa',
      'POS Retail Terintegrasi',
      'HCM & Payroll Otomatis',
      'Laporan Analitik Lanjutan',
      'Dukungan Prioritas',
    ],
    cta: 'Mulai Gratis 14 Hari',
  },
  {
    tier: 'Enterprise',
    tagline: 'Untuk korporasi dengan kebutuhan kompleks',
    price: 'Harga',
    priceValue: 'Custom',
    pricePer: 'sesuai kebutuhan',
    badge: null,
    color: '#9C27B0',
    modules: [
      'Semua fitur Growth',
      'Multi-Entitas & Multi-Cabang',
      'Integrasi Ekosistem Kustom',
      'SLA Uptime 99.9%',
      'Dedicated Account Manager',
      'Pelatihan & Onboarding Tim',
      'Audit Trail & Compliance',
      'Backup & Recovery Prioritas',
    ],
    cta: 'Hubungi Tim Kami',
  },
]

const faqs = [
  {
    q: 'Apakah ada biaya setup atau biaya tersembunyi?',
    a: 'Tidak ada. Harga yang tercantum sudah all-in. Tidak ada biaya setup, tidak ada biaya per-transaksi.',
  },
  {
    q: 'Bisakah saya upgrade atau downgrade paket?',
    a: 'Ya, Anda bisa upgrade kapan saja. Downgrade dapat dilakukan di akhir periode billing.',
  },
  {
    q: 'Apakah data saya aman?',
    a: 'Data Anda dienkripsi end-to-end dan disimpan di server lokal Indonesia. Kami mematuhi regulasi perlindungan data yang berlaku.',
  },
  {
    q: 'Berapa lama proses implementasi?',
    a: 'Paket Starter dapat langsung digunakan. Paket Growth & Enterprise memerlukan 1-4 minggu onboarding sesuai kompleksitas bisnis.',
  },
]

import { ref } from 'vue'
const openFaq = ref(null)
function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="harga-hero section">
      <div class="container text-center">
        <div class="section-label">Investasi Cerdas</div>
        <h1 class="section-title">Pilih Paket yang Tepat<br/>untuk Bisnis Anda</h1>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">
          Bayar sesuai pertumbuhan bisnis Anda. Tidak ada lock-in jangka panjang.
          Mulai dari yang kecil, scale up sesuai kebutuhan.
        </p>
      </div>
    </section>

    <!-- PRICING CARDS -->
    <section class="section section--alt">
      <div class="container">
        <div class="pricing-grid">
          <div
            v-for="plan in plans"
            :key="plan.tier"
            class="pricing-card reveal"
            :class="{ 'pricing-card--featured': plan.badge }"
            :style="{ '--plan-color': plan.color }"
          >
            <div v-if="plan.badge" class="pricing-badge" :style="{ background: plan.color }">
              {{ plan.badge }}
            </div>
            <div class="pricing-header">
              <div class="pricing-tier" :style="{ color: plan.color }">{{ plan.tier }}</div>
              <p class="pricing-tagline">{{ plan.tagline }}</p>
            </div>
            <div class="pricing-price">
              <span class="price-prefix">{{ plan.price }}</span>
              <span class="price-value" :style="{ color: plan.color }">{{ plan.priceValue }}</span>
              <span class="price-per">{{ plan.pricePer }}</span>
            </div>
            <ul class="pricing-modules">
              <li v-for="mod in plan.modules" :key="mod">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" :style="{ stroke: plan.color }" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ mod }}
              </li>
            </ul>
            <a href="/kontak" class="btn pricing-cta" :style="plan.badge ? `background:${plan.color}; color:#fff; border-color:${plan.color}` : `border-color:${plan.color}; color:${plan.color}`">
              {{ plan.cta }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- MODULAR NOTE -->
    <section class="section">
      <div class="container text-center">
        <div class="modular-note reveal">
          <div class="modular-icon">🧩</div>
          <h2 class="modular-title">Bayar Hanya untuk yang Anda Gunakan</h2>
          <p class="modular-desc">
            Model <strong>Pay-as-you-grow</strong> FIMOSA memungkinkan Anda mengaktifkan modul Add-ons
            (POS, HCM, CRM, Tax Engine) kapan saja tanpa harus upgrade paket.
            Efisiensi biaya yang sesungguhnya.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom: 48px;">
          <div class="section-label">FAQ</div>
          <h2 class="section-title">Pertanyaan Umum</h2>
        </div>
        <div class="faq-list">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="faq-item"
            :class="{ open: openFaq === i }"
          >
            <button class="faq-q" @click="toggleFaq(i)">
              {{ faq.q }}
              <svg class="faq-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div class="faq-a">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container text-center">
        <h2 class="section-title reveal" style="max-width: 560px; margin: 0 auto 24px;">
          Masih Ragu? Coba FIMOSA Gratis 14 Hari
        </h2>
        <p class="section-subtitle reveal" style="max-width: 480px; margin: 0 auto 40px;">
          Tidak perlu kartu kredit. Tidak ada komitmen. Rasakan sendiri bagaimana FIMOSA mengubah cara bisnis Anda berjalan.
        </p>
        <a href="/kontak" class="btn btn-primary btn-lg reveal">Request Demo Sekarang</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.harga-hero {
  padding-top: 140px;
}

/* ===== PRICING GRID ===== */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}
.pricing-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 32px;
  transition: var(--transition);
}
.pricing-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
  border-color: var(--plan-color, var(--accent));
}
.pricing-card--featured {
  border-color: var(--plan-color);
  box-shadow: 0 8px 40px rgba(0,163,255,0.15);
}

.pricing-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  padding: 4px 16px;
  border-radius: 999px;
  white-space: nowrap;
}

.pricing-header { margin-bottom: 24px; }
.pricing-tier {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 6px;
}
.pricing-tagline {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}
.pricing-price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}
.price-prefix {
  font-size: 0.8rem;
  color: var(--text-secondary);
}
.price-value {
  font-size: 2rem;
  font-weight: 800;
}
.price-per {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.pricing-modules {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;
  padding: 0;
}
.pricing-modules li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}
.pricing-modules li svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.pricing-cta {
  width: 100%;
  text-align: center;
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  border-width: 2px;
  border-style: solid;
  transition: var(--transition);
  background: transparent;
}
.pricing-cta:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

/* ===== MODULAR NOTE ===== */
.modular-note {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 48px;
  max-width: 680px;
  margin: 0 auto;
}
.modular-icon { font-size: 3rem; margin-bottom: 16px; }
.modular-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 16px;
}
.modular-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

/* ===== FAQ ===== */
.faq-list {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.faq-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md, 12px);
  overflow: hidden;
  transition: var(--transition);
}
.faq-item.open {
  border-color: var(--accent);
}
.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  background: none;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--heading-color);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
}
.faq-chevron {
  flex-shrink: 0;
  transition: transform 0.25s ease;
}
.faq-item.open .faq-chevron {
  transform: rotate(180deg);
}
.faq-a {
  padding: 0 24px;
  max-height: 0;
  overflow: hidden;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  transition: max-height 0.3s ease, padding 0.3s ease;
}
.faq-item.open .faq-a {
  max-height: 200px;
  padding: 0 24px 20px;
}

.btn-lg { padding: 16px 40px; font-size: 1rem; }

@media (max-width: 900px) {
  .pricing-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
</style>
