<template>
  <Input class="input" v-model="value" placeholder="placeholder"></Input>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Input } from 'comz'

export default defineComponent({
  components: {
    Input
  },
  setup() {
    return {
      value: ref('')
    }
  }
})
</script>

<style scoped>
.input {
  width: 200px;
}
</style>
