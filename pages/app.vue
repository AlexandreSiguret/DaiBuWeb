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
  <div class="min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <p class="text-gray-500">Redirection en cours...</p>
  </div>
</template>
