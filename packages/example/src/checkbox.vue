<template>
  <main>
    {{ value }}

    <br>

    <div>
      normal:
      <Checkbox v-model="value" value="A" style="marginRight: 10px;">A</Checkbox>
      <Checkbox v-model="value" value="B">B</Checkbox>
    </div>

    <br>

    <div>
      disabled:
      <Checkbox v-model="value" value="A" style="marginRight: 10px;" disabled>A</Checkbox>
      <Checkbox v-model="value" value="B" disabled>B</Checkbox>
    </div>

    <br>

    <div>
      fontsize 18px:
      <Checkbox v-model="value" value="A" style="marginRight: 10px;fontSize:18px;">A</Checkbox>
      <Checkbox v-model="value" value="B" style="fontSize:18px;">B</Checkbox>
    </div>

  </main>
</template>

<script>
import { ref } from 'vue'
import { Checkbox } from 'comz'

export default {
  components: {
    Checkbox
  },
  setup() {
    const value = ref(['A'])

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
