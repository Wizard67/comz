<template>
  <Grid class="grid" :template="template">
    <GridItem class="block" name="header"></GridItem>
    <GridItem class="block" name="aside"></GridItem>
    <GridItem class="block" name="main"></GridItem>
  </Grid>
</template>

<script>
import { Grid, GridItem } from 'comz'

export default {
  components: {
    Grid,
    GridItem
  },
  setup() {
    return {
      template: `'header header header' 100px
                 'aside  main   main'   auto
                 'aside  main   main'   auto /
                  100px  1fr    1fr`
    }
  }
}
</script>

<style scoped>
.grid {
  height: 300px;
}
.block {
  width: 100%;
  height: 100%;
  border: 1px solid #b1b1b1;
  background-color: #d3dce6;
}
</style>