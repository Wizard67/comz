<template>
  <main>
    <div class="wrap">
      <Card>
        body
      </Card>

      <br>

      <Card>
        <template #header>
          <div>title</div>
          <div>helper</div>
        </template>

        <template #default>
          body
        </template>
      </Card>

      <br>

      <Card shadow>
        <template #header>
          <div>title</div>
          <div>helper</div>
        </template>

        <template #default>
          body
        </template>

        <template #footer>
          footer
        </template>
      </Card>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Card } from 'comz'

export default {
  components: {
    Card
  },
  setup() {
    const handleClick = () => console.log('listen button click')

    return {
      handleClick
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

.wrap {
  width: 300px;
}
</style>
