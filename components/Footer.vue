<script setup>
import { footerItems } from '../nav.ts'
</script>

<template>
  <footer>
    <div class="flex justify-center w-full bg-[#3A473F] py-16 gap-8 lg:gap-24">
      <NuxtLink href="/" class="flex items-center justify-between text-lg flex gap-2">
        <img
          src="~/assets/img/logo.svg"
          alt="Logo"
          loading="eager"
          width="28"
          height="28"
        />
        <span class="font-bold text-white">DAIBU</span>
      </NuxtLink>
      <CTA/>
    </div>
    <nav
      class="grid justify-center w-full bg-[#95E3B7] py-8 lg:py-16 gap-6 lg:gap-16"
    >
      <ul class="flex gap-3">
        <li v-for="item of footerItems">
          <NuxtLink
            :href="item.path"
            class="flex mx-6 text-gray-600 hover:text-gray-900"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <p class="text-center text-sm text-slate-500">
        © Copyright {{ new Date().getFullYear() }} - DaiBu
      </p>
    </nav>
  </footer>
</template>
