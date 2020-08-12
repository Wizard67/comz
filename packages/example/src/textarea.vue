<template>
  <main>
    <Textarea
      v-model="value"
      readonly
    ></Textarea>

    <br>

    {{ value }}
  </main>
</template>

<script>
import { ref } from 'vue'
import { Textarea } from 'comz'

export default {
  components: {
    Textarea
  },
  setup() {
    const value = ref('ok')

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
}
</style>
