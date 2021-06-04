<template>
  <div class="wraper">
    <Control @update="bpmDown" icon="&#10134" />
    <Counter :value="bpm.value" />
    <Control @update="bpmUp" icon="&#10133" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Control from './Control.vue'
import Counter from './Counter.vue'

const bpm = reactive({ value: 120 })
const bpmUp = () => bpm.value++
const bpmDown = () => bpm.value <= 0 ? bpm.value = 0 : bpm.value--
</script>

<style scoped>
.wraper {
  padding: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
