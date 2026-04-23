<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)
const menuOpen = ref(false)
const isDark = ref(true)

const handleScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Read initial theme
  const saved = document.documentElement.getAttribute('data-theme')
  isDark.value = saved !== 'light'
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('fimosa-theme', theme)
}

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Solusi', to: '/solusi' },
  { label: 'Mengapa FIMOSA', to: '/mengapa-fimosa' },
  { label: 'Keamanan', to: '/keamanan' },
]
</script>

<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="container nav-inner">
      <RouterLink to="/" class="nav-logo">
        <img src="/logo.svg" alt="FIMOSA ERP" class="logo-img" />
      </RouterLink>

      <div class="nav-links" :class="{ open: menuOpen }">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </RouterLink>

        <!-- Theme Toggle -->
        <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
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

        <RouterLink to="/kontak" class="btn btn-primary nav-cta" @click="menuOpen = false">
          Request Demo
        </RouterLink>
      </div>

      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
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
  background: rgba(10, 22, 40, 0.88);
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
}

.nav-logo {
  display: flex;
  align-items: center;
}
.logo-img {
  height: 52px;
  width: auto;
  display: block;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-link {
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: var(--transition);
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--heading-color);
  background: var(--accent-soft);
}
.nav-cta { margin-left: 12px; padding: 10px 20px; font-size: 0.875rem; }

/* Theme Toggle Button */
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

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
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

@media (max-width: 768px) {
  .hamburger { display: flex; }
  .nav-links {
    position: fixed;
    inset: 0;
    flex-direction: column;
    justify-content: center;
    background: var(--deep-blue);
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--transition);
    gap: 12px;
    font-size: 1.1rem;
  }
  :global([data-theme="light"]) .nav-links {
    background: #F8F3F0;
  }
  .nav-links.open {
    opacity: 1;
    pointer-events: all;
  }
  .nav-cta { margin-left: 0; margin-top: 8px; }
  .theme-toggle { margin-left: 0; }
}
</style>
