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
          <div>Card</div>
          <Icon @on-click="handleClick" link><X/></Icon>
        </template>

        <template #default>
          body
        </template>

        <template #footer>
          <Button>BUTTON</Button>
        </template>
      </Card>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Card, Icon, Button } from 'comz'
import { X } from '@comz/icons'

export default {
  components: {
    Card,
    Button, Icon, X
  },
  setup() {
    const handleClick = () => {
      console.log('listen icon click')
    }

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
