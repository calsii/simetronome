<template>
  <div class="counter" :style="flashColor">
    <span class="counter-value">{{ bpm.value }}</span>
    <span class="counter-text">bpm</span>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  bpm: Object
})

const colors = ['red', 'green', 'blue']
const getRandomInt = max => Math.floor(Math.random() * max)
const getRandomColors = () => (colors[getRandomInt(colors.length)])

const flashColor = computed(() => {
  if (!props.bpm.flash) {
    return false
  }

  const color = getRandomColors()
  return {
    color,
    textShadow: `${color} 5px 1px 10px`
  }
})
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counter-value {
  font-size: 10rem;
}

.counter-text {
  font-size: 3rem;
}
</style>
