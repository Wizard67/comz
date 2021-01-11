<template>
  <Grid
    height="300px"
    columns="auto 200px"
  >
    <GridItem place-items="center">
      <Button>Button</Button>
    </GridItem>

    <GridItem padding="10px">
      <Button>Button</Button>
    </GridItem>
  </Grid>
</template>

<script>
import { defineComponent } from 'vue'
import { Grid, GridItem, Button } from 'comz'

export default defineComponent({
  components: {
    Grid, GridItem, Button
  }
})
</script>

<style scoped>
.cgrid-item {
  background-color: rgba(0, 0, 0, .2);
  outline: 1px white solid;
}
</style>