<template>
  <Flex gap="160px">
    <Flex gap="24px">
      <Radio v-model="value" value="A">A</Radio>
      <Radio v-model="value" value="B">B</Radio>
    </Flex>

    <Flex gap="24px">
      <Radio v-model="value" value="A" disabled>A</Radio>
      <Radio v-model="value" value="B" disabled>B</Radio>
    </Flex>
  </Flex>
</template>

<script>
import { ref } from 'vue'
import { Flex, Radio } from 'comz'

export default {
  components: {
    Flex,
    Radio
  },
  setup() {
    return {
      value: ref('A')
    }
  }
}
</script>
