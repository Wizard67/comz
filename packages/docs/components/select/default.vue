<template>
  <Select v-model="value" placeholder="something">
    <Option value="a_value" label="a_Label">A</Option>
    <Option value="b_value" label="b_Label">B</Option>
    <Option value="c_value" label="c_Label">C</Option>
  </Select>
</template>

<script>
import { ref } from 'vue'
import { Select, Option } from 'comz'

export default {
  components: {
    Select, Option
  },
  setup() {
    const value = ref('')

    return {
      value
    }
  }
}
</script>