import { reactive } from 'vue'

export default ({ bpm, switcher }) => {
  const bpmValueUpdate = value => bpm.value = value

  const bpmUp = () => {
    if (switcher.on) {
      return
    }

    bpm.value++
  }

  const bpmDown = () => {
    if (switcher.on) {
      return
    } else if (bpm.value <= 0) {
      bpm.value = 0
    } else {
      bpm.value--
    }
  }

  return {
    bpmValueUpdate,
    bpmUp,
    bpmDown
  }
}
