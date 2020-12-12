<template>
  <pre>value: <code>{{ JSON.stringify(value, null, 0) }}</code></pre>

  <Flex gap="24px">
    <Radio v-model="value" :value="`string`">String</Radio>
    <Radio v-model="value" :value="123">Number</Radio>
    <Radio v-model="value" :value="['arr1', 'arr2']">Array</Radio>
    <Radio v-model="value" :value="true">Boolean</Radio>
    <Radio v-model="value" :value="{ key: 'value' }">Object</Radio>
  </Flex>

  <br>

  <pre>Invalid value: <code>{{ JSON.stringify(value2, null, 0) }}</code></pre>

  <Flex gap="24px">
    <Radio v-model="value2" :value="() => {}">Function</Radio>
    <Radio v-model="value2" :value="[ new Map(), () => {} ]">Array</Radio>
    <Radio v-model="value2" :value="{ key: () => {} }">Object</Radio>
  </Flex>
</template>

<script>
import { ref } from 'vue'
import { Flex, Radio } from 'comz'

export default {
  components: {
    Flex, Radio
  },
  setup() {
    return {
      value: ref(''),
      value2: ref('')
    }
  }
}
</script>
