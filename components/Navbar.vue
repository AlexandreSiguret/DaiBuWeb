<script setup>
import { items } from '../nav.ts'
</script>

<template>
  <Container>
    <header class="bg-white flex justify-between items-center my-8 p-2 rounded-xl border-2 border-[#95E3B7]">
      <NuxtLink href="/" class="flex items-center justify-between text-lg flex gap-2">
        <img
          src="~/assets/img/logo.svg"
          alt="Logo"
          loading="eager"
          width="28"
          height="28"
        />
        <span class="font-bold text-slate-800">DAIBU</span>
      </NuxtLink>
      <nav
        class="flex sm:block hidden"
      >
        <ul class="flex gap-3">
          <li v-for="item of items">
            <NuxtLink
              :href="item.path"
              class="flex px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4">
        <CTA/>
      </div>
    </header>
  </Container>
</template>
