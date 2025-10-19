<script setup>
import { footerItems } from '../nav.ts'
</script>

<template>
  <footer>
    <div class="flex justify-center w-full py-16 gap-8 lg:gap-24 text-white">
      <NuxtLink href="/" class="flex items-center justify-between text-lg flex gap-2">
        <img
          src="/img/logo.svg"
          alt="Logo"
          loading="eager"
          width="28"
          height="28"
        />
        <span class="font-bold">DAIBU</span>
      </NuxtLink>
      <CTA/>
    </div>
    <nav
      class="grid justify-center w-full py-8 lg:py-16 gap-6 lg:gap-16 text-white"
    >
      <ul class="flex gap-3">
        <li v-for="item of footerItems">
          <NuxtLink
            :href="item.path"
            class="flex mx-6 text-white/70 hover:text-white"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <p class="text-center text-sm text-white/60">
        © Copyright {{ new Date().getFullYear() }} - DaiBu
      </p>
    </nav>
  </footer>
</template>
