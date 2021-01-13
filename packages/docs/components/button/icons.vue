<template>
  <Flex gap="16px" flow="column">
    <Flex>
      <Button>
        <Flex gap="4px">
          <Icon><EmojiSmileFill/></Icon>Smile
        </Flex>
      </Button>

      <Button>
        <Flex gap="4px">
          <Icon><Gem/></Icon>Gem<Icon><Gem/></Icon>
        </Flex>
      </Button>

      <Button>
        <Flex gap="4px">
          Heart<Icon><HeartFill/></Icon>
        </Flex>
      </Button>
    </Flex>

    <Flex>
      <Button type="primary">
        <Flex gap="4px">
          <Icon><EmojiSmileFill/></Icon>Smile
        </Flex>
      </Button>

      <Button type="primary">
        <Flex gap="4px">
          <Icon><Gem/></Icon>Gem<Icon><Gem/></Icon>
        </Flex>
      </Button>

      <Button type="primary">
        <Flex gap="4px">
          Heart<Icon><HeartFill/></Icon>
        </Flex>
      </Button>
    </Flex>

    <Flex>
      <Button type="text">
        <Flex gap="4px">
          <Icon><EmojiSmileFill/></Icon>Smile
        </Flex>
      </Button>

      <Button type="text">
        <Flex gap="4px">
          <Icon><Gem/></Icon>Gem<Icon><Gem/></Icon>
        </Flex>
      </Button>

      <Button type="text">
        <Flex gap="4px">
          Heart<Icon><HeartFill/></Icon>
        </Flex>
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
