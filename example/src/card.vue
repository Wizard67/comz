<template>
  <main>
    <div class="wrap">
      <Card></Card>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Card } from '@fe-tools/nui-ui'

export default {
  components: {
    Card
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

.wrap {
  width: 200px;
}
</style>
