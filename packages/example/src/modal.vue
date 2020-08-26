<template>
  <main>
    <Button @on-click="() => showModal1 = true">closable modal</Button>

    <Modal
      v-model:show="showModal1"
      closable
    >
      closable modal
    </Modal>

    <br>

    <Button @on-click="() => showModal2 = true">non-closable modal</Button>

    <Modal
      v-model:show="showModal2"
    >
      non-closable modal
    </Modal>

    <br>

    <Button @on-click="() => showModal3 = true">custom modal footer</Button>

    <Modal
      v-model:show="showModal3"
    >
      <template #default>custom modal footer</template>
      <template #footer="{ close }">
        <Button
          @on-click="handleClose(close)"
          :loading="loading"
        >异步关闭</Button>
      </template>
    </Modal>

  </main>
</template>

<script>
import { ref } from 'vue'
import { Button, Modal } from 'comz'

export default {
  components: {
    Button, Modal
  },
  setup() {
    const loading = ref(false)

    const showModal1 = ref(false)
    const showModal2 = ref(false)
    const showModal3 = ref(false)

    const handleClose = close => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        close()
      }, 5000)
    }

    return {
      loading,
      showModal1,
      showModal2,
      showModal3,
      handleClose
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
