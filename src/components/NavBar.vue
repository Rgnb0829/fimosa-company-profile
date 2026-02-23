<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

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
      <RouterLink to="/Fimosa Putih.svg" class="nav-logo">
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
  color: var(--white);
  background: var(--accent-soft);
}
.nav-cta { margin-left: 12px; padding: 10px 20px; font-size: 0.875rem; }

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
  .nav-links.open {
    opacity: 1;
    pointer-events: all;
  }
  .nav-cta { margin-left: 0; margin-top: 8px; }
}
</style>
