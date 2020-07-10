<template>
  <h1>{{ text }}</h1>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const text = ref('hello vue3!')

    return {
      text
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
