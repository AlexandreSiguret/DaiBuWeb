<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

// TODO: Replace these with your actual store URLs
const APP_STORE_URL = 'https://apps.apple.com/fr/app/daibu-daily-budget/id6740541346'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.yourmoneyclockyeah.moneymoneymoney'

const router = useRouter()

onMounted(() => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    window.location.href = APP_STORE_URL
    return
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    window.location.href = PLAY_STORE_URL
    return
  }

  // Desktop / Fallback detection -> Redirect to Home
  router.push('/')
})
</script>

<template>
  <div class="relative">
    <div class="fixed top-4 right-4 z-50 bg-white/90 dark:bg-black/90 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-800">
      <p class="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Redirection vers le store...
      </p>
    </div>
    <Container>
      <Hero></Hero>
    </Container>
    <Features></Features>
    <Container>
      <FAQ></FAQ>
    </Container>
  </div>
</template>
