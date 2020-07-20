<template>
  <main>
    <Button @on-click="handleClick">按钮 normal</Button>

    <br>

    <Button status="disabled" @on-click="handleClick">按钮 disabled</Button>

    <br>

    <Button status="loading" @on-click="handleClick">按钮 loading</Button>
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
