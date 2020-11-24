<template>
  <Textarea
    v-model="value"
    placeholder="something"
  ></Textarea>
</template>

<script>
import { ref } from 'vue'
import { Textarea } from 'comz'

export default {
  components: {
    Textarea
  },
  setup() {
    const value = ref('')

    return {
      value
    }
  }
}
</script>
