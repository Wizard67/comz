<template>
  <!-- <Tooltip text="helle world. helle world. helle world.">
    <Button>BUTTON</Button>
  </Tooltip>
  <br>
  <br>
    <Tooltip text="helle world. helle world. helle world.">
    <Button>BUTTON</Button>
  </Tooltip>
  <br>
  <br>
  <Tooltip text="helle world. helle world. helle world.">
    <Button>BUTTON</Button>
  </Tooltip> -->

  <Popper text="okok">
    <Button>BUTTON</Button>
  </Popper><br><br>
  <Popper text="okok">
    <Button>BUTTON</Button>
  </Popper><br><br>
  <Popper text="okok">
    <Button>BUTTON</Button>
  </Popper><br><br>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { Tooltip, Button } from 'comz'
import Popper from './test.vue'

export default defineComponent({
  components: {
    Tooltip, Button, Popper
  }
})
</script>

<style>
.button {
  display: inline-block;
  flex: none;
  width: 100px;
  text-align: center;
  background-color: antiquewhite;
  margin: 30px;
}

.text {
  display: inline-block;
  color: white;
  background-color: black;
}
</style>
