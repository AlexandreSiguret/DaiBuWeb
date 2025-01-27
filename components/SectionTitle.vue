<script setup lang="ts">
interface Props {
  dark?: boolean;
}

withDefaults(defineProps<Props>(), {
  dark: false,
});
</script>

<template>
  <div class="text-center">
    <p class="text-md lg:text-lg text-[#95E3B7] uppercase">
      <slot name="name"></slot>
    </p>
    <h2 :class="['text-3xl text-black lg:text-5xl font-bold lg:tracking-tight capitalize', { 'text-white': dark }]">
      <slot></slot>
    </h2>
  </div>
</template>
