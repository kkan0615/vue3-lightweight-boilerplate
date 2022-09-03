<template>
  <button
    @click="onClickOpen"
  >
    <span class="material-symbols-outlined">
      translate
    </span>
  </button>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="modal"
    >
      <ul>
        <li
          v-for="supportedLang in supportedLangList"
          :key="supportedLang"
          @click="changeLocale(supportedLang)"
        >
          {{ supportedLang }}
        </li>
      </ul>
      <button @click="closeModal">
        Close
      </button>
    </div>
  </Teleport>
</template>
<script lang="ts">
export default {
  name: 'TranslateBtn',
}
</script>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNavigatorLanguage } from '@vueuse/core'
import { SupportedLang, supportedLangList } from '@/types/system'
import { ref } from 'vue'
import useSettingStore from '@/store/modules/setting'

const i18n = useI18n()
const settingStore = useSettingStore()

const isOpen = ref(false)

const onClickOpen = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

const changeLocale = (lang: SupportedLang | 'preference') => {
  settingStore.setLang(lang)
}

</script>
<style
    lang="scss"
    scoped
>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
