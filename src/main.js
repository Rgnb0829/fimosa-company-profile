import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

import HomeView from './views/HomeView.vue'
import SolusiView from './views/SolusiView.vue'
import MengapaView from './views/MengapaView.vue'
import KeamananView from './views/KeamananView.vue'
import KontakView from './views/KontakView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/solusi', component: SolusiView },
    { path: '/mengapa-fimosa', component: MengapaView },
    { path: '/keamanan', component: KeamananView },
    { path: '/kontak', component: KontakView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
