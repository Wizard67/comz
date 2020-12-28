<template>
  <Flex>
    <Flex inline>
      <Button @on-click="show1 = true">show 3000ms</Button>
      <Toast v-model:show="show1" :duration="3000">Toast 3000ms</Toast>
    </Flex>
    <Flex inline>
      <Button @on-click="show2 = true">toast 5000ms</Button>
      <Toast v-model:show="show2" :duration="5000">Toast 5000ms</Toast>
    </Flex>
  </Flex>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Flex, Button, Toast } from 'comz'

export default defineComponent({
  components: {
    Flex, Button, Toast
  },
  setup() {
    return {
      show1: ref(false),
      show2: ref(false)
    }
  }
})
</script>
