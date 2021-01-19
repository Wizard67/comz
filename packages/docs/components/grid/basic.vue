<template>
  <Grid
    class="grid"
    rows="100px auto auto"
    columns="100px 1fr 1fr"
    areas="'header header header'
           'aside  main   main'
           'aside  main   main'"
  >
    <GridItem area="header"></GridItem>
    <GridItem area="aside"></GridItem>
    <GridItem area="main"></GridItem>
  </Grid>

  <br />

  <Grid class="grid" rows="100px auto auto" columns="100px 1fr 1fr">
    <GridItem area="1 / 1 / 2 / 4"></GridItem>
    <GridItem area="2 / 1 / 4 / 2"></GridItem>
    <GridItem area="2 / 2 / 4 / 4"></GridItem>
  </Grid>
</template>

<script>
import { defineComponent } from 'vue'
import { Grid, GridItem } from 'comz'

export default defineComponent({
  components: {
    Grid,
    GridItem
  }
})
</script>

<style scoped>
.grid {
  height: 300px;
}
.grid > * {
  border: 1px dotted #348ec7;
  background-color: #d3dce6;
}
</style>
