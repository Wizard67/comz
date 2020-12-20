<template>
  <Flex gap="160px">
    <Flex gap="24px" inline>
      <Checkbox v-model="value" value="A">A</Checkbox>
      <Checkbox v-model="value" value="B">B</Checkbox>
    </Flex>
    <Flex gap="24px" inline>
      <Checkbox v-model="value" value="A" disabled>A</Checkbox>
      <Checkbox v-model="value" value="B" disabled>B</Checkbox>
    </Flex>
  </Flex>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Flex, Checkbox } from 'comz'

export default defineComponent({
  components: {
    Flex, Checkbox
  },
  setup() {
    return {
      value: ref([])
    }
  }
})
</script>
