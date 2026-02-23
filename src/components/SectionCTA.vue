<script setup>
import { ref } from 'vue'

const form = ref({ company: '', name: '', email: '', phone: '', size: '' })
const submitted = ref(false)
const loading = ref(false)

function submit() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    submitted.value = true
  }, 1200)
}
</script>

<template>
  <section class="section cta-section">
    <div class="cta-bg">
      <div class="cta-orb cta-orb-1"></div>
      <div class="cta-orb cta-orb-2"></div>
    </div>
    <div class="container">
      <div class="cta-inner">
        <div class="cta-content">
          <div class="section-label">Mulai Sekarang</div>
          <h2 class="section-title">Siap Transformasi<br/>Digital Sekarang?</h2>
          <div class="divider"></div>
          <p class="section-subtitle">
            Biarkan sistem kami bekerja, fokuslah pada pengembangan bisnis Anda.
            Demo gratis 30 menit, tanpa syarat, tanpa kartu kredit.
          </p>

          <div class="cta-perks">
            <div class="perk" v-for="p in perks" :key="p">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ p }}
            </div>
          </div>

          <div class="free-resources">
            <h4>📘 Gratis untuk Anda:</h4>
            <div class="resource-cards">
              <div class="resource-card">
                <div class="resource-icon">📖</div>
                <div>
                  <div class="resource-title">E-Book Gratis</div>
                  <div class="resource-desc">Panduan Migrasi dari Pembukuan Manual ke ERP</div>
                </div>
                <a href="#" class="btn btn-ghost resource-btn">Unduh</a>
              </div>
              <div class="resource-card">
                <div class="resource-icon">🔍</div>
                <div>
                  <div class="resource-title">Free Assessment</div>
                  <div class="resource-desc">Audit Efisiensi Sistem Bisnis Anda (30 Menit)</div>
                </div>
                <a href="#" class="btn btn-ghost resource-btn">Daftar</a>
              </div>
            </div>
          </div>
        </div>

        <div class="cta-form-wrap">
          <div v-if="!submitted" class="cta-form-card">
            <div class="form-header">
              <h3>Jadwalkan Demo Gratis</h3>
              <p>Tim kami akan menghubungi Anda dalam 1×24 jam</p>
            </div>
            <form @submit.prevent="submit" class="cta-form">
              <div class="form-group">
                <label for="company">Nama Perusahaan *</label>
                <input id="company" v-model="form.company" type="text" placeholder="PT. Maju Bersama Indonesia" required />
              </div>
              <div class="form-group">
                <label for="contact-name">Nama Kontak *</label>
                <input id="contact-name" v-model="form.name" type="text" placeholder="Budi Santoso" required />
              </div>
              <div class="form-group">
                <label for="email">Email Bisnis *</label>
                <input id="email" v-model="form.email" type="email" placeholder="budi@perusahaan.com" required />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="phone">No. WhatsApp</label>
                  <input id="phone" v-model="form.phone" type="tel" placeholder="+62 812 xxxx xxxx" />
                </div>
                <div class="form-group">
                  <label for="size">Ukuran Perusahaan</label>
                  <select id="size" v-model="form.size">
                    <option value="">Pilih...</option>
                    <option>1–10 karyawan</option>
                    <option>11–50 karyawan</option>
                    <option>51–200 karyawan</option>
                    <option>200+ karyawan</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="btn btn-primary submit-btn" :disabled="loading">
                <span v-if="loading" class="spinner"></span>
                <span v-else>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </span>
                {{ loading ? 'Mengirim...' : 'Request Demo Gratis' }}
              </button>
              <p class="form-note">🔒 Data Anda aman dan tidak akan dibagikan kepada pihak ketiga.</p>
            </form>
          </div>

          <!-- Success State -->
          <div v-else class="success-card">
            <div class="success-icon">🎉</div>
            <h3>Permintaan Terkirim!</h3>
            <p>Tim FIMOSA akan menghubungi <strong>{{ form.name }}</strong> di <strong>{{ form.email }}</strong> dalam 1×24 jam. Sampai jumpa di demo!</p>
            <button class="btn btn-ghost" @click="submitted = false; form = { company:'', name:'', email:'', phone:'', size:'' }">
              Kirim Permintaan Lain
            </button>
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
      perks: ['Setup & onboarding gratis', 'Tidak perlu kartu kredit', 'Demo disesuaikan kebutuhan Anda', 'Support lokal Bahasa Indonesia']
    }
  }
}
</script>

<style scoped>
.cta-section {
  position: relative;
  overflow: hidden;
  background: var(--deep-blue-2);
}
.cta-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.cta-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}
.cta-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(30,111,217,0.15) 0%, transparent 70%);
  top: -200px; right: -100px;
}
.cta-orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(0,163,255,0.1) 0%, transparent 70%);
  bottom: -150px; left: -50px;
}

.cta-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.cta-perks {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 28px;
}
.perk {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.free-resources { margin-top: 40px; }
.free-resources h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-secondary);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.resource-cards { display: flex; flex-direction: column; gap: 12px; }
.resource-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  transition: var(--transition);
}
.resource-card:hover { border-color: var(--border-hover); }
.resource-icon { font-size: 1.5rem; flex-shrink: 0; }
.resource-title { font-size: 0.875rem; font-weight: 600; color: var(--white); margin-bottom: 2px; }
.resource-desc { font-size: 0.78rem; color: var(--text-muted); }
.resource-btn { padding: 8px 16px; font-size: 0.78rem; margin-left: auto; flex-shrink: 0; }

/* Form */
.cta-form-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 40px;
  box-shadow: var(--shadow-card);
}
.form-header { margin-bottom: 28px; }
.form-header h3 { font-size: 1.3rem; font-weight: 700; color: var(--white); margin-bottom: 6px; }
.form-header p { font-size: 0.875rem; color: var(--text-muted); }

.cta-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

.submit-btn {
  width: 100%;
  justify-content: center;
  gap: 10px;
  padding: 16px;
  font-size: 1rem;
  margin-top: 4px;
}
.form-note { font-size: 0.75rem; color: var(--text-muted); text-align: center; }

.spinner {
  width: 18px; height: 18px;
  border: 2.5px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Success */
.success-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 48px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.success-icon { font-size: 3.5rem; }
.success-card h3 { font-size: 1.4rem; font-weight: 700; color: var(--white); }
.success-card p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; max-width: 320px; }
.success-card strong { color: var(--accent); }

@media (max-width: 1024px) {
  .cta-inner { grid-template-columns: 1fr; gap: 48px; }
}
@media (max-width: 480px) {
  .cta-form-card { padding: 24px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
