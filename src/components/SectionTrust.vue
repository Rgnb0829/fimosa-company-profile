<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => {
  const observer = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) visible.value = true
  }, { threshold: 0.2 })
  const el = document.getElementById('trust-section')
  if (el) observer.observe(el)
})

const indicators = [
  { icon: '⚡', name: '99.9% Uptime SLA', desc: 'Sistem selalu aktif tanpa gangguan' },
  { icon: '🎧', name: '24/7 Dukungan Lokal', desc: 'Tim support Bahasa Indonesia' },
  { icon: '🛡️', name: 'Enkripsi Kelas Militer', desc: 'Data Anda aman dan rahasia' },
  { icon: '✅', name: 'Siap Audit & Compliance', desc: 'Standar pelaporan PSAK dan Pajak' },
  { icon: '🏢', name: 'Multi-Lokasi', desc: 'Kelola banyak cabang dari satu layar' },
  { icon: '🚀', name: 'Skalabel Tanpa Batas', desc: 'Tumbuh seiring bisnis Anda' }
]
</script>

<template>
  <section id="trust-section" class="section section--alt">
    <div class="container">
      <div class="trust-top text-center">
        <div class="section-label">Kepercayaan Anda Prioritas Kami</div>
        <h2 class="section-title">Dipercaya untuk Mengelola Bisnis</h2>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">
          Dibangun dengan fondasi yang kuat untuk menjamin kelancaran, keamanan, dan stabilitas operasional perusahaan Anda.
        </p>
      </div>

      <div class="tech-grid" :class="{ visible }">
        <div
          v-for="(ind, i) in indicators"
          :key="ind.name"
          class="tech-card"
          :style="{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }"
        >
          <div class="tech-icon">{{ ind.icon }}</div>
          <div class="tech-info">
            <div class="tech-name">{{ ind.name }}</div>
            <div class="tech-desc">{{ ind.desc }}</div>
          </div>
        </div>
      </div>

      <div class="trust-statement">
        <div class="trust-pulse">
          <span class="pulse-dot"></span>
          Sistem Online &amp; Aktif
        </div>
        <p>"Sistem kami beroperasi 24/7 dengan jaminan uptime <strong>99.9%</strong> dan dukungan teknis lokal siap membantu kapan pun Anda butuhkan."</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust-top { margin-bottom: 56px; }

.tech-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-bottom: 48px;
}
.tech-grid .tech-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s;
}
.tech-grid.visible .tech-card {
  opacity: 1;
  transform: translateY(0);
}

.tech-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  cursor: default;
}
.tech-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-glow);
  transform: translateY(-4px) !important;
}
.tech-icon { font-size: 2rem; }
.tech-name { font-size: 0.85rem; font-weight: 700; color: var(--heading-color); }
.tech-desc { font-size: 0.72rem; color: var(--text-muted); }

.trust-statement {
  background: linear-gradient(135deg, var(--surface) 0%, rgba(30,111,217,0.08) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 48px;
  display: flex;
  align-items: center;
  gap: 40px;
}
.trust-pulse {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--success);
  white-space: nowrap;
  background: rgba(0,200,150,0.1);
  border: 1px solid rgba(0,200,150,0.2);
  padding: 10px 18px;
  border-radius: 999px;
}
.pulse-dot {
  width: 8px; height: 8px;
  background: var(--success);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0,200,150,0.4); }
  50% { box-shadow: 0 0 0 8px rgba(0,200,150,0); }
}
.trust-statement p { font-size: 0.95rem; color: var(--text-secondary); }
.trust-statement strong { color: var(--accent); }

@media (max-width: 1024px) {
  .tech-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 640px) {
  .tech-grid { grid-template-columns: repeat(2, 1fr); }
  .trust-statement { flex-direction: column; padding: 24px; gap: 20px; text-align: center; }
}
</style>
