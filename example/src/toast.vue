<template>
  <main>
    <Toast v-model:show="show">toast</Toast>
    <!-- <Toast v-model:show="show">toasttoasttoasttoast</Toast>
    <Toast v-model:show="show">toasttoasttoasttoasttoasttoasttoasttoast</Toast> -->

    <br>

    <Button @click="show = true">Show Toast</Button>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Toast, Button } from '@fe-tools/nui-ui'

export default {
  components: {
    Toast, Button
  },
  setup() {
    const show = ref(false)

    return {
      show
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
