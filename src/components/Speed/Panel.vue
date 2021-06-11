<template>
  <div class="wrapper">
    <Slider @update="bpmValueUpdate" :hidden="switcher.on" />

    <div class="panel">
      <Control @update="bpmDown" icon="&#10134" :hidden="switcher.on" />
      <Counter />
      <Control @update="bpmUp" icon="&#10133" :hidden="switcher.on" />
    </div>

    <span class="switch" @click="switcherToggle" v-html="switcherIcon"></span>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import Control from './Control.vue'
import Counter from './Counter.vue'
import Slider from './Slider.vue'
import useBpm from '@/uses/bpm.js'
import useSwitcher from '@/uses/switcher.js'

const bpm = inject('bpm')
const switcher = inject('switcher')

const {
  bpmValueUpdate,
  bpmUp,
  bpmDown
} = useBpm({ bpm, switcher })

const {
  switcherIcon,
  switcherToggle
} = useSwitcher({ bpm, switcher })
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  justify-content: space-around;
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
