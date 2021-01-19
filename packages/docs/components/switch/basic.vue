<template>
  <Flex gap="64px">
    <Switch v-model="value"></Switch>
    <Switch v-model="value" disabled></Switch>
  </Flex>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { Flex, Switch } from 'comz'

export default defineComponent({
  components: {
    Flex,
    Switch
  },
  setup() {
    return {
      value: ref(false)
    }
  }
})
</script>
