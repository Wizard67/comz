<template>
  <Flex gap="16px" flow="column">
    <Flex flow="column">
      <div>value: {{value1}}</div>
      <Slider v-model="value1" :min="0" :max="50"></Slider>
    </Flex>
    <Flex flow="column">
      <div>value: {{value2}}</div>
      <Slider v-model="value2" :min="50" :max="100"></Slider>
    </Flex>
    <Flex flow="column">
      <div>value: {{value3}}</div>
      <Slider v-model="value3" :min="-50" :max="50"></Slider>
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
      value2: ref(50),
      value3: ref(0)
    }
  }
})
</script>
