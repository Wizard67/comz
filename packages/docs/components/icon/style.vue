<template>
  <Flex>
    <Icon size="20px"><EmojiLaughingFill /></Icon>
    <Icon color="#348ec7"><EmojiLaughingFill /></Icon>
    <Icon link><EmojiLaughingFill /></Icon>
  </Flex>
</template>

<script>
import { defineComponent } from 'vue'
import { Flex, Icon } from 'comz'
import { EmojiLaughingFill } from '@comz/icons'

export default defineComponent({
  components: {
    Flex,
    Icon,
    EmojiLaughingFill
  }
})
</script>
