<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const scrolled = ref(false)
const menuOpen = ref(false)
const isDark = ref(true)

// Dropdown states
const activeDropdown = ref(null) // 'industri' | 'tentang' | 'addons' | null
const addonsOpen = ref(false)

const handleScroll = () => { scrolled.value = window.scrollY > 40 }

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Sync isDark dengan OS/theme yang sudah diterapkan index.html
  const saved = localStorage.getItem('fimosa-theme')
  if (saved) {
    isDark.value = saved !== 'light'
  } else {
    // Ikuti OS theme
    isDark.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  // Listen OS theme changes
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.addEventListener('change', onOsThemeChange)
})

function onOsThemeChange(e) {
  // Hanya ikuti OS jika user belum pernah set manual
  if (!localStorage.getItem('fimosa-theme')) {
    isDark.value = e.matches
    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light')
  }
}

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.removeEventListener('change', onOsThemeChange)
})

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('fimosa-theme', theme)
}

function toggleDropdown(name) {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

function closeAll() {
  activeDropdown.value = null
  menuOpen.value = false
}

// Industri sub-menu
const industriMenu = [
  {
    label: 'Retail',
    sub: ['Toko Fashion', 'Toko Kelontong / FMCG', 'Food & Beverage'],
  },
  {
    label: 'Manufaktur',
    sub: ['Assembly Plant', 'Process Manufacturing', 'Warehouse Management'],
  },
]

// Add-ons
const addonsItems = [
  { label: 'POS', icon: '🖥️', desc: 'Point of Sales terintegrasi' },
  { label: 'HCM', icon: '👥', desc: 'Human Capital Management' },
  { label: 'CRM', icon: '💼', desc: 'Customer Relationship Management' },
  { label: 'Tax Engine', icon: '📊', desc: 'Kalkulasi & Pelaporan Pajak Otomatis' },
]

// Tentang sub-menu
const tentangMenu = [
  { label: 'Tentang Perusahaan', anchor: '#about' },
  { label: 'Karir', anchor: '#karir' },
  { label: 'Layanan', anchor: '#layanan' },
]
</script>

<template>
  <nav class="navbar" :class="{ scrolled }" @click.self="closeAll">
    <div class="container nav-inner">
      <RouterLink to="/" class="nav-logo" @click="closeAll">
        <img src="/logo.svg" alt="FIMOSA ERP" class="logo-img" />
      </RouterLink>

      <div class="nav-links" :class="{ open: menuOpen }">

        <!-- ===== INDUSTRI (Accordion dropdown) ===== -->
        <div class="nav-item-dropdown" :class="{ active: activeDropdown === 'industri' }">
          <button
            class="nav-link dropdown-trigger"
            @click="toggleDropdown('industri')"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'industri'"
            id="nav-industri"
          >
            Industri
            <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="dropdown-panel" role="menu" aria-labelledby="nav-industri">
            <div
              v-for="group in industriMenu"
              :key="group.label"
              class="dropdown-group"
            >
              <div class="dropdown-group-label">{{ group.label }}</div>
              <RouterLink
                v-for="sub in group.sub"
                :key="sub"
                :to="`/industri#${sub.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '')}`"
                class="dropdown-item"
                @click="closeAll"
              >
                {{ sub }}
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- ===== ADD-ONS (Gallery popup) ===== -->
        <div class="nav-item-dropdown" :class="{ active: activeDropdown === 'addons' }">
          <button
            class="nav-link dropdown-trigger"
            @click="toggleDropdown('addons')"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'addons'"
            id="nav-addons"
          >
            Add-ons
            <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="dropdown-panel addons-panel" role="menu" aria-labelledby="nav-addons">
            <div class="addons-grid">
              <RouterLink
                v-for="addon in addonsItems"
                :key="addon.label"
                to="/solusi"
                class="addon-card"
                @click="closeAll"
              >
                <span class="addon-icon">{{ addon.icon }}</span>
                <span class="addon-label">{{ addon.label }}</span>
                <span class="addon-desc">{{ addon.desc }}</span>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- ===== TENTANG KAMI (Accordion dropdown) ===== -->
        <div class="nav-item-dropdown" :class="{ active: activeDropdown === 'tentang' }">
          <button
            class="nav-link dropdown-trigger"
            @click="toggleDropdown('tentang')"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'tentang'"
            id="nav-tentang"
          >
            Tentang Kami
            <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="dropdown-panel" role="menu" aria-labelledby="nav-tentang">
            <RouterLink
              v-for="item in tentangMenu"
              :key="item.label"
              :to="`/tentang${item.anchor}`"
              class="dropdown-item"
              @click="closeAll"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </div>

        <!-- ===== HARGA (Direct link) ===== -->
        <RouterLink to="/harga" class="nav-link" @click="closeAll">Harga</RouterLink>

        <!-- ===== Theme Toggle ===== -->
        <button
          class="theme-toggle"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          id="theme-toggle-btn"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <RouterLink to="/kontak" class="btn btn-primary nav-cta" @click="closeAll">
          Request Demo
        </RouterLink>
      </div>

      <button class="hamburger" @click="menuOpen = !menuOpen; activeDropdown = null" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Overlay untuk menutup dropdown saat klik luar -->
    <div v-if="activeDropdown" class="nav-overlay" @click="activeDropdown = null"></div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
}
.navbar.scrolled {
  background: rgba(10, 22, 40, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 14px 0;
  box-shadow: 0 4px 32px rgba(0,0,0,0.3);
}
:global([data-theme="light"]) .navbar {
  background: rgba(248, 243, 240, 0.70);
  backdrop-filter: blur(8px);
}
:global([data-theme="light"]) .navbar.scrolled {
  background: rgba(248, 243, 240, 0.95);
  box-shadow: 0 2px 20px rgba(1, 75, 170, 0.10);
  border-bottom-color: rgba(1, 75, 170, 0.15);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.nav-logo {
  display: flex;
  align-items: center;
  z-index: 10;
}
.logo-img {
  height: 52px;
  width: auto;
  display: block;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
}
.nav-link {
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: var(--transition);
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--heading-color);
  background: var(--accent-soft);
}
.nav-cta { margin-left: 12px; padding: 10px 20px; font-size: 0.875rem; }

/* ===== DROPDOWN TRIGGER ===== */
.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 5px;
}
.chevron {
  transition: transform 0.25s ease;
  flex-shrink: 0;
}
.nav-item-dropdown.active .chevron {
  transform: rotate(180deg);
}

