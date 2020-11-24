<template>
  <Input v-model="value" placeholder="placeholder"></Input>
</template>

<script>
import { ref } from 'vue'
import { Input } from 'comz'

export default {
  components: {
    Input
  },
  setup() {
    const value = ref('')

    return {
      value
    }
  }
}
</script>