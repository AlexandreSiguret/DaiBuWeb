<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

// Wrappers parallax pour séparer transform (parallax) et animate-aurora (transform interne)
const wrap1 = ref<HTMLDivElement | null>(null)
const wrap2 = ref<HTMLDivElement | null>(null)
const wrap3 = ref<HTMLDivElement | null>(null)

let rafId: number | null = null

function updateParallax() {
  const y = window.scrollY || 0
  // Facteurs différents pour un effet de profondeur (accentués)
  const y1 = y * 0.22
  const y2 = y * -0.16
  const y3 = y * 0.12
  if (wrap1.value) wrap1.value.style.transform = `translate3d(0, ${y1}px, 0)`
  if (wrap2.value) wrap2.value.style.transform = `translate3d(0, ${y2}px, 0)`
  if (wrap3.value) wrap3.value.style.transform = `translate3d(0, ${y3}px, 0)`
}

function onScroll() {
  if (rafId != null) return
  rafId = requestAnimationFrame(() => {
    updateParallax()
    rafId = null
  })
}

onMounted(() => {
  updateParallax()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (rafId != null) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 bg-darkbg">
    <div class="absolute inset-0 bg-soft-radial"></div>
    <!-- voile vertical doux -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(15,17,21,0.20)]"></div>
    <!-- aurora blobs: wrapper (parallax) + inner (aurora animation) -->
    <div ref="wrap1" class="absolute -top-24 -left-24 will-change-transform">
      <div class="w-[380px] h-[380px] rounded-full bg-accent/30 blur-3xl animate-aurora"></div>
    </div>
    <div ref="wrap2" class="absolute top-20 right-0 will-change-transform">
      <div class="w-[300px] h-[300px] rounded-full bg-daiblue/25 blur-3xl animate-aurora-slow"></div>
    </div>
    <div ref="wrap3" class="absolute bottom-0 left-1/3 will-change-transform">
      <div class="w-[340px] h-[340px] rounded-full bg-[#95E3B7]/20 blur-3xl animate-aurora"></div>
    </div>
  </div>
</template>




