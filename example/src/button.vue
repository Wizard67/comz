<template>
  <main>
    <Button
      type="red"
      @on-click="handleClick"
    >
      BUTTON
    </Button>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Button } from '@fe-tools/nui-ui'

export default {
  components: {
    Button
  },
  setup() {
    const handleClick = () => console.log('listen button click')

    return {
      handleClick
    }
  }
}
</script>

<style>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
