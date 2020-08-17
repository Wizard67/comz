<template>
  <main>
    {{ value }}

    <br>

    <Select v-model="value" placeholder="something">
      <Option value="test">Test</Option>
      <Option value="ok">Okkk</Option>
    </Select>

  </main>
</template>

<script>
import { ref } from 'vue'
import { Select, Option } from 'comz'

export default {
  components: {
    Select, Option
  },
  setup() {
    const value = ref('')

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
