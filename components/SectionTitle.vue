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
    <h2
      :class="['text-3xl lg:text-5xl font-bold lg:tracking-tight capitalize']"
    >
      <span
        :class="[
          'bg-clip-text text-transparent',
          dark ? 'bg-gradient-to-br from-white to-[#DFF6EC]' : 'bg-gradient-to-br from-black to-slate-600'
        ]"
      >
        <slot></slot>
      </span>
    </h2>
  </div>
</template>
