<template>
  <Flex wrap>
    <Button>one</Button>
    <Button>two</Button>
    <Button>three</Button>
    <Button>four</Button>
    <Button>five</Button>
    <Button>six</Button>
    <Button>seven</Button>
    <Button>eight</Button>
    <Button>nine</Button>
    <Button>ten</Button>
    <Button>eleven</Button>
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
