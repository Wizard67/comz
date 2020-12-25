<template>
<div class="grid"></div>
  <!-- <Grid
    class="grid"
    gap="16px"
    rows="repeat(5, 30px)"
    columns="repeat(5, 110px)"
  >
    <GridItem></GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem></GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem></GridItem>
    <GridItem></GridItem>
    <GridItem></GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem></GridItem>
    <GridItem></GridItem>
    <GridItem></GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem></GridItem>
    <GridItem></GridItem>
    <GridItem></GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem></GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem>
      <Tooltip text="a button a button a button a button">
        <Button>BUTTON</Button>
      </Tooltip>
    </GridItem>
    <GridItem></GridItem>
  </Grid> -->
</template>

<script>
import { defineComponent } from 'vue'
import { Grid, GridItem, Tooltip, Button } from 'comz'

export default defineComponent({
  components: {
    Grid, GridItem,
    Tooltip, Button
  }
})
</script>

<style scoped>
.grid {
  height: 16px;
}
.grid > * {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>