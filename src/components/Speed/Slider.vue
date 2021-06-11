<template>
  <div class="slider" :class="{ hidden }">
    <label id="slider-label" class="slider-label isRight"></label>
    <input
      id="slider-input"
      class="slider-input"
      type="range"
      min="30"
      :value="bpm.value"
      max="300"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { inject, defineEmit } from 'vue'

const bpm = inject('bpm')

const props = defineProps({
  hidden: Boolean
})

const emit = defineEmit(['update'])
</script>

<style scoped>
/*style from https://css-tricks.com/value-bubbles-for-range-inputs*/

/* Number slider ------------------- */

.slider {
  position: relative;
  display: inline-block;
  margin: -4px 6px 0 0;
}


/* Label ------------------- */

.slider-label {
  position: absolute;
  z-index: 1;
  top: 4px;
  font-size: 11px;
  color: hsla(0,0%,0%,0);
  pointer-events: none;
  transition: transform .2s cubic-bezier(.26,.08,.15,1), color .6s .6s ease-out;
}

.slider-label.isRight {
  right: 50%;
  margin-right: -20px;
  left: auto;
  transform: translateX(20px);
}
.slider-label.isLeft {
  right: auto;
  margin-left: -20px;
  left: 50%;
  transform: translate(-20px);
}

.slider:active .slider-label {
  color: hsla(0,0%,0%,.7);
  transition-delay: 0;
}


/* Input ------------------- */

.slider-input {
  appearance: none;
  position: relative;
  vertical-align: middle;
  width: 80%;
  border-radius: 20px;
  background: hsl(0,0%,80%);
  box-shadow: 0 1px 0 hsla(0,0%,100%,.6);
  overflow: hidden;
}

.slider-input::-webkit-slider-thumb,
.slider-input::slider-thumb {
  appearance: none;
  border-radius: 20px;
  width: 20px;
  height: 20px;
  border: 5px solid hsl(0,0%,80%);
  cursor: pointer;
  background: hsl(0,0%,40%);
  box-shadow: inset 0 1px 2px hsla(0,0%,0%,.4);
  transition: border-width .2s cubic-bezier(.26, .08, .15, 1);
}

.slider-input:active::-webkit-slider-thumb,
.slider-input:active::slider-thumb {
  border: 0px solid hsl(0,0%,80%);
  transition-duration: .1;
}
</style>
