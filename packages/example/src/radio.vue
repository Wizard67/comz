<template>
  <main>
    {{ value }}

    <br>

    <div>
      normal:
      <Radio v-model="value" value="A" style="marginRight: 10px;">A</Radio>
      <Radio v-model="value" value="B">B</Radio>
    </div>

    <br>

    <div>
      disabled:
      <Radio v-model="value" value="A" style="marginRight: 10px;" disabled>A</Radio>
      <Radio v-model="value" value="B" disabled>B</Radio>
    </div>

    <br>

    <div>
      fontsize 18px:
      <Radio v-model="value" value="A" style="marginRight: 10px;fontSize: 18px;">A</Radio>
      <Radio v-model="value" value="B" style="fontSize: 18px;">B</Radio>
    </div>

  </main>
</template>

<script>
import { ref } from 'vue'
import { Radio } from 'comz'

export default {
  components: {
    Radio
  },
  setup() {
    const value = ref('A')

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
