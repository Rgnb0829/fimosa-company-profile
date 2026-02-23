<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero">
    <!-- Background elements -->
    <div class="hero-bg">
      <div class="hero-grid"></div>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <div class="container hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--accent)"><circle cx="6" cy="6" r="5"/></svg>
            Solusi ERP #1 untuk Bisnis Indonesia
          </span>
        </div>

        <h1 class="hero-title">
          Kelola Bisnis Lebih <span class="gradient-text">Efisien,</span><br/>
          Sesuai Aturan Indonesia.
        </h1>

        <p class="hero-subtitle">
          Solusi ERP Terintegrasi untuk Manajemen Keuangan, Inventaris, dan Produksi<br class="hide-mobile"/>
          yang Patuh <strong>PSAK</strong> &amp; <strong>Perpajakan</strong>. Satu Sistem, Seluruh Bisnis Terkendali.
        </p>

        <div class="hero-cta">
          <RouterLink to="/kontak" class="btn btn-primary hero-btn-main">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
            Jadwalkan Demo Gratis
          </RouterLink>
          <RouterLink to="/solusi" class="btn btn-ghost">
            Pelajari Modul
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </RouterLink>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">99.9%</span>
            <span class="stat-label">Uptime SLA</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">AES-256</span>
            <span class="stat-label">Enkripsi Data</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">PSAK</span>
            <span class="stat-label">Compliant</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">24/7</span>
            <span class="stat-label">Support Lokal</span>
          </div>
        </div>
      </div>

      <!-- Dashboard Mockup -->
      <div class="hero-visual">
        <div class="dashboard-mockup">
          <div class="mockup-header">
            <div class="mockup-dots">
              <span></span><span></span><span></span>
            </div>
            <div class="mockup-url">fimosa.id/dashboard</div>
          </div>
          <div class="mockup-body">
            <div class="mockup-sidebar">
              <div class="sidebar-item active">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                Dashboard
              </div>
              <div class="sidebar-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></svg>
                Finance
              </div>
              <div class="sidebar-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                Inventory
              </div>
              <div class="sidebar-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                CRM
              </div>
              <div class="sidebar-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Produksi
              </div>
            </div>
            <div class="mockup-content">
              <div class="kpi-row">
                <div class="kpi-card">
                  <div class="kpi-label">Revenue</div>
                  <div class="kpi-value">Rp 4.8M</div>
                  <div class="kpi-trend up">↑ 12.4%</div>
                </div>
                <div class="kpi-card">
                  <div class="kpi-label">Order Aktif</div>
                  <div class="kpi-value">347</div>
                  <div class="kpi-trend up">↑ 8.1%</div>
                </div>
                <div class="kpi-card">
                  <div class="kpi-label">Stok Item</div>
                  <div class="kpi-value">1,284</div>
                  <div class="kpi-trend neutral">→ 0.3%</div>
                </div>
              </div>
              <div class="chart-area">
                <div class="chart-label">Laporan Keuangan — Q4 2024</div>
                <div class="chart-bars">
                  <div class="bar-group" v-for="(b, i) in bars" :key="i">
                    <div class="bar-wrap">
                      <div class="bar income" :style="{ height: b.income + '%' }"></div>
                      <div class="bar expense" :style="{ height: b.expense + '%' }"></div>
                    </div>
                    <div class="bar-label">{{ b.month }}</div>
                  </div>
                </div>
                <div class="chart-legend">
                  <span class="legend-dot income"></span> Pendapatan
                  <span class="legend-dot expense" style="margin-left:12px"></span> Pengeluaran
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-hint">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bars: [
        { month: 'Okt', income: 65, expense: 40 },
        { month: 'Nov', income: 78, expense: 52 },
        { month: 'Des', income: 90, expense: 58 },
        { month: 'Jan', income: 70, expense: 44 },
        { month: 'Feb', income: 85, expense: 50 },
        { month: 'Mar', income: 95, expense: 60 },
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #040c1a 0%, #0A1628 50%, #0d1f4a 100%);
}
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(30,111,217,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(30,111,217,0.07) 1px, transparent 1px);
  background-size: 48px 48px;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.orb-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(30,111,217,0.2) 0%, transparent 70%);
  top: -200px; right: -100px;
}
.orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(0,163,255,0.12) 0%, transparent 70%);
  bottom: -100px; left: 10%;
}
.orb-3 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%);
  top: 30%; left: 40%;
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 60px;
}

