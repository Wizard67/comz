<template>
  <Flex gap="16px" vertical>
    <Flex inline>
      <Button>
        <Icon><EmojiSmileFill/></Icon>Smile
      </Button>

      <Button>
        <Icon><Gem/></Icon>Gem<Icon><Gem/></Icon>
      </Button>

      <Button>
        Heart<Icon><HeartFill/></Icon>
      </Button>
    </Flex>

    <Flex inline>
      <Button type="primary">
        <Icon><EmojiSmileFill/></Icon>Smile
      </Button>

      <Button type="primary">
        <Icon><Gem/></Icon>Gem<Icon><Gem/></Icon>
      </Button>

      <Button type="primary">
        Heart<Icon><HeartFill/></Icon>
      </Button>
    </Flex>

    <Flex inline>
      <Button type="text">
        <Icon><EmojiSmileFill/></Icon>Smile
      </Button>

      <Button type="text">
        <Icon><Gem/></Icon>Gem<Icon><Gem/></Icon>
      </Button>

      <Button type="text">
        Heart<Icon><HeartFill/></Icon>
      </Button>
    </Flex>
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
