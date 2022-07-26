<template>
  <div>
    <button
      @click="onClickTestBtn"
    >
      {{ settingStore.Lang }}
    </button>
    <router-view />
  </div>
</template>
<script setup lang="ts">
import useSettingStore from '@/store/modules/setting'

const settingStore = useSettingStore()

/* Initialize Setting */
settingStore.initSetting()

const onClickTestBtn = () => {
  settingStore.setLang(settingStore.Lang === 'ko' ? 'en' : 'ko')
}
</script>
<style>
</style>
