<template>
  <Switch v-model="value" disabled></Switch>
</template>

<script>
import { ref } from 'vue'
import { Switch } from 'comz'

export default {
  components: {
    Switch
  },
  setup() {
    const value = ref(false)

    return {
      value
    }
  }
}
</script>
