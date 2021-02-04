<template>
  <Grid
    class="grid"
    rows="repeat(5, auto)"
    columns="repeat(5, 1fr)"
    areas="'. a b c .'
           'd . . . e'
           'f . . . g'
           'h . . . i'
           '. j k l .'"
  >
    <GridItem area="a">
      <Tooltip text="text" placement="top-start">
        <div class="block">T&S</div>
      </Tooltip>
    </GridItem>
    <GridItem area="b">
      <Tooltip text="text" placement="top">
        <div class="block">T</div>
      </Tooltip>
    </GridItem>
    <GridItem area="c">
      <Tooltip text="text" placement="top-end">
        <div class="block">T&E</div>
      </Tooltip>
    </GridItem>
    <GridItem area="d">
      <Tooltip text="text" placement="left-start">
        <div class="block">L&S</div>
      </Tooltip>
    </GridItem>
    <GridItem area="e">
      <Tooltip text="text" placement="right-start">
        <div class="block">R&S</div>
      </Tooltip>
    </GridItem>
    <GridItem area="f">
      <Tooltip text="text" placement="left">
        <div class="block">L</div>
      </Tooltip>
    </GridItem>
    <GridItem area="g">
      <Tooltip text="text" placement="right">
        <div class="block">R</div>
      </Tooltip>
    </GridItem>
    <GridItem area="h">
      <Tooltip text="text" placement="left-end">
        <div class="block">L&E</div>
      </Tooltip>
    </GridItem>
    <GridItem area="i">
      <Tooltip text="text" placement="right-end">
        <div class="block">R&E</div>
      </Tooltip>
    </GridItem>
    <GridItem area="j">
      <Tooltip text="text" placement="bottom-start">
        <div class="block">B&S</div>
      </Tooltip>
    </GridItem>
    <GridItem area="k">
      <Tooltip text="text" placement="bottom">
        <div class="block">B</div>
      </Tooltip>
    </GridItem>
    <GridItem area="l">
      <Tooltip text="text" placement="bottom-end">
        <div class="block">B&E</div>
      </Tooltip>
    </GridItem>
  </Grid>
</template>

<script>
import { defineComponent } from 'vue'
import { Grid, GridItem, Tooltip } from 'comz'

export default defineComponent({
  components: {
    Grid,
    GridItem,
    Tooltip
  }
})
</script>

<style scoped>
.grid {
  height: 300px;
}

.grid > * {
  display: flex;
  justify-content: center;
  align-items: center;
}

.block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: lightgray;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}
</style>
