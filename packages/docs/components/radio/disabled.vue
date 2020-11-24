<template>
  <Radio v-model="value" value="A" style="marginRight: 16px;" disabled>A</Radio>
  <Radio v-model="value" value="B" disabled>B</Radio>
</template>

<script>
import { ref } from 'vue'
import { Radio } from 'comz'

export default {
  components: {
    Radio
  },
  setup() {
    const value = ref('A')

    return {
      value
    }
  }
}
</script>
