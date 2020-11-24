<template>
  <Checkbox v-model="value" value="A" style="marginRight: 16px;">A</Checkbox>
  <Checkbox v-model="value" value="B">B</Checkbox>
</template>

<script>
import { ref } from 'vue'
import { Checkbox } from 'comz'

export default {
  components: {
    Checkbox
  },
  setup() {
    const value = ref([])

    return {
      value
    }
  }
}
</script>
