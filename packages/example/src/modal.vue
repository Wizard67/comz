<template>
  <main>
    <Button @on-click="handleClick">CLICK ME</Button>

    <Modal v-model:show="showModal">
      something here
    </Modal>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Button } from 'comz'
import { Modal } from 'comz'

export default {
  components: {
    Button, Modal
  },
  setup() {
    const showModal = ref(false)

    const handleClick = () => {
      showModal.value = true
    }

    return {
      showModal, handleClick
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
