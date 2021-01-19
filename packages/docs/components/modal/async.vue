<template>
  <Button @on-click="show = true">Show Modal</Button>

  <Modal v-model:show="show">
    <template #default>Modal</template>
    <template #footer="{ close }">
      <Button @on-click="handleClose(close)" :loading="loading"
        >异步关闭</Button
      >
    </template>
  </Modal>
</template>

<script>
import { ref } from 'vue'
import { Button, Modal } from 'comz'

export default {
  components: {
    Button,
    Modal
  },
  setup() {
    const show = ref(false)

    const loading = ref(false)
    const handleClose = (close) => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        close()
      }, 2000)
    }

    return {
      show,
      loading,
      handleClose
    }
  }
}
</script>
