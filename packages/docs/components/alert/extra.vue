<template>
  <Alert v-model:show="show">
    <template #default>Some Text</template>
    <template #extra="{ close }">
      <div @click="close">Close</div>
    </template>
  </Alert>
</template>

<script>
import { ref } from 'vue'
import { Alert } from 'comz'

export default {
  components: {
    Alert
  },
  setup() {
    const show = ref(true)

    return {
      show
    }
  }
}
</script>
