<template>
  <Grid class="grid" :template="template" border>
    <GridItem name="left" place="center">
      <div class="block"></div>
    </GridItem>

    <GridItem name="right" place="end center">
      <div class="block"></div>
    </GridItem>
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
      template: `'left right' auto/
                  1fr 1fr`
    }
  }
}
</script>

<style scoped>
.grid {
  height: 200px;
}

.block {
  width: 100px;
  height: 100px;
  background-color: #d3dce6;
}
</style>