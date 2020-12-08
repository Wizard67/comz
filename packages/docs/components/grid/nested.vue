<template>
  <Grid
    class="grid"
    gap="16px"
    rows="auto"
    columns="3fr 1fr 1fr"
  >
    <GridItem>
      <Grid
        class="grid2"
        rows="3fr 1fr 1fr"
        columns="auto"
        areas="'first'
               'second'
               'third'"
      >
        <GridItem area="first"></GridItem>
        <GridItem area="second"></GridItem>
        <GridItem area="third"></GridItem>
      </Grid>
    </GridItem>
    <GridItem></GridItem>
    <GridItem></GridItem>
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
  height: 210px;
}
.grid > * {
  border: 1px dotted #348ec7;
  background-color: #d3dce6;
}

.grid2 > * {
  border: 1px dotted #c76a34;
  background-color: #e6dbd3;
}
</style>