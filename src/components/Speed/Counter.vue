<template>
  <div class="counter" :class="{ flash: bpm.flash }">
    <span class="counter-value">{{ bpm.value }}</span>
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
  text-shadow: #FC0 1px 0 10px;
}
</style>
