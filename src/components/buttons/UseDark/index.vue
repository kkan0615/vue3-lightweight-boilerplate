<template>
  <button
    class="use-dark-btn"
    @click="onClickToggleDarkBtn"
  >
    {{ isDark ? 'Dark' : 'Light' }}
  </button>
</template>
<script lang="ts">
export default {
  name: 'UseDarkBtn',
}
</script>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
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
  transition: background 0.3s linear;
  @apply tw-bg-primary-main tw-px-4 tw-py-2 tw-text-primary-text tw-rounded hover:tw-bg-gray-500;
}
</style>
