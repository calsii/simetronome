<template>
  <div class="wrapper">
    <div class="panel">
      <Control @update="bpmDown" icon="&#10134" />
      <Counter :value="bpm.value" />
      <Control @update="bpmUp" icon="&#10133" />
    </div>

    <span class="switch" @click="switchToggle" v-html="switchIcon"></span>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Control from './Control.vue'
import Counter from './Counter.vue'

const bpm = reactive({ value: 85 })
const bpmUp = () => bpm.value++
const bpmDown = () => bpm.value <= 0 ? bpm.value = 0 : bpm.value--

const switchStatus = reactive({ on: false })
const switchIcon = computed(() => switchStatus.on ? '&#9724' : '&#9654')
const switchToggle = () => switchStatus.on = !switchStatus.on

const beeping = () => {
  if (switchStatus.on) {

  } else {

  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.switch:hover {
  cursor: pointer;
}

.switch {
  font-size: 4rem;
}

.panel {
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
