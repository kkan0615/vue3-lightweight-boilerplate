<template>
  <div
    class="pinia-container page-content"
  >
    <div>
      Current count: {{ exampleStore.count }}
    </div>
    <div>
      Double count: {{ exampleStore.DoubleCount }}
    </div>
    <div
      class="pinia-container-action"
    >
      <button
        class="tw-bg-primary-main"
        @click="onClickIncreaseBtn"
      >
        increase
      </button>
      <button
        class="tw-bg-negative-500"
        @click="onClickDecreaseBtn"
      >
        decrease
      </button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ExamplePinia',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import useExampleStore from '@/store/modules/example'

const exampleStore = useExampleStore()

const newCount = ref(0)

const onClickIncreaseBtn = () => {
  exampleStore.increaseCount()
}

const onClickDecreaseBtn = () => {
  exampleStore.decreaseCount()
}

const onSubmitCountForm = () => {
  exampleStore.setCount(newCount.value)
  newCount.value = 0
}
</script>
<style
  lang="scss"
  scoped
>
@import "./index.scss";
</style>