.hero-content { display: flex; flex-direction: column; gap: 24px; }

.hero-badge { display: flex; }

.hero-title {
  font-size: clamp(2rem, 4.5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--white);
}
.gradient-text {
  background: linear-gradient(135deg, var(--electric-blue), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.85;
}
.hero-subtitle strong { color: var(--accent); font-weight: 600; }

.hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
.hero-btn-main { font-size: 1rem; padding: 16px 32px; }

.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 24px;
  background: rgba(13,33,65,0.8);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  backdrop-filter: blur(8px);
  flex-wrap: wrap;
}
.stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.stat-value { font-size: 1.1rem; font-weight: 700; color: var(--white); }
.stat-label { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
.stat-divider { width: 1px; height: 36px; background: var(--border); }

/* --- Dashboard Mockup --- */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dashboard-mockup {
  width: 100%;
  max-width: 540px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(30,111,217,0.15);
  animation: float 5s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.mockup-header {
  background: var(--deep-blue-2);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border);
}
.mockup-dots { display: flex; gap: 6px; }
.mockup-dots span {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
}
.mockup-dots span:first-child { background: #FF5F57; }
.mockup-dots span:nth-child(2) { background: #FFBD2E; }
.mockup-dots span:nth-child(3) { background: #28C840; }
.mockup-url {
  flex: 1;
  background: rgba(255,255,255,0.05);
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 0.72rem;
  color: var(--text-muted);
  text-align: center;
}

.mockup-body { display: flex; }
.mockup-sidebar {
  width: 110px;
  padding: 16px 8px;
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.sidebar-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 0.68rem;
  color: var(--text-muted);
  cursor: pointer;
  transition: var(--transition);
}
.sidebar-item.active {
  background: var(--accent-soft);
  color: var(--accent);
}
.sidebar-item:hover { background: var(--accent-soft); color: var(--text-primary); }

.mockup-content { flex: 1; padding: 16px; display: flex; flex-direction: column; gap: 12px; }

.kpi-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.kpi-card {
  background: var(--deep-blue-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px;
}
.kpi-label { font-size: 0.62rem; color: var(--text-muted); margin-bottom: 4px; }
.kpi-value { font-size: 0.85rem; font-weight: 700; color: var(--white); }
.kpi-trend { font-size: 0.62rem; margin-top: 2px; }
.kpi-trend.up { color: var(--success); }
.kpi-trend.neutral { color: var(--text-muted); }

.chart-area {
  background: var(--deep-blue-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px;
  flex: 1;
}
.chart-label { font-size: 0.67rem; color: var(--text-muted); margin-bottom: 12px; }
.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 80px;
}
.bar-group { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; }
.bar-wrap { display: flex; gap: 2px; align-items: flex-end; height: 70px; }
.bar {
  width: 8px;
  border-radius: 3px 3px 0 0;
  transition: height 1s ease;
}
.bar.income { background: var(--electric-blue); }
.bar.expense { background: rgba(0,163,255,0.35); }
.bar-label { font-size: 0.55rem; color: var(--text-muted); }
.chart-legend { display: flex; align-items: center; font-size: 0.62rem; color: var(--text-muted); margin-top: 8px; }
.legend-dot { width: 8px; height: 8px; border-radius: 2px; display: inline-block; margin-right: 4px; }
.legend-dot.income { background: var(--electric-blue); }
.legend-dot.expense { background: rgba(0,163,255,0.35); }

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.scroll-arrow {
  width: 24px; height: 24px;
  border-right: 2px solid var(--accent);
  border-bottom: 2px solid var(--accent);
  transform: rotate(45deg);
  animation: scrollBounce 1.5s ease-in-out infinite;
  opacity: 0.6;
}
@keyframes scrollBounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(6px); }
}

.hide-mobile { display: inline; }

@media (max-width: 1024px) {
  .hero-inner { grid-template-columns: 1fr; text-align: center; padding-top: 120px; }
  .hero-cta { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-badge { justify-content: center; }
  .hero-visual { order: -1; }
  .dashboard-mockup { max-width: 420px; }
}
@media (max-width: 600px) {
  .hide-mobile { display: none; }
  .dashboard-mockup { max-width: 100%; }
  .hero-stats { gap: 16px; }
  .stat-divider { display: none; }
}
</style>
