<script setup>
import { onMounted } from 'vue'
import SectionHero from '../components/SectionHero.vue'
import SectionTrust from '../components/SectionTrust.vue'
import SectionFeatures from '../components/SectionFeatures.vue'
import SectionAdvantage from '../components/SectionAdvantage.vue'
import SectionSecurity from '../components/SectionSecurity.vue'
import SectionCTA from '../components/SectionCTA.vue'

// Intersection observer for .reveal elements
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <div>
    <SectionHero />
    <SectionTrust />
    <SectionFeatures />
    <SectionAdvantage />
    <SectionSecurity />
    <SectionCTA />
  </div>
</template>
