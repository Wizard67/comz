<template>
  <main>
    {{ value }}

    <br>
    
    <Space gap="10px" align="center">
      normal:
      <Space gap="10px">
        <Radio v-model="value" value="A">A</Radio>
        <Radio v-model="value" value="B">B</Radio>
      </Space>
    </Space>

    <br>

    <Space gap="10px" align="center">
      disabled:
      <Space gap="10px">
        <Radio v-model="value" value="A" disabled>A</Radio>
        <Radio v-model="value" value="B" disabled>B</Radio>
      </Space>
    </Space>

    <br>

    <Space gap="10px" align="center">
      fontsize 18px:
      <Space gap="10px">
        <Radio v-model="value" value="A" style="fontSize: 18px;">A</Radio>
        <Radio v-model="value" value="B" style="fontSize: 18px;">B</Radio>
      </Space>
    </Space>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Space, Radio } from 'comz'

export default {
  components: {
    Space, Radio
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
