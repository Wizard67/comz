<template>
  <Grid
    class="grid"
    gap="10px"
    :template="template"
  >
    <GridItem class="block" name="first"></GridItem>
    <GridItem class="block" name="second"></GridItem>
    <GridItem class="block" name="third"></GridItem>
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
      template: `'first second third' auto
                 'first second third' auto
                 'first second third' auto /
                  1fr   1fr    1fr`
    }
  }
}
</script>

<style scoped>
.grid {
  height: 200px;
}
.block {
  width: 100%;
  height: 100%;
  background-color: #d3dce6;
}
</style>