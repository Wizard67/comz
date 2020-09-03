<template>
  <main>
    {{ value }}

    <br>

    <Space gap="10px" align="center">
      normal:
      <Space gap="10px">
        <Checkbox v-model="value" value="A">A</Checkbox>
        <Checkbox v-model="value" value="B">B</Checkbox>
      </Space>
    </Space>

    <br>

    <Space gap="10px" align="center">
      disabled:
      <Space gap="10px">
        <Checkbox v-model="value" value="A" disabled>A</Checkbox>
        <Checkbox v-model="value" value="B" disabled>B</Checkbox>
      </Space>
    </Space>

    <br>

    <Space gap="10px" align="center">
      fontsize 18px:
      <Space gap="10px">
        <Checkbox v-model="value" value="A" style="fontSize:18px;">A</Checkbox>
        <Checkbox v-model="value" value="B" style="fontSize:18px;">B</Checkbox>
      </Space>
    </Space>
  </main>
</template>

<script>
import { reactive } from 'vue'
import { Space, Checkbox } from 'comz'

export default {
  components: {
    Space, Checkbox
  },
  setup() {
    const value = reactive(['A'])

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
