<template>
  <Flex gap="16px" vertical>
    <Flex inline>
      <Button>默认状态</Button>
      <Button danger>危险警示</Button>
      <Button loading>加载状态</Button>
      <Button disabled>禁用状态</Button>
    </Flex>

    <Flex inline>
      <Button type="primary">默认状态</Button>
      <Button type="primary" danger>危险警示</Button>
      <Button type="primary" loading>加载状态</Button>
      <Button type="primary" disabled>禁用状态</Button>
    </Flex>

    <Flex inline>
      <Button type="text">默认样式</Button>
      <Button type="text" danger>危险警示</Button>
      <Button type="text" loading>加载状态</Button>
      <Button type="text" disabled>禁用状态</Button>
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
