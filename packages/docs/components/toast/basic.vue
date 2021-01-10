<template>
  <Flex>
    <Button @on-click="show = true">show toast</Button>
    <Toast v-model:show="show">Toast</Toast>
  </Flex>

  <br>

  <Flex>
    <Flex>
      <Button @on-click="info = true">info toast</Button>
      <Toast v-model:show="info" type="info">Info Toast</Toast>
    </Flex>
    <Flex>
      <Button @on-click="success = true">success toast</Button>
      <Toast v-model:show="success" type="success">Success Toast</Toast>
    </Flex>
    <Flex>
      <Button @on-click="warning = true">warning toast</Button>
      <Toast v-model:show="warning" type="warning">Warning Toast</Toast>
    </Flex>
    <Flex>
      <Button @on-click="error = true">error toast</Button>
      <Toast v-model:show="error" type="error">Error Toast</Toast>
    </Flex>
  </Flex>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Flex, Button, Toast } from 'comz'

export default defineComponent({
  components: {
    Flex, Button, Toast
  },
  setup() {
    return {
      show: ref(false),
      info: ref(false),
      success: ref(false),
      warning: ref(false),
      error: ref(false)
    }
  }
})
</script>
