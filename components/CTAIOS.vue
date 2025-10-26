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
    href="https://apps.apple.com/fr/app/daibu-daily-budget/id6740541346"
    target="_blank"
    :class="['rounded font-bold text-center text-darkbg bg-[#95E3B7] rounded-lg px-4 py-2 hover:bg-[#8ad4aa]',
      { 'lg:text-3xl lg:px-10 lg:py-4': size === 'xl' }]"
  >
    Télécharger sur App Store
  </NuxtLink>
</template>
