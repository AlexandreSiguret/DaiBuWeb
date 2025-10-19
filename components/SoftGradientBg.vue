<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const blob1 = ref<HTMLDivElement | null>(null)
const blob2 = ref<HTMLDivElement | null>(null)
const blob3 = ref<HTMLDivElement | null>(null)

let rafId: number | null = null

function updateParallax() {
  const y = window.scrollY || 0
  // Facteurs différents pour un effet de profondeur
  const y1 = y * 0.22
  const y2 = y * -0.16
  const y3 = y * 0.12
  if (blob1.value) blob1.value.style.setProperty('translate', `0 ${y1}px`)
  if (blob2.value) blob2.value.style.setProperty('translate', `0 ${y2}px`)
  if (blob3.value) blob3.value.style.setProperty('translate', `0 ${y3}px`)
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
    <!-- aurora blobs (parallax via propriété CSS translate) -->
    <div ref="blob1" class="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-accent/30 blur-3xl animate-aurora will-change-transform"></div>
    <div ref="blob2" class="absolute top-20 right-0 w-[300px] h-[300px] rounded-full bg-daiblue/25 blur-3xl animate-aurora-slow will-change-transform"></div>
    <div ref="blob3" class="absolute bottom-0 left-1/3 w-[340px] h-[340px] rounded-full bg-[#95E3B7]/20 blur-3xl animate-aurora will-change-transform"></div>
  </div>
</template>




