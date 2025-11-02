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
  el.style.transform = `perspective(800px) rotateX(${-25 + rotateX}deg) rotateY(${rotateY}deg) rotateZ(15deg)`
}

function resetTilt() {
  const el = phoneRef.value as HTMLElement | null
  if (!el) return
  el.style.transform = 'perspective(800px) rotateX(-25deg) rotateY(0deg) rotateZ(15deg)'
}
</script>

<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-8 pb-6 md:pt-0 md:-mt-16 lg:-mt-20 text-white">
    <div class="md:pl-24 max-md:text-center">
      <p class="text-xl lg:text-2xl text-accent font-medium mb-3 reveal-up reveal-up-1">
        Prenez le controle de votre budget
      </p>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-extrabold lg:tracking-tight reveal-up reveal-up-1">
        <span class="text-white">
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
    <div class="p-8 md:p-16 relative flex items-center justify-center reveal-up reveal-up-4">
      <img
        class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] animate-float will-change-transform"
        :src="'/img/hero_smartphone.png'"
        alt="hero smartphone"
        width="600"
        height="673"
        style="transform: perspective(800px) rotateX(-25deg) rotateY(0deg) rotateZ(15deg);"
        @mousemove="onTilt"
        @mouseleave="resetTilt"
        ref="phoneRef"
      />
    </div>
  </main>
</template>
