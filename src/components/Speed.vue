<template>
  <div>
    <a href="#" @click.prevent="bpmDown">&#10134</a>
    {{ bpm.count }}
    <a href="#" @click.prevent="bpmUp">&#10133</a>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const bpm = reactive({ count: 120 })
const bpmUp = () => bpm.count++
const bpmDown = () => bpm.count <= 0 ? bpm.count = 0 : bpm.count--
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
