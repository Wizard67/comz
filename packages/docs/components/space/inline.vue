<template>
  some text
  <Space inline>
    <Button>one</Button>
    <Button>two</Button>
  </Space>
  some text
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
