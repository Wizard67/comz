<template>
  <main>
    {{ value1 }}
    <br>
    <br>
    <Slider v-model="value1" :min="0" :max="100" :step="1"></Slider>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Slider } from 'comz'

export default {
  components: {
    Slider
  },
  setup() {
    const value1 = ref(0)

    return  { 
      value1
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
