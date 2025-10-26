<script setup lang="ts">
interface Props {
  size?: 'md' | 'xl';
}

withDefaults(defineProps<Props>(), {
  size: 'md',
});
</script>

<template>
  <NuxtLink
    href="https://play.google.com/store/apps/details?id=com.yourmoneyclockyeah.moneymoneymoney&hl=fr&gl=GB"
    target="_blank"
    :class="['rounded font-bold text-center text-darkbg bg-[#95E3B7] rounded-lg px-4 py-2 hover:bg-[#8ad4aa]',
      { 'lg:text-3xl lg:px-10 lg:py-4': size === 'xl' }]"
  >
    Télécharger sur Play Store
  </NuxtLink>
</template>