/* ===== DROPDOWN PANEL ===== */
.nav-item-dropdown {
  position: relative;
}
.dropdown-panel {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 8px;
  min-width: 220px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  /* Collapsed state */
  opacity: 0;
  pointer-events: none;
  transform: translateX(-50%) translateY(-8px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 200;
}
.nav-item-dropdown.active .dropdown-panel {
  opacity: 1;
  pointer-events: all;
  transform: translateX(-50%) translateY(0);
}

:global([data-theme="light"]) .dropdown-panel {
  background: #fff;
  box-shadow: 0 8px 32px rgba(1, 75, 170, 0.12);
}

.dropdown-group {
  margin-bottom: 4px;
}
.dropdown-group:last-child { margin-bottom: 0; }
.dropdown-group-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  padding: 8px 12px 4px;
}
.dropdown-item {
  display: block;
  padding: 9px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: var(--transition);
}
.dropdown-item:hover {
  background: var(--accent-soft);
  color: var(--heading-color);
}

/* ===== ADD-ONS PANEL ===== */
.addons-panel {
  min-width: 340px;
  left: 50%;
}
.addons-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  padding: 4px;
}
.addon-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--bg);
  transition: var(--transition);
  cursor: pointer;
}
.addon-card:hover {
  border-color: var(--accent);
  background: var(--accent-soft);
}
.addon-icon { font-size: 1.4rem; }
.addon-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--heading-color);
}
.addon-desc {
  font-size: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

/* ===== Theme Toggle Button ===== */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--accent-soft);
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition);
  margin-left: 8px;
}
.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
  transform: rotate(15deg);
}

/* ===== HAMBURGER ===== */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
  z-index: 10;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}
.hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ===== NAV OVERLAY ===== */
.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .hamburger { display: flex; }
  .nav-links {
    position: fixed;
    inset: 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 80px 32px 40px;
    background: var(--deep-blue);
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--transition);
    gap: 4px;
    overflow-y: auto;
  }
  :global([data-theme="light"]) .nav-links {
    background: #F8F3F0;
  }
  .nav-links.open {
    opacity: 1;
    pointer-events: all;
  }
  .nav-cta { margin-left: 0; margin-top: 12px; }
  .theme-toggle { margin-left: 0; }

  /* Mobile dropdown */
  .nav-item-dropdown {
    width: 100%;
  }
  .dropdown-trigger {
    width: 100%;
    justify-content: space-between;
    font-size: 1.05rem;
    padding: 12px 0;
  }
  .dropdown-panel {
    position: static;
    transform: none !important;
    opacity: 1 !important;
    pointer-events: none;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
  }
  .nav-item-dropdown.active .dropdown-panel {
    max-height: 400px;
    pointer-events: all;
    padding: 8px 0;
  }
  .addons-panel { min-width: unset; }
  .addons-grid { grid-template-columns: 1fr 1fr; }
  .dropdown-group-label { padding-left: 16px; }
  .dropdown-item { padding-left: 16px; }
  .nav-link { font-size: 1.05rem; padding: 10px 0; }
}
</style>
