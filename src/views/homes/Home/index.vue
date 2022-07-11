<template>
  <div>
    HomeIndex
    <div>
      <router-link
        :to="{
          name: 'ExampleLayout'
        }"
      >
        Example page
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'HomeIndex',
}
</script>
<script setup lang="ts">
</script>
