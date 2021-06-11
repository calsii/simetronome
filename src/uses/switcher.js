import { reactive, computed } from 'vue'
import sound from '@/assets/mixkit-positive-interface-beep-221.wav'

const audio = new window.Audio(sound)

const beepingEffect = bpm => {
  bpm.flash = !bpm.flash

  if (bpm.flash) {
    audio.play()
  } else {
    audio.pause()
  }
}

const beeping = ({ switcher, bpm }) => {
  bpm.flash = false
  audio.pause()

  if (switcher.on) {
    switcher.timer = window.setInterval(() => beepingEffect(bpm), 60.0 / bpm.value * 1000.0)
  } else {
    if (switcher.timer) {
      window.clearInterval(switcher.timer)
      switcher.timer = null
    }
  }
}

export default ({ bpm, switcher }) => {
  const switcherIcon = computed(() => switcher.on ? '&#9724' : '&#9654')

  const switcherToggle = () => {
    switcher.on = !switcher.on
    beeping({ switcher, bpm })
  }

  return {
    switcherIcon,
    switcherToggle
  }
}
