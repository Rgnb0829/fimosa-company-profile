<template>
  <section class="section security-section">
    <div class="security-bg">
      <div class="hex-grid"></div>
    </div>
    <div class="container">
      <div class="text-center">
        <div class="section-label">Keamanan Berlapis</div>
        <h2 class="section-title">Arsitektur Keamanan Kelas Enterprise</h2>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">
          Data bisnis Anda adalah aset paling berharga. FIMOSA melindunginya dengan standar keamanan
          yang sama digunakan bank dan institusi keuangan global.
        </p>
      </div>

      <div class="security-grid">
        <div class="sec-card" v-for="item in secItems" :key="item.title">
          <div class="sec-icon-wrap">
            <span v-html="item.icon"></span>
          </div>
          <div class="sec-value">{{ item.value }}</div>
          <div class="sec-title">{{ item.title }}</div>
          <div class="sec-desc">{{ item.desc }}</div>
        </div>
      </div>

      <!-- AES Visualization -->
      <div class="aes-visual">
        <div class="aes-left">
          <div class="section-label" style="margin-bottom:12px">Enkripsi AES-256</div>
          <h3 style="font-size:1.3rem;font-weight:700;color:var(--white);margin-bottom:16px">Setiap Data Dienkripsi End-to-End</h3>
          <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.8;margin-bottom:24px">
            Seluruh data yang tersimpan dan terkirim menggunakan enkripsi <strong style="color:var(--accent)">AES-256</strong>
            — standar yang digunakan oleh lembaga pemerintahan dan perbankan internasional.
            Bahkan jika data dicuri, tidak ada pihak yang bisa membacanya.
          </p>
          <div class="security-points">
            <div class="sec-point" v-for="pt in secPoints" :key="pt">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ pt }}
            </div>
          </div>
        </div>

        <div class="aes-right">
          <div class="aes-diagram">
            <div class="aes-node input">
              <div class="aes-node-icon">📄</div>
              <div class="aes-node-label">Data Asli</div>
            </div>
            <div class="aes-arrow">
              <div class="aes-arrow-line"></div>
              <div class="aes-arrow-label">AES-256<br/>Encrypt</div>
            </div>
            <div class="aes-node encrypted">
              <div class="aes-node-icon">🔐</div>
              <div class="aes-node-label">Data Terenkripsi</div>
            </div>
            <div class="aes-arrow">
              <div class="aes-arrow-line"></div>
              <div class="aes-arrow-label">Secure<br/>Transfer</div>
            </div>
            <div class="aes-node server">
              <div class="aes-node-icon">🖥️</div>
              <div class="aes-node-label">Server PostgreSQL</div>
            </div>
          </div>
          <div class="acid-badge">
            <div class="acid-icon">⚡</div>
            <div>
              <div class="acid-title">ACID Transactions</div>
              <div class="acid-desc">Data tidak akan korup meskipun koneksi terputus</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      secItems: [
        {
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
          value: 'AES-256',
          title: 'Enkripsi Data',
          desc: 'Military-grade encryption untuk semua data tersimpan dan terkirim',
        },
        {
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
          value: '99.9%',
          title: 'Uptime SLA',
          desc: 'Infrastruktur cloud dengan redundancy berlapis untuk zero downtime',
        },
        {
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
          value: 'ACID',
          title: 'Transaksi Database',
          desc: 'Atomicity, Consistency, Isolation, Durability — data selalu konsisten',
        },
        {
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" stroke-width="1.8"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>`,
          value: 'OAuth 2.0',
          title: 'Autentikasi Aman',
          desc: 'Multi-factor authentication dan role-based access control',
        },
      ],
      secPoints: [
        'Data at rest dan in transit terenkripsi penuh',
        'Backup otomatis setiap 6 jam',
        'Penetration testing rutin oleh tim keamanan',
        'Compliance ISO 27001 ready',
        'Log aktivitas pengguna (Audit Trail)',
      ]
    }
  }
}
</script>

<style scoped>
.security-section {
  position: relative;
  overflow: hidden;
  background: var(--deep-blue);
}
.security-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #0A1628, #061022, #0A1628);
}
.hex-grid {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50V18L28 2l28 16v32L28 66zm0-92L0 -26v32L28 22l28-16V-26L28-26z' fill='none' stroke='%231E6FD9' stroke-width='1'/%3E%3C/svg%3E");
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 56px 0 64px;
}

.sec-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 32px 24px;
  text-align: center;
  transition: var(--transition);
}
.sec-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}
.sec-icon-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px; height: 64px;
  background: var(--accent-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  margin: 0 auto 16px;
}
.sec-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 6px;
}
.sec-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 10px;
}
.sec-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* AES Visual */
.aes-visual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 48px;
}

.security-points { display: flex; flex-direction: column; gap: 10px; }
.sec-point {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.aes-diagram {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 24px;
  justify-content: center;
}
.aes-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: var(--deep-blue-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px 12px;
  min-width: 90px;
}
.aes-node.encrypted { border-color: var(--electric-blue); background: rgba(30,111,217,0.1); }
.aes-node.server { border-color: var(--success); background: rgba(0,200,150,0.08); }
.aes-node-icon { font-size: 1.6rem; }
.aes-node-label { font-size: 0.68rem; font-weight: 600; color: var(--text-secondary); text-align: center; }

.aes-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 0 8px;
}
.aes-arrow-line {
  width: 40px; height: 2px;
  background: linear-gradient(90deg, var(--electric-blue), var(--accent));
  position: relative;
}
.aes-arrow-line::after {
  content: '';
  position: absolute;
  right: -4px; top: -3px;
  width: 8px; height: 8px;
  border-top: 2px solid var(--accent);
  border-right: 2px solid var(--accent);
  transform: rotate(45deg);
}
.aes-arrow-label {
  font-size: 0.6rem;
  color: var(--text-muted);
  text-align: center;
  line-height: 1.3;
}

.acid-badge {
  display: flex;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, rgba(30,111,217,0.12), rgba(0,163,255,0.06));
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px 20px;
}
.acid-icon { font-size: 1.5rem; }
.acid-title { font-size: 0.9rem; font-weight: 700; color: var(--white); margin-bottom: 2px; }
.acid-desc { font-size: 0.78rem; color: var(--text-muted); }

@media (max-width: 1024px) {
  .security-grid { grid-template-columns: repeat(2, 1fr); }
  .aes-visual { grid-template-columns: 1fr; gap: 40px; padding: 32px; }
}
@media (max-width: 600px) {
  .aes-diagram { flex-wrap: wrap; justify-content: center; }
  .aes-arrow { display: none; }
}
</style>
