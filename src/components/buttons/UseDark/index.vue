<template>
  <button
    class="use-dark-btn"
    @click="onClickToggleDarkBtn"
  >
    <!-- Dark mode -->
    <Icon
      v-if="isDark"
      icon="ic:outline-dark-mode"
    />
    <!-- Light mode -->
    <Icon
      v-else
      icon="ic:outline-light-mode"
    />
  </button>
</template>
<script lang="ts">
export default {
  name: 'UseDarkBtn',
}
</script>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useDarkOption } from '@/types/system'

const isDark = useDark(useDarkOption)
const toggleDark = useToggle(isDark)

const onClickToggleDarkBtn = () => {
  toggleDark()
}
</script>
<style
  scoped
  lang="scss"
>
.use-dark-btn {
  @apply tw-inline-flex;
  @apply tw-text-3xl;

  span {
    transition: background 0.3s linear;
    @apply dark:tw-text-background-text-dark hover:tw-text-gray-500;
  }
}
</style>
