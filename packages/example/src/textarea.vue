<template>
  <main>
    <Space vertical>
      normal:
      <Textarea
        v-model="value"
        :rows="5"
        placeholder="something"
      ></Textarea>
    </Space>

    <br>

    <Space vertical>
      readonly:
      <Textarea
        v-model="value"
        readonly
      ></Textarea>
    </Space>

    <br>

    <Space vertical>
      disabled:
      <Textarea
        v-model="value"
        disabled
      ></Textarea>
    </Space>

    <br>

    {{ value }}
  </main>
</template>

<script>
import { ref } from 'vue'
import { Space, Textarea } from 'comz'

export default {
  components: {
    Space, Textarea
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
