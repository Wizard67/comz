<template>
  <main>
    <div>
      <Button @on-click="handleClick" disabled>disabled</Button>
      <Button @on-click="handleClick" loading>loading</Button>
      <Button @on-click="handleClick" loading disabled>loading & disabled</Button>
    </div>

    <br>

    <div>
      <Button @on-click="handleClick">normal</Button>
      <Button @on-click="handleClick">
        <Icon><Bell />Button</Icon>
      </Button>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Button, Icon } from 'comz'
import { Bell } from '@comz/icons'

export default {
  components: {
    Button,
    Icon, Bell
  },
  setup() {
    const handleClick = () => console.log('on button click')

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
</style>
