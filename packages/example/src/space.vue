<template>
  <main>
    <h3>正常情况</h3>
    <div style="width: 400px; outline: red solid 1px;">
    <Space gap="8px">
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
      <Button>four</Button>
      <Button>five</Button>
      <Button>six</Button>
    </Space>
    </div>

    <br>

    <h3>容器宽度小于内容 space 宽度</h3>
    <div style="width: 300px; outline: red solid 1px;">
    <Space gap="8px">
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
      <Button>four</Button>
      <Button>five</Button>
      <Button>six</Button>
    </Space>
    </div>

    <h3>容器宽度小于内容 space 宽度，允许换行</h3>
    <div style="width: 300px; outline: red solid 1px;">
    <Space gap="8px" align="center" wrap>
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
      <Button>four</Button>
      <Button>five</Button>
      <Button>six</Button>
    </Space>
    </div>

    <h3>容器宽度小于内容 space 宽度，允许换行, 设置项宽度</h3>
    <div style="width: 300px; outline: red solid 1px;">
    <Space gap="8px" wrap item-width="100px">
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
      <Button>four</Button>
      <Button>five</Button>
      <Button>six</Button>
    </Space>
    </div>

    <br>

    <Space gap="16px">
      <section>
        <h3>纵向排列</h3>
        <div style="width: 300px; outline: red solid 1px;">
        <Space gap="8px" vertical>
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
          <Button>four</Button>
          <Button>five</Button>
          <Button>six</Button>
        </Space>
        </div>
      </section>

      <section>
        <h3>纵向排列, 容器高度小于内容高度</h3>
        <div style="height: 100px; outline: red solid 1px;">
        <Space gap="8px" vertical>
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
          <Button>four</Button>
          <Button>five</Button>
          <Button>six</Button>
        </Space>
        </div>
      </section>

      <section>
        <h3>纵向排列, 容器高度小于内容高度, 换行无效</h3>
        <div style="height: 100px; outline: red solid 1px;">
        <Space gap="8px" align="center" vertical wrap>
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
          <Button>four</Button>
          <Button>five</Button>
          <Button>six</Button>
        </Space>
        </div>
      </section>
    </Space>

  </main>
</template>

<script>
import { ref } from 'vue'
import { Space, Button } from 'comz'

export default {
  components: {
    Space, Button
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
</style>
