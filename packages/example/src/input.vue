<template>
  <main>
    <Space vertical>
      normal:
      <Input
        v-model="value"
        placeholder="normal"
        clearable
      ></Input>
    </Space>

    <br>

    <Space vertical>
      disabled:
      <Input
        v-model="value"
        placeholder="disabled"
        disabled>
      </Input>
    </Space>

    <br>

    <Space vertical style="width: 100px">
      readonly:
      <Input
        v-model="value"
        readonly
      ></Input>
    </Space>

    <br>

    <Space vertical style="width: 300px">
      readonly & disabled:
      <Input
        v-model="value"
        readonly
        disabled
        clearable
      ></Input>
    </Space>

    <br>

    <div>
      <div>{{ value }}</div>
      <div>{{ typeof value }}</div>
    </div>

  </main>
</template>

<script>
import { ref } from 'vue'
import { Space, Input } from 'comz'

export default {
  components: {
    Space, Input
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
