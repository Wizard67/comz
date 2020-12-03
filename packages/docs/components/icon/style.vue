<template>
  <Space>
    <Icon size="20px"><EmojiLaughingFill/></Icon>
    <Icon color="#348ec7"><EmojiLaughingFill/></Icon>
    <Icon link><EmojiLaughingFill/></Icon>
  </Space>
</template>

<script>
import { defineComponent } from 'vue'
import { Space, Icon } from 'comz'
import { EmojiLaughingFill } from '@comz/icons'

export default defineComponent({
  components: {
    Space, Icon,
    EmojiLaughingFill
  }
})
</script>
