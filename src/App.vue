<template>
  <div>
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { initTheme } from '@/utils/theme'

/* Initialize theme (dark or light) */
initTheme()
</script>
<style>
</style>
