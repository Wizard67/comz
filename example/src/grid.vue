<template>
  <main>
    <Grid
      class="grid"
      gap="4px"
      :template="template"
      :border="border"
    >
      <GridItem name="a"></GridItem>
      <GridItem name="b">
        <div class="block"></div>
      </GridItem>
      <GridItem name="c"></GridItem>
    </Grid>

    <br>

    <Button @click="handleClick">Click</Button>

    <!-- <br>

    <Grid
      class="grid"
      gap="0"
      template="'a   a   a' 20px
                'b   c   c' auto
                'b   d   d' 30px /
                1fr 1fr 1fr"
      border
    >
      <GridItem name="a"></GridItem>
      <GridItem name="b"></GridItem>
      <GridItem name="c" place="center center">
        <div class="block"></div>
      </GridItem>
      <GridItem name="d"></GridItem>
    </Grid>

    <br>

    <Grid
      class="grid"
      gap="4px"
      template="'a   b   c' 80px /
                1fr 1fr 1fr"
      border
    >
      <GridItem name="a"></GridItem>
      <GridItem name="b"></GridItem>
      <GridItem name="c"></GridItem>
    </Grid> -->
  </main>
</template>

<script>
import { ref } from 'vue'
import { Button, Grid, GridItem } from '@fe-tools/nui-ui'
// import Grid from './grid'
// import GridItem from './grid-item'

const genTemplate = v => `
  'a   a   a' 40px
  'b   c   c' auto
  'b   c   c' auto /
  ${v} 1fr 1fr
`

export default {
  components: {
    Grid, GridItem, Button
  },
  setup() {
    const border = ref(true)
    const template = ref(genTemplate('1fr'))

    const handleClick = () => {
      border.value = !border.value
      template.value = border.value
                         ? genTemplate('1fr')
                         : genTemplate('.5fr')
    }

    return {
      border, template, handleClick
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  min-height: 100%;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 20px 0;
}

.grid {
  flex: none;
  width: 500px;
  height: 500px;
}
.block {
  width: 100%;
  height: 100%;
  background-color: lightskyblue;
}
</style>
