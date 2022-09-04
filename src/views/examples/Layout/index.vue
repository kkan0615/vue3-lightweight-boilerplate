<template>
  <div
    class="tw-pt-32 tw-pb-24"
  >
    <div
      class="page-content tw-text-center tw-mb-4"
    >
      <router-link :to="{ name: 'HomeIndex' }">
        <div>
          Home
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
export default {
  name: 'ExampleLayout',
}
</script>
<script setup lang="ts">
</script>
