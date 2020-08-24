<template>
  <main>
    <Space gap="8px" vertical>
      <Space>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button><Icon><Bell/>Button3</Icon></Button>
      </Space>

      <Space gap="2px">
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button><Icon><Bell/>Button3</Icon></Button>
        <div class="block">Block</div>
      </Space>

      <Space gap="4px" align="start">
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
        <div class="block">Block</div>
      </Space>

      <Space gap="6px" align="center">
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
        <div class="block">Block</div>
      </Space>

      <Space gap="8px" align="end">
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
        <div class="block">Block</div>
      </Space>
    </Space>

    <br>

    <Space gap="8px">
      <Space align="start" vertical>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
        <div class="block">Block</div>
      </Space>

      <Space gap="2px" align="start" vertical>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
        <div class="block">Block</div>
      </Space>

      <Space gap="4px" align="center" vertical>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
        <div class="block">Block</div>
      </Space>

      <Space gap="8px" align="end" vertical>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
        <div class="block">Block</div>
      </Space>
    </Space>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Space, Button, Icon } from 'comz'
import { Bell } from '@comz/icons'

export default {
  components: {
    Space, Button,
    Icon, Bell
  },
  setup() {
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

.block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  color: white;
  background-color: lightcoral;
}
</style>
