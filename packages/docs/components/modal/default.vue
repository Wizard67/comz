<template>
  <Button @on-click="show = true">Show Modal</Button>

  <Modal v-model:show="show" closable>
    Modal
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

    return {
      show
    }
  }
}
</script>
