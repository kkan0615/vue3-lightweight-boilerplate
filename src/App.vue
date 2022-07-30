<template>
  <div>
    <router-view />
  </div>
</template>
<script setup lang="ts">
import useSettingStore from '@/store/modules/setting'

const settingStore = useSettingStore()

/* Initialize Setting */
settingStore.initSetting()
</script>
<style>
</style>
