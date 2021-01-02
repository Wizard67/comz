<template>
  <Flex>
    <Button>
      <Icon><EmojiSmileFill/></Icon>Smile
    </Button>

    <Button>
      <Icon><Gem/></Icon>Gem<Icon><Gem/></Icon>
    </Button>

    <Button>
      Heart<Icon><HeartFill></Icon>
    </Button>
  </Flex>
</template>

<script>
import { defineComponent } from 'vue'
import { Flex, Button, Icon } from 'comz'
import { EmojiSmileFill, Gem, HeartFill } from '@comz/icons'

export default defineComponent({
  components: {
    Flex,
    Button,
    Icon, EmojiSmileFill, Gem, HeartFill,
  }
})
</script>
