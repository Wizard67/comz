<template>
  <Grid class="grid" columns="auto 200px">
    <GridItem padding="20px">
      <Panel v-model:expand="expand" title="Title">
        <div v-for="(_, index) in items" :key="index">some text</div>
      </Panel>
    </GridItem>

    <GridItem class="side" place-items="center">
      <Flex place-content="center">
        <Button @on-click="handleAddItem">
          <Flex gap="4px">
            <Icon><Plus /></Icon>Item
          </Flex>
        </Button>
        <Button @on-click="handleMinusItem">
          <Flex gap="4px">
            <Icon><Dash /></Icon>Item
          </Flex>
        </Button>
      </Flex>
    </GridItem>
  </Grid>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

import { Panel, Button, Grid, GridItem, Flex, Icon } from 'comz'

import { Plus, Dash } from '@comz/icons'

export default defineComponent({
  components: {
    Panel,
    Button,
    Grid,
    GridItem,
    Flex,
    Icon,
    Plus,
    Dash
  },
  setup() {
    const expand = ref(false)
    const items = reactive([{}, {}, {}])

    const handleAddItem = () => {
      items.push({})
    }

    const handleMinusItem = () => {
      items.pop()
    }

    return {
      expand,
      items,
      handleAddItem,
      handleMinusItem
    }
  }
})
</script>

<style scoped>
.grid {
  width: 100%;
  min-height: 300px;
  border: 1px solid var(--c-divider-light);
}
.side {
  box-sizing: border-box;
  border-left: 1px solid var(--c-divider-light);
}
</style>
