<template>
  <div>
    ExampleIndex
    <div>
      <router-link
        :to="{
          name: 'ExamplePinia'
        }"
      >
        Pinia Example page
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ExampleIndex',
}
</script>
<script setup lang="ts">
</script>
