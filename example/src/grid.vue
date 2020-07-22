<template>
  <main>
    <Grid
      class="grid"
      gap="4px"
      template="'a   a   a' 40px
                'b   c   c' auto
                'b   c   c' auto /
                1fr 1fr 1fr"
      border
    >
      <GridItem name="a"></GridItem>
      <GridItem name="b"></GridItem>
      <GridItem name="c"></GridItem>
    </Grid>

    <br>

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
    </Grid>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Grid } from '@fe-tools/nui-ui'
import { GridItem } from '@fe-tools/nui-ui'

export default {
  components: {
    Grid, GridItem
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
  width: 300px;
  height: 300px;
}
.block {
  width: 100px;
  height: 100px;
  background-color: lightskyblue;
}
</style>
