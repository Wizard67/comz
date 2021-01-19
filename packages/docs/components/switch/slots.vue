<template>
  <Flex gap="16px" flow="column">
    <Switch v-model="value">
      <template #prepend
        ><Icon><EmojiFrown /></Icon
      ></template>
      <template #append
        ><Icon><EmojiSmile /></Icon
      ></template>
    </Switch>

    <Switch v-model="value1">
      <template #append>Allow</template>
    </Switch>
  </Flex>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Flex, Switch, Icon } from 'comz'
import { EmojiSmile, EmojiFrown } from '@comz/icons'

export default defineComponent({
  components: {
    Flex,
    Switch,
    Icon,
    EmojiSmile,
    EmojiFrown
  },
  setup() {
    return {
      value: ref(true),
      value1: ref(false)
    }
  }
})
</script>
