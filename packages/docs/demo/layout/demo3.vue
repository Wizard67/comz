<template>
  <Flex flow="column" gap="16px">
    <Grid width="100%" columns="repeat(12, 8.33%)">
      <template v-for="i in 12" :key="i">
        <GridItem place-items="center">{{ i }}</GridItem>
      </template>
    </Grid>

    <Grid width="100%" columns="repeat(12, 8.33%)">
      <template v-for="i in 6" :key="i">
        <GridItem place-items="center" area="1 / span 2">{{ i }}</GridItem>
      </template>
    </Grid>

    <Grid width="100%" columns="repeat(12, 8.33%)">
      <template v-for="i in 4" :key="i">
        <GridItem place-items="center" area="1 / span 3">{{ i }}</GridItem>
      </template>
    </Grid>

    <Grid width="100%" columns="repeat(12, 8.33%)">
      <template v-for="i in 2" :key="i">
        <GridItem place-items="center" area="1 / span 6">{{ i }}</GridItem>
      </template>
    </Grid>


    <Grid width="100%" columns="repeat(12, 8.33%)">
      <GridItem place-items="center" area="1 / 5 / -1 / span 2">offset 4 span 2</GridItem>
      <GridItem place-items="center" area="1 / -4 / -1 / span 3">offset 9 span 3</GridItem>
    </Grid>
  </Flex>
</template>

<script>
import { defineComponent } from 'vue'
import { Grid, GridItem, Flex, Button } from 'comz'

export default defineComponent({
  components: {
    Grid, GridItem, Flex, Button
  }
})
</script>

<style scoped>
.cgrid-item {
  background-color: rgba(0, 0, 0, .2);
  outline: 1px white solid;
  font-size: 14px;
}
</style>