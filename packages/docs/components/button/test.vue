<template>
  <Button :throttle="1000" @on-click="handleClick">button</Button>

  <br />

  <Button :throttle="500" :continuous="true" @on-click="handleClick"
    >button</Button
  >
</template>

<script>
import { Button } from 'comz'

export default {
  components: {
    Button
  },
  setup() {
    const handleClick = (event) => {
      console.log('click')
    }

    return {
      handleClick
    }
  }
}
</script>
