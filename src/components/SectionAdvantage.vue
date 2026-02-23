<template>
  <section class="section section--alt">
    <div class="container">
      <div class="adv-layout">
        <div class="adv-content">
          <div class="section-label">Kenapa FIMOSA?</div>
          <h2 class="section-title">Solusi Nyata untuk<br/>Masalah Bisnis Anda</h2>
          <div class="divider"></div>
          <p class="section-subtitle">
            Berbeda dari sistem ERP global yang kompleks dan mahal, FIMOSA dirancang
            dari dalam Indonesia, untuk kebutuhan bisnis Indonesia.
          </p>
          <a href="/mengapa-fimosa" class="btn btn-ghost" style="margin-top:24px;width:fit-content">
            Lihat Perbandingan Lengkap
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div class="adv-table-wrap">
          <table class="adv-table">
            <thead>
              <tr>
                <th>😤 Masalah Umum Bisnis</th>
                <th>✅ Solusi FIMOSA</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i" :class="{ alt: i % 2 === 1 }">
                <td class="problem">
                  <span class="problem-icon">⚠️</span>
                  {{ row.problem }}
                </td>
                <td class="solution">
                  <span class="check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {{ row.solution }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        { problem: 'Stok sering selisih, sulit diaudit', solution: 'Pencatatan otomatis dengan Audit Trail lengkap' },
        { problem: 'Laporan pajak manual & selalu terlambat', solution: 'Jurnal otomatis sesuai regulasi perpajakan Indonesia' },
        { problem: 'Sistem ERP sulit dipelajari karyawan', solution: 'Antarmuka intuitif & modern (Vue.js) + Onboarding' },
        { problem: 'Dukungan teknis dari luar negeri, beda zona waktu', solution: 'Tim Support Lokal siap 24/7 dalam Bahasa Indonesia' },
        { problem: 'Data keuangan tidak terhubung ke inventaris', solution: 'Semua modul terintegrasi dalam satu platform' },
        { problem: 'Tidak patuh PSAK, risiko gagal audit', solution: 'Laporan standar PSAK & siap diaudit kapan saja' },
      ]
    }
  }
}
</script>

<style scoped>
.adv-layout {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 64px;
  align-items: start;
}

.adv-table-wrap {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-card);
}

.adv-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}
.adv-table thead tr {
  background: linear-gradient(135deg, var(--surface), var(--surface-2));
}
.adv-table thead th {
  padding: 16px 20px;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
}
.adv-table tbody tr {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  transition: background var(--transition);
}
.adv-table tbody tr.alt {
  background: var(--deep-blue-2);
}
.adv-table tbody tr:hover {
  background: rgba(30, 111, 217, 0.08);
}
.adv-table tbody tr:last-child { border-bottom: none; }

.adv-table td {
  padding: 14px 20px;
  vertical-align: top;
  line-height: 1.6;
}

.problem {
  color: var(--text-secondary);
  display: flex;
  align-items: flex-start;
  gap: 8px;
  border-right: 1px solid var(--border);
}
.problem-icon { flex-shrink: 0; font-size: 0.9rem; margin-top: 2px; }

.solution {
  color: var(--text-primary);
  font-weight: 500;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.check-icon {
  flex-shrink: 0;
  width: 22px; height: 22px;
  background: rgba(0,200,150,0.12);
  border: 1px solid rgba(0,200,150,0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}

@media (max-width: 1024px) {
  .adv-layout { grid-template-columns: 1fr; gap: 40px; }
}
</style>
