<template>
  <div>
    <h1>
      Example Pinia
    </h1>
    <div>
      Current count: {{ exampleStore.count }}
    </div>
    <div>
      Double count: {{ exampleStore.DoubleCount }}
    </div>
    <div>
      <button
        @click="onClickIncreaseBtn"
      >
        increase
      </button>
      <button
        @click="onClickDecreaseBtn"
      >
        decrease
      </button>
    </div>
    <form
      @submit.prevent="onSubmitCountForm"
    >
      <input
        v-model="newCount"
        type="number"
      >
      <button
        type="submit"
      >
        submit
      </button>
    </form>
    <div>
      <router-link
        :to="{
          name: 'ExampleLayout'
        }"
      >
        Back to index
      </router-link>
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
