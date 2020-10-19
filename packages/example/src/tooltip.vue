<template>
  <main>
    <Tooltip
      v-if="state"
      text="there is some text here. there is some text here"
      :placement="placement"
    >
      <Button>BUTTON</Button>
    </Tooltip>


    <br>
    <br>
    
    <Button @on-click="toggle">Toggle state</Button>
    <br>
    <Button @on-click="togglePlacement">Toggle Placement: {{ placement }}</Button>

  </main>
</template>

<script>
import { ref } from 'vue'
import { Tooltip, Button } from 'comz'
import { useToggle } from '@comz/vca'

export default {
  components: {
    Tooltip, Button
  },
  setup() {
    const { state, toggle } = useToggle(true)
    const placementMaps = [
      'top-start', 'top', 'top-end',
      'right-start', 'right', 'right-end',
      'bottom-start', 'bottom', 'bottom-end',
      'left-start', 'left', 'left-end'
    ]

    let index = 7
    const placement = ref('bottom')
    const togglePlacement = () => {
      placement.value = placementMaps[(++index) % 12]
    }

    return {
      state, toggle,
      placement, togglePlacement
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
