<template>
  <Space>
    <Button>默认状态</Button>
    <Button loading>加载状态</Button>
    <Button disabled>禁用状态</Button>
    <Button loading disabled>复合状态</Button>
  </Space>
</template>

<script>
import { defineComponent } from 'vue'
import { Space, Button } from 'comz'

export default defineComponent({
  components: {
    Space, Button
  }
})
</script>
