<template>
  <div class="wrapper">
    <div class="panel">
      <Control @update="bpmDown" icon="&#10134" :disabled="switcher.on" />
      <Counter :bpm="bpm" />
      <Control @update="bpmUp" icon="&#10133" :disabled="switcher.on" />
    </div>

    <span class="switch" @click="switcherToggle" v-html="switcherIcon"></span>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Control from './Control.vue'
import Counter from './Counter.vue'

const bpm = reactive({
  value: 85,
  flash: false
})
const bpmUp = () => {
  if (switcher.on) {
    return
  }

  bpm.value++
}
const bpmDown = () => {
  if (switcher.on) {
    return
  } else if (bpm.value <= 0) {
    bpm.value = 0
  } else {
    bpm.value--
  }
}

const switcher = reactive({
  on: false,
  timer: null
})
const switcherIcon = computed(() => switcher.on ? '&#9724' : '&#9654')
const switcherToggle = () => {
  switcher.on = !switcher.on
  beeping(switcher)
}

const beeping = switcher => {
  bpm.flash = false

  if (switcher.on) {
    switcher.timer = window.setInterval(() => bpm.flash = !bpm.flash, 60.0 / bpm.value * 1000.0)
  } else {
    if (switcher.timer) {
      window.clearInterval(switcher.timer)
      switcher.timer = null
    }
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
