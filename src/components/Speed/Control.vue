<template>
  <a href="#" @click.prevent="$emit('update')">{{ icon }}</a>
</template>

<script setup>
import { defineProps, defineEmit } from 'vue'

const props = defineProps({
  icon: String
})

const emit = defineEmit(['update'])
</script>

<style scoped>
a {
  font-size: 3rem;
  text-decoration: none;
}
</style>
