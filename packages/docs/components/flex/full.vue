<template>
  <div class="box">
    <Flex>
      <Button>one</Button>
    </Flex>
  </div>
  <div class="box">
    <Flex class="fill">
      <Button>one</Button>
    </Flex>
  </div>
  <div class="box">
    <Flex class="fix-fill">
      <Button>one</Button>
    </Flex>
  </div>
  <div class="box">
    <Flex fill>
      <Button>one</Button>
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
