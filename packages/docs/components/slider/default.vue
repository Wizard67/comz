<template>
  <Slider v-model="value"></Slider>
</template>

<script>
import { ref } from 'vue'
import { Slider } from 'comz'

export default {
  components: {
    Slider
  },
  setup() {
    const value = ref(0)

    return {
      value
    }
  }
}
</script>
