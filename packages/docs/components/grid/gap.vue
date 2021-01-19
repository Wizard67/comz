<template>
  <Grid
    class="grid"
    gap="10px 20px"
    rows="100px 100px"
    columns="100px 100px 100px"
  >
    <GridItem></GridItem>
    <GridItem></GridItem>
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
</style>
