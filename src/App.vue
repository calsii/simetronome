<template>
  <SpeedPanel />
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
import SpeedPanel from './components/Speed/Panel.vue'
import { reactive, provide } from 'vue'

provide('bpm', reactive({
  value: 85,
  flash: false
}))

provide('switcher', reactive({
  on: false,
  timer: null
}))
</script>

<style>
#app {
  font-family:
  -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
  "Helvetica Neue", Arial, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  height: 100%;
}

body {
  background: hsl(0,0%,90%);
}

.hidden {
  visibility: hidden;
}
</style>
