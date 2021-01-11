<template>
  <Flex gap="32px" wrap>
    <Flex>
      <Button>button</Button>
      <Button>button</Button>
      <Button>button</Button>
    </Flex>

    <Flex>
      <Button>button</Button>
      <Button>button</Button>
      <Button>button</Button>
    </Flex>

    <Flex>
      <Button>button</Button>
      <Button>button</Button>
      <Button>button</Button>
    </Flex>
  </Flex>
</template>

<script>
import { defineComponent } from 'vue'
import { Flex, Button } from 'comz'

export default defineComponent({
  components: {
    Flex, Button
  }
})
</script>
