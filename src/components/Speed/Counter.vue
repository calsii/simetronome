<template>
  <div class="counter">
    <span class="counter-value">{{ value }}</span>
    <span class="counter-text">bpm</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  value: Number
})
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counter-value {
  font-size: 15rem;
}

.counter-text {
  font-size: 3rem;
}
</style>
