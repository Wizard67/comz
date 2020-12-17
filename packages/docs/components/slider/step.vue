<template>
  <Flex gap="16px" vertical>
    <Flex vertical>
      <div>value: {{value1}}</div>
      <Slider v-model="value1" :step="0.1" :min="0" :max="10"></Slider>
    </Flex>
    <Flex vertical>
      <div>value: {{value2}}</div>
      <Slider v-model="value2" :step="30"></Slider>
    </Flex>
  </Flex>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Flex, Slider } from 'comz'

export default defineComponent({
  components: {
    Flex, Slider
  },
  setup() {
    return {
      value1: ref(0),
      value2: ref(0)
    }
  }
})
</script>
