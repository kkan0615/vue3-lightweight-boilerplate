<template>
  <slot
    name="activator"
    :open="handleOpen"
  />
  <dialog
    ref="dialogEl"
    class="translate-btn-dialog"
    @click="handleClose"
  >
    <div
      @click.stop
    >
      <div
        class="translate-btn-dialog-header"
      >
        <h6>
          {{ t('commons.titles.language') }}
        </h6>
        <button
          class="tw-ml-auto tw-text-2xl"
          @click="handleClose"
        >
          <Icon icon="carbon:close" />
        </button>
      </div>
      <div
        class="translate-btn-dialog-body"
      >
        <ul
          class="translate-btn-dialog-body-list"
        >
          <li
            v-for="supportedLang in supportedLangList"
            :key="supportedLang"
            class="translate-btn-dialog-body-list-item"
            :class="{
              'translate-btn-dialog-body-list-item--active': lang === supportedLang,
            }"
            @click="changeLocale(supportedLang)"
          >
            {{ supportedLang }}
          </li>
        </ul>
      </div>
    </div>
  </dialog>
</template>
<script lang="ts">
export default {
  name: 'TranslateBtnDialog',
}
</script>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { SupportedLang, supportedLangList } from '@/types/system'
import useSettingStore from '@/store/modules/setting'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const settingStore = useSettingStore()
const { lang } = storeToRefs(settingStore)

const dialogEl = ref<HTMLDialogElement | null>(null)

const changeLocale = (lang: SupportedLang) => {
  settingStore.setLang(lang)
  locale.value = lang
}

const handleOpen = () => {
  dialogEl.value?.showModal()
}

const handleClose = () => {
  dialogEl.value?.close()
}

</script>
<style
    lang="scss"
    scoped
>
@import "./dialog.scss";
</style>
