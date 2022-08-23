<template>
  <div
    class="home-container"
  >
    <div
      class="home-container-content page-content"
    >
      <!-- Logo -->
      <div
        class="home-container-content__logo"
      >
        <img
          src="@/assets/logo.png"
          alt="logo"
        >
      </div>
      <h6>
        {{ i8n.t('Views.Home.projectName') }}
      </h6>
      <div
        class="home-container-button-container"
      >
        <a
          target="_blank"
          href="https://github.com/kkan0615/vue3-lightweight-boilerplate"
        >
          <button
            class="github-btn"
          >
            <github-icon
              class="tw-w-4"
            />
            <span>
              github
            </span>
          </button>
        </a>
      </div>
    </div>
    <!-- Feature -->
    <div
      class="page-content"
    >
      <h6
        class="dark:tw-text-gray-400 tw-text-gray-600 tw-mb-2"
      >
        Feature
      </h6>
      <div
        class="tw-grid tw-grid-cols-2 tw-gap-8"
      >
        <feature-card
          v-for="feature in featureList"
          :key="feature.id"
        >
          <feature-card-icon>
            {{ feature.icon }}
          </feature-card-icon>
          <feature-card-item>
            <feature-card-header>
              {{ feature.title }}
            </feature-card-header>
            <feature-card-body>
              {{ feature.content }}
            </feature-card-body>
          </feature-card-item>
        </feature-card>
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
import { useHead } from '@vueuse/head'
import GithubIcon from '@/components/icons/github.vue'
import { featureList } from '@/types/models/views/feature'
import FeatureCard from '@/views/homes/Home/components/FeatureCard.vue'
import FeatureCardIcon from '@/views/homes/Home/components/FeatureCardIcon.vue'
import FeatureCardItem from '@/views/homes/Home/components/FeatureCardItem.vue'
import FeatureCardHeader from '@/views/homes/Home/components/FeatureCardHeader.vue'
import FeatureCardBody from '@/views/homes/Home/components/FeatureCardBody.vue'

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

