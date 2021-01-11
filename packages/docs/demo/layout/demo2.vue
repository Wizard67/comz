<template>
  <Grid
    height="400px"
    rows="repeat(3, 100px)"
    columns="repeat(3, 100px)"
    place-content="center"
    gap="10px"
  >
    <GridItem place-items="flex-end">
      <Button>Button</Button>
    </GridItem>

    <GridItem place-items="flex-end center">
      <Button>Button</Button>
    </GridItem>

    <GridItem place-items="flex-end flex-start">
      <Button>Button</Button>
    </GridItem>

    <GridItem place-items="center flex-end">
      <Button>Button</Button>
    </GridItem>

    <GridItem place-items="center">
      <Button>Button</Button>
    </GridItem>

    <GridItem place-items="center flex-start">
      <Button>Button</Button>
    </GridItem>

    <GridItem place-items="flex-start flex-end">
      <Button>Button</Button>
    </GridItem>

    <GridItem place-items="flex-start center">
      <Button>Button</Button>
    </GridItem>

    <GridItem place-items="flex-start">
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
}
</style>