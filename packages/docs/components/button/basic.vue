<template>
  <Flex>
    <Button>默认状态</Button>
    <Button loading>加载状态</Button>
    <Button disabled>禁用状态</Button>
    <Button loading disabled>复合状态</Button>
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
