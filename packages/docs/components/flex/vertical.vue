<template>
  <div class="box">
    <Flex flow="column">
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
      <Button>four</Button>
    </Flex>
  </div>

  <div class="box">
    <Flex flow="column" wrap>
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
      <Button>four</Button>
    </Flex>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import { Button, Flex } from 'comz'

export default defineComponent({
  components: {
    Button, Flex
  }
})
</script>

<style scoped>
.box {
  display: inline-flex;
  height: 100px;
  width: 150px;
  margin-right: 40px;
  outline: 1px rgba(0, 0, 0, .2) dashed;
}
</style>
