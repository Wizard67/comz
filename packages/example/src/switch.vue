<template>
  <main>
    {{ value }}

    <br>
    
    <Space gap="10px" align="center">
      normal:
      <Space>
        <Switch v-model="value"></Switch>
      </Space>
    </Space>

    <br>

    <Space gap="10px" align="center">
      disabled:
      <Space>
        <Switch v-model="value" disabled></Switch>
      </Space>
    </Space>

  </main>
</template>

<script>
import { ref } from 'vue'
import { Space, Switch } from 'comz'

export default {
  components: {
    Space, Switch
  },
  setup() {
    const value = ref(false)

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
