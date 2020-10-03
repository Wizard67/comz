<template>
  <main>
    <Ruler grid></Ruler>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Ruler } from 'comz'

export default {
  components: {
    Ruler
  },
  setup() {
    const value = ref(false)

    return {
      value
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
  padding: 0;
}
</style>
