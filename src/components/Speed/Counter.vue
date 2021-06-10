<template>
  <div class="counter">
    <span class="counter-value" :class="{ flash: bpm.flash }">{{ bpm.value }}</span>
    <span class="counter-text">bpm</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  bpm: Object
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

.flash {
  color: palevioletred;
}
</style>
