<template>
  <pre>value: {{ value }}</pre>

  <Flex gap="32px" wrap>
    <Flex inline>
      <Select class="select" v-model="value" placeholder="Select">
        <Option label="Apple" value="1">🍎 Apple</Option>
        <Option label="Banana" value="2">🍌 Banana</Option>
        <Option label="Cherry" value="3">🍒 Cherry</Option>
      </Select>
    </Flex>

    <Flex inline>
      <Select class="select" v-model="value" placeholder="Select">
        <Option label="Apple" value="1" disabled>🍎 Apple</Option>
        <Option label="Banana" value="2" disabled>🍌 Banana</Option>
        <Option label="Cherry" value="3">🍒 Cherry</Option>
      </Select>
    </Flex>

    <Flex inline>
      <Select class="select" v-model="value" placeholder="Select" disabled>
        <Option label="Apple" value="1">🍎 Apple</Option>
        <Option label="Banana" value="2">🍌 Banana</Option>
        <Option label="Cherry" value="3">🍒 Cherry</Option>
      </Select>
    </Flex>
  </Flex>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Flex, Select, Option } from 'comz'

export default defineComponent({
  components: {
    Flex, Select, Option
  },
  setup() {
    return {
      value: ref('')
    }
  }
})
</script>

<style scoped>
.select {
  width: 100px;
}
</style>