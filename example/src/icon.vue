<template>
  <main>
    <div>
      <Ad>HELLO</Ad>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
// import { Icons } from '@fe-tools/nui-ui'
import { Ad } from '@fe-tools/nui-ui'

// const { ad } = Icons

export default {
  components: {
    Ad
  },
  setup() {
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
