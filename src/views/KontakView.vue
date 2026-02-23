<script setup>
import SectionCTA from '../components/SectionCTA.vue'
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container" style="position:relative;z-index:1;padding-top:140px;padding-bottom:80px">
        <div class="section-label">Kontak & Demo</div>
        <h1 class="section-title" style="font-size:clamp(2rem,4vw,3.2rem);max-width:680px">
          Kami Siap Membantu<br/>Transformasi Digital Anda
        </h1>
        <div class="divider"></div>
        <p class="section-subtitle">
          Hubungi kami untuk demo, konsultasi, atau sekadar bertanya. Tim kami ada di sini untuk Anda.
        </p>
      </div>
    </section>

    <!-- Contact Info Row -->
    <section class="section section--alt">
      <div class="container">
        <div class="contact-info-grid">
          <div class="contact-info-card" v-for="c in contacts" :key="c.label">
            <div class="ci-icon">{{ c.icon }}</div>
            <div class="ci-label">{{ c.label }}</div>
            <div class="ci-value">{{ c.value }}</div>
            <div class="ci-note">{{ c.note }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Form (reuse SectionCTA) -->
    <SectionCTA />

    <!-- FAQ -->
    <section class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom:48px">
          <div class="section-label">Pertanyaan Umum</div>
          <h2 class="section-title">FAQ</h2>
          <div class="divider divider--center"></div>
        </div>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }" @click="openFaq = openFaq === i ? null : i">
            <div class="faq-q">
              {{ faq.q }}
              <span class="faq-chevron">{{ openFaq === i ? '−' : '+' }}</span>
            </div>
            <div class="faq-a" v-show="openFaq === i">{{ faq.a }}</div>
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
      openFaq: null,
      contacts: [
        { icon: '📧', label: 'Email', value: 'operation@fimosa.id', note: 'Balas dalam 1×24 jam' },
        { icon: '💬', label: 'WhatsApp', value: '+62 882 1650 6429', note: 'Senin–Jumat, 08:00–17:00 WIB' },
        { icon: '📍', label: 'Kantor', value: 'Gedung HQ Senopati, Jl. Panembahan Senopati No.17, Daerah Istimewa Yogyakarta 55121', note: 'Kunjungan dengan janji' },
        { icon: '🎯', label: 'Demo Online', value: 'Tersedia via Zoom/Meet', note: 'Jadwalkan dalam 24 jam' },
      ],
      faqs: [
        { q: 'Berapa lama proses implementasi FIMOSA?', a: 'Rata-rata 2–4 minggu tergantung kompleksitas bisnis. Kami menyediakan tim implementasi berpengalaman yang memandu Anda dari awal hingga go-live.' },
        { q: 'Apakah data kami aman di cloud?', a: 'Ya. Data Anda dienkripsi AES-256, direplikasi ke multiple server, dan di-backup otomatis setiap 6 jam. Kami menjamin uptime 99.9% dan tidak ada pihak ketiga yang bisa mengakses data Anda.' },
        { q: 'Apakah FIMOSA bisa diakses dari HP?', a: 'Sepenuhnya. FIMOSA dibangun dengan Vue.js yang responsif dan bisa diakses dari browser HP mana pun tanpa instalasi aplikasi tambahan.' },
        { q: 'Bisa migrasi dari sistem lama?', a: 'Ya, kami menyediakan layanan migrasi data dari berbagai sistem termasuk Excel, sistem akuntansi lokal, dan ERP lainnya. Tim teknis kami akan memastikan migrasi berjalan mulus tanpa kehilangan data.' },
        { q: 'Apakah ada biaya implementasi tambahan?', a: 'Paket FIMOSA termasuk implementasi, onboarding, dan training dasar. Tidak ada biaya tersembunyi. Untuk kustomisasi khusus, kami akan memberikan penawaran terpisah yang transparan.' },
        { q: 'Modul apa yang paling sering digunakan bisnis Indonesia?', a: 'Finance & Tax dan Inventory Control adalah modul yang paling banyak digunakan. Namun kami merekomendasikan mengaktifkan semua modul untuk mendapat manfaat integrasi penuh.' },
      ]
    }
  }
}
</script>

<style scoped>
.page-hero { position: relative; overflow: hidden; }
.page-hero-bg { position: absolute; inset: 0; background: linear-gradient(180deg, #040c1a, #0A1628); }

.contact-info-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.contact-info-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 28px 20px;
  text-align: center;
  transition: var(--transition);
}
.contact-info-card:hover { border-color: var(--border-hover); transform: translateY(-3px); }
.ci-icon { font-size: 2rem; margin-bottom: 12px; }
.ci-label { font-size: 0.72rem; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
.ci-value { font-size: 0.95rem; font-weight: 600; color: var(--white); margin-bottom: 4px; }
.ci-note { font-size: 0.78rem; color: var(--text-muted); }

.faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 0; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
.faq-item {
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: background var(--transition);
}
.faq-item:last-child { border-bottom: none; }
.faq-item:hover { background: rgba(30,111,217,0.05); }
.faq-item.open { background: rgba(30,111,217,0.06); }
.faq-q {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}
.faq-chevron { font-size: 1.2rem; color: var(--accent); flex-shrink: 0; margin-left: 16px; }
.faq-a {
  padding: 0 24px 20px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.75;
}

@media (max-width: 1024px) {
  .contact-info-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .contact-info-grid { grid-template-columns: 1fr; }
}
</style>
