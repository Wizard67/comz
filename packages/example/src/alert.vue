<template>
  <main>
    <Alert>Somen Text</Alert>

    <br>

    <Alert color="lightpink">Somen Text Somen Text</Alert>

    <br>

    <Alert color="lightpink">
      <template #pre>pre</template>
      <template #default>Somen Text Somen Text Somen Text Somen Text</template>
      <template #next>next</template>
    </Alert>

  </main>
</template>

<script>
import { ref } from 'vue'
import { Alert } from 'comz'

export default {
  components: {
    Alert
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
