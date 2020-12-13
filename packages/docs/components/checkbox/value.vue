<template>
  <pre>value: <code>{{ JSON.stringify(value, null, 0) }}</code></pre>

  <Flex gap="24px">
    <Checkbox v-model="value" :value="`string`">String</Checkbox>
    <Checkbox v-model="value" :value="123">Number</Checkbox>
    <Checkbox v-model="value" :value="['arr1', 'arr2']">Array</Checkbox>
    <Checkbox v-model="value" :value="true">Boolean</Checkbox>
    <Checkbox v-model="value" :value="{ key: 'value' }">Object</Checkbox>
  </Flex>

  <br>

  <pre>Invalid value: <code>{{ JSON.stringify(value2, null, 0) }}</code></pre>

  <Flex gap="24px">
    <Checkbox v-model="value2" :value="() => {}">Function</Checkbox>
    <Checkbox v-model="value2" :value="null">Null</Checkbox>
    <Checkbox v-model="value2" :value="[ new Map(), () => {} ]">Array</Checkbox>
    <Checkbox v-model="value2" :value="{ key: () => {} }">Object</Checkbox>
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
      value: ref([]),
      value2: ref([])
    }
  }
})
</script>
