<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <RouterLink to="/" class="nav-logo">
            <img src="/logo.svg" alt="FIMOSA ERP" class="footer-logo-img" />
          </RouterLink>
          <p class="footer-tagline">ERP Lokal dengan Standar Keamanan Global.</p>
          <div class="tech-stack-mini">
            <span class="badge">Vue.js</span>
            <span class="badge">Vite</span>
            <span class="badge">PostgreSQL</span>
            <span class="badge">AES-256</span>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Produk</h4>
          <ul class="footer-links">
            <li><RouterLink to="/solusi">Fitur &amp; Modul</RouterLink></li>
            <li><RouterLink to="/mengapa-fimosa">Mengapa FIMOSA?</RouterLink></li>
            <li><RouterLink to="/keamanan">Keamanan &amp; Teknologi</RouterLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Perusahaan</h4>
          <ul class="footer-links">
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Blog &amp; Insight</a></li>
            <li><RouterLink to="/kontak">Kontak</RouterLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Hubungi Kami</h4>
          <ul class="footer-links footer-contact">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              operation@fimosa.id
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v1.99-1.99z"/></svg>
              +62 882 1650 6429
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Gedung HQ Senopati, Jl. Panembahan Senopati No.17, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55121, Indonesia
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 FIMOSA ERP. All rights reserved. Dibuat dengan ❤️ di Indonesia.</p>
        <div class="footer-bottom-links">
          <a href="#">Privasi</a>
          <a href="#">Ketentuan Layanan</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--deep-blue);
  border-top: 1px solid var(--border);
  padding: 64px 0 0;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
}
.nav-logo {
  display: inline-block;
  margin-bottom: 16px;
}
.footer-logo-img {
  height: 52px;
  width: auto;
  display: block;
}
.footer-tagline {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}
.tech-stack-mini {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.footer-heading {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 20px;
}
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer-links a,
.footer-links li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: color var(--transition);
  display: flex;
  align-items: center;
  gap: 8px;
}
.footer-links a:hover { color: var(--accent); }
.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.83rem;
  color: var(--text-muted);
}
.footer-bottom-links {
  display: flex;
  gap: 24px;
}
.footer-bottom-links a { color: var(--text-muted); transition: color var(--transition); }
.footer-bottom-links a:hover { color: var(--accent); }

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
}
</style>
