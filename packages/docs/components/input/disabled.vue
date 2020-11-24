<template>
  <Input v-model="value" disabled></Input>
</template>

<script>
import { ref } from 'vue'
import { Input } from 'comz'

export default {
  components: {
    Input
  },
  setup() {
    const value = ref('hello')

    return {
      value
    }
  }
}
</script>