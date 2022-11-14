<template>
  <Dialog>
    <template
      #activator="{open}"
    >
      <button
        class="tw-text-3xl"
        @click="open"
      >
        <Icon icon="clarity:language-line" />
      </button>
    </template>
  </Dialog>
</template>
<script lang="ts">
export default {
  name: 'TranslateBtn',
}
</script>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Dialog from '@/components/buttons/Translation/components/Dialog.vue'

</script>
<style
    lang="scss"
    scoped
>

</style>
