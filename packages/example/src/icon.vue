<template>
  <main>
    <Icon
      color="green"
      :size="size"
      :stroke-width="2"
    ><Ad/>HELLO WORLD</Icon>

    <br>

    <Icon
      color="red"
      :size="size"
      :stroke-width="1"
      :spin="spin"
    ><Refresh/></Icon>

    <br>

    <Button @on-click="handleClick">Change State</Button>
  </main>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { Button, Icon } from 'comz'
import { Ad, Refresh } from '@comz/icons'

export default defineComponent({
  components: {
    Button, Icon,
    Ad, Refresh
  },
  setup(props, { slots }) {
    const size = ref('16px')
    const spin = ref(true)

    const handleClick = () => {
      size.value = size.value === '16px'? '32px': '16px'
      spin.value = spin.value? false: true
    }

    return {
      size, spin,
      handleClick
    }
  }
})
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

.iicon {
  display: inline-flex;
  align-items: center;
  font-size: 28px;
  color: green;
  stroke-width: 1;
}

.span {
  display: inline-block;
}
</style>
