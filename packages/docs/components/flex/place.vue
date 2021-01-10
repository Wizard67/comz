<template>
  <div class="box">
    <Flex>
      <Button>H</Button>
      <Button>start</Button>
    </Flex>
  </div>
  <div class="box">
    <Flex>
      <Button>H</Button>
      <Button>center</Button>
    </Flex>
  </div>
  <div class="box">
    <Flex>
      <Button>H</Button>
      <Button>end</Button>
    </Flex>
  </div>

  <br><br>

  <div class="box">
    <Flex>
      <Button>V</Button>
      <Button>start</Button>
    </Flex>
  </div>
  <div class="box">
    <Flex>
      <Button>V</Button>
      <Button>center</Button>
    </Flex>
  </div>
  <div class="box">
    <Flex>
      <Button>V</Button>
      <Button>end</Button>
    </Flex>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Flex, Button } from 'comz'

export default defineComponent({
  components: {
    Flex, Button
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
