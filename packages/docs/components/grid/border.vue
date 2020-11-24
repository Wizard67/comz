<template>
  <Grid
    class="grid"
    :template="template"
    border
  >
    <GridItem name="first"></GridItem>
    <GridItem name="second"></GridItem>
    <GridItem name="third"></GridItem>
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
      template: `'first  first  first' 1fr
                 'second second second' 2fr
                 'third  third  third' 3fr /
                  1fr   1fr   1fr`
    }
  }
}
</script>

<style scoped>
.grid {
  height: 200px;
}
</style>