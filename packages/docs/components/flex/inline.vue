<template>
  some text
  <Flex inline>
    <Button>one</Button>
    <Button>two</Button>
  </Flex>
  some text
</template>

<script>
import { defineComponent } from 'vue'
import { Flex, Button } from 'comz'

export default defineComponent({
  components: {
    Flex,
    Button
  }
})
</script>
