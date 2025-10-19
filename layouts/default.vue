<template>
  <SoftGradientBg />
  <Navbar></Navbar>
  <slot></slot>
  <Footer></Footer>
</template>
<script setup>
import SoftGradientBg from '~/components/SoftGradientBg.vue'
</script>
