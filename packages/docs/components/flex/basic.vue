<template>
  <Flex>
    <Button>one</Button>
    <Button>two</Button>
    <Button>three</Button>
  </Flex>

  <br />

  <Flex gap="30px">
    <Button>one</Button>
    <Button>two</Button>
    <Button>three</Button>
  </Flex>
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
