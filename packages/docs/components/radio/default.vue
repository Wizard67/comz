<template>
  <Radio v-model="value" value="A" style="marginRight: 16px;">A</Radio>
  <Radio v-model="value" value="B">B</Radio>
</template>

<script>
import { ref } from 'vue'
import { Radio } from 'comz'

export default {
  components: {
    Radio
  },
  setup() {
    const value = ref('')

    return {
      value
    }
  }
}
</script>
