<template>
  <Space>
    <Button>one</Button>
    <Button>two</Button>
    <Button>three</Button>
  </Space>

  <br>

  <Space gap="30px">
    <Button>one</Button>
    <Button>two</Button>
    <Button>three</Button>
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
