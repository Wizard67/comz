<template>
  <div class="box">
    <Space justify="center" align="stretch" fill>
      <Button>H</Button>
      <Button>start</Button>
    </Space>
  </div>
  <div class="box">
    <Space center fill>
      <Button>H</Button>
      <Button>center</Button>
    </Space>
  </div>
  <div class="box">
    <Space justify="space-between" align="flex-end" fill>
      <Button>H</Button>
      <Button>end</Button>
    </Space>
  </div>

  <br><br>

  <div class="box">
    <Space justify="center" align="stretch" fill vertical>
      <Button>V</Button>
      <Button>start</Button>
    </Space>
  </div>
  <div class="box">
    <Space center fill vertical>
      <Button>V</Button>
      <Button>center</Button>
    </Space>
  </div>
  <div class="box">
    <Space justify="space-between" align="flex-end" fill vertical>
      <Button>V</Button>
      <Button>end</Button>
    </Space>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Space, Button } from 'comz'

export default defineComponent({
  components: {
    Space, Button
  }
})
</script>

<style scoped>
.box {
  display: inline-block;
  height: 100px;
  width: 150px;
  margin-right: 40px;
  vertical-align: top;
  overflow: hidden;
  outline: 1px rgba(0, 0, 0, .2) dashed;
}
</style>
