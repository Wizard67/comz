<template>
  <main>
    {{ hello }}
  </main>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const hello = ref('hello')

    return {
      hello
    }
  }
})
</script>

<style>

</style>