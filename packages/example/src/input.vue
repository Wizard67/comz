<template>
  <main>
    <div>normal: <Input v-model="value"></Input></div>

    <br>

    <div>disabled: <Input v-model="value" disabled></Input></div>

    <br>

    <div>readonly: <Input v-model="value" readonly></Input></div>

    <br>

    {{ value }}
  </main>
</template>

<script>
import { ref } from 'vue'
import { Input } from 'comz'

export default {
  components: {
    Input
  },
  setup() {
    const value = ref('ok')

    return {
      value
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
