<template>
  <div
    class="tw-text-center page-content"
  >
    <form
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="textValue"
        class="tw-text-background-text"
      >
      <div>
        <button
          type="submit"
        >
          Submit
        </button>
        <button
          type="reset"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ExampleForm',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

const textValue = ref('')

const handleSubmit = () => {
  console.log('handleSubmit')
}
</script>
