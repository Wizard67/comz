<template>
  <Checkbox v-model="value" value="A" style="marginRight: 16px;" disabled>A</Checkbox>
  <Checkbox v-model="value" value="B" disabled>B</Checkbox>
</template>

<script>
import { ref } from 'vue'
import { Checkbox } from 'comz'

export default {
  components: {
    Checkbox
  },
  setup() {
    const value = ref(['A'])

    return {
      value
    }
  }
}
</script>
