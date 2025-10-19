<script setup lang="ts">
import { ref } from 'vue'

const phoneRef = ref<HTMLElement | null>(null)

function onTilt(e: MouseEvent) {
  const el = phoneRef.value as HTMLElement | null
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const rotateY = ((x / rect.width) - 0.5) * 10 // -5deg à +5deg
  const rotateX = ((y / rect.height) - 0.5) * -10 // -5deg à +5deg
  el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

function resetTilt() {
  const el = phoneRef.value as HTMLElement | null
  if (!el) return
  el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
}
</script>

<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-8 pb-6 md:pt-4 text-white">
    <div class="md:pl-24 max-md:text-center">
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-extrabold lg:tracking-tight reveal-up reveal-up-1">
        <span class="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#DFF6EC] shimmer-text">
          Un budget pour chaque jour
        </span>
      </h1>
      <p class="text-lg mt-4 text-white/80 max-w-xl reveal-up reveal-up-2">
        La seule application qui te permet de gérer ton budget de façon journalière.
      </p>
      <div class="mt-6 flex reveal-up reveal-up-3">
        <CTA size="xl" class="max-md:m-auto"/>
      </div>
    </div>
    <div class="p-8 md:p-16 relative flex items-center reveal-up reveal-up-4">
      <img
        class="absolute left-0 md:block hidden opacity-60"
        src="/img/hero_shape.svg"
        alt="hero shape"
        width="217.5"
        height="238"
      />
      <img
        class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] animate-float will-change-transform"
        src="/img/hero_smartphone.png" 
        alt="hero smartphone"
        width="304"
        height="673"
        @mousemove="onTilt"
        @mouseleave="resetTilt"
        ref="phoneRef"
      />
    </div>
  </main>
</template>
