<template>
  <div class="box">
    <Space>
      <Button>one</Button>
    </Space>
  </div>
  <div class="box">
    <Space class="fill">
      <Button>one</Button>
    </Space>
  </div>
  <div class="box">
    <Space class="fix-fill">
      <Button>one</Button>
    </Space>
  </div>
  <div class="box">
    <Space fill>
      <Button>one</Button>
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
  width: 120px;
  margin-right: 40px;
  overflow: hidden;
  outline: 1px rgba(0, 0, 0, .2) dashed;
}
.box > * {
  background-color: rgba(0, 0, 0, .2);
}

.fill {
  height: 100%;
  width: 100%;
}

.fix-fill {
  height: calc(100% + 8px);
  width: calc(100% + 8px);
}
</style>
