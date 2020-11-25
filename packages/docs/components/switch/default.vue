<template>
  <Switch v-model="value"></Switch>
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
