<template>
  <Flex gap="16px" wrap>
    <Input class="input" v-model="value" placeholder="normal"></Input>
    <Input
      class="input"
      v-model="value"
      placeholder="disabled"
      disabled
    ></Input>
    <Input
      class="input"
      v-model="value"
      placeholder="readonly"
      readonly
    ></Input>
  </Flex>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Flex, Input } from 'comz'

export default defineComponent({
  components: {
    Flex,
    Input
  },
  setup() {
    return {
      value: ref('some text.')
    }
  }
})
</script>

<style scoped>
.input {
  width: 200px;
}
</style>
