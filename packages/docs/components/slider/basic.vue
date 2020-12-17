<template>
  <Flex gap="16px" vertical>
    <Slider v-model="value1"></Slider>
    <Slider v-model="value2"></Slider>
    <Slider v-model="value3" disabled></Slider>
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
      value3: ref(30)
    }
  }
})
</script>
