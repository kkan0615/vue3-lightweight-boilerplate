<template>
  <div
    class="home-container"
  >
    <div
      class="home-container-content page-content"
    >
      <div
        class="home-container-content__logo"
      >
        <img
          src="@/assets/logo.png"
          alt="logo"
        >
      </div>
      <h1
        class="home-container-content__title"
      >
        {{ i8n.t('Views.Home.Title') }}
      </h1>
      <div>
        d
        <use-dark-btn />
      </div>
      <div
        class="home-container-content-introduction-grid"
      >
        <div
          class="tw-p-2 tw-border tw-rounded"
        >
          <router-link
            :to="{
              name: 'ExampleLayout'
            }"
          >
            <h5
              class="tw-font-bold tw-text-2xl tw-tracking-tight tw-mb-2"
            >
              Example
            </h5>
            <div
              class="tw-text-gray-700"
            >
              Move to example page
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'HomeIndex',
}
</script>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import UseDarkBtn from '@/components/buttons/UseDark/index.vue'
import { useHead } from '@vueuse/head'

const i8n = useI18n()

/* Change head */
useHead({
  // Can be static or computed
  title: 'Vite app - Home',
  meta: [
    {
      name: 'description',
      content: 'Home page at Vite app',
    },
  ],
})
</script>
<style
  lang="scss"
>
@import "./index.scss";
</style>
