<template>
  <div class="demo">
    <div class="demo-component">
      <slot name="component" />
    </div>
    <div class="demo-button" @click="changeState">
      {{ state ? 'hiden code' : 'show code' }}
    </div>
    <div class="demo-code" v-show="state">
      <slot name="code" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const state = ref(false)

    const changeState = () => {
      state.value = !state.value
    }

    return {
      state,
      changeState
    }
  }
}
</script>
