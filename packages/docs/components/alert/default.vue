<template>
  <Alert v-model:show="show1">Some Text</Alert>
  <br>
  <Alert v-model:show="show2" color="#348ec7">Some Text</Alert>
</template>

<script>
import { ref } from 'vue'
import { Alert } from 'comz'

export default {
  components: {
    Alert
  },
  setup() {
    const show1 = ref(true)
    const show2 = ref(true)

    return {
      show1, show2
    }
  }
}
</script>
