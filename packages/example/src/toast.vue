<template>
  <main>
    <Toast v-model:show="show1">toast</Toast>
    <Toast v-model:show="show2">
      <Space gap="6px">
        <Icon><AlertCircle/></Icon>
        toasttoasttoasttoasttoast
      </Space>
    </Toast>

    <br>

    <Space>
      <Button @click="show1 = true">Show1</Button>
      <Button @click="show2 = true">Show2</Button>
    </Space>
    <br>
    <Space>
      <Button @click="() => {
        show1 = true
        show2 = true
      }">Show All</Button>
    </Space>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Toast, Space, Button, Icon } from 'comz'
import { AlertCircle } from '@comz/icons'

export default {
  components: {
    Toast, Space, Button, Icon, AlertCircle
  },
  setup() {
    const show1 = ref(false)
    const show2 = ref(false)

    return {
      show1,
      show2
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
