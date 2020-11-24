<template>
  <Button @on-click="show = true">show toast</Button>
  <Toast v-model:show="show">Toast</Toast>
</template>

<script>
import { ref } from 'vue'
import { Button, Toast } from 'comz'

export default {
  components: {
    Button, Toast
  },
  setup() {
    const show = ref(false)

    return {
      show
    }
  }
}
</script>
