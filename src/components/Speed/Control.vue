<template>
  <a href="#" :class="{ hidden }" @click.prevent="$emit('update')">{{ icon }}</a>
</template>

<script setup>
import { defineProps, defineEmit } from 'vue'

const props = defineProps({
  icon: String,
  hidden: Boolean
})

const emit = defineEmit(['update'])
</script>

<style scoped>
a {
  font-size: 3rem;
  text-decoration: none;
}
</style>
