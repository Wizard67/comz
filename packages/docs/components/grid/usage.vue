<template>
  <Grid
    class="grid"
    columns="auto 280px"
  >
    <GridItem class="container">
      <Grid
        class="demo-grid"
        :padding="`${padding}px`"
        :rows="rows"
        :columns="columns"
        :autoRows="autoRows"
        :autoColumns="autoColumns"
        :flow="flow.join(' ')"
        :gap="`${gap}px`"
        :inline="inline"
      >
        <template v-for="(item, index) in items" :key="index">
          <GridItem class="demo-griditem">
            <div class="label">{{ index+1 }}</div>
          </GridItem>
        </template>
      </Grid>
    </GridItem>

    <GridItem>
      <Flex class="side" vertical>
        <div class="title">Props</div>
        <Form label-width="60px" label-align="left">
          <FormItem label="padding">
            <Slider v-model="padding" :min="0" :max="20"></Slider>
          </FormItem>
          <FormItem label="rows">
            <Input v-model="rows" placeholder="rows"></Input>
          </FormItem>
          <FormItem label="columns">
            <Input v-model="columns" placeholder="columns"></Input>
          </FormItem>
          <FormItem label="autoRows">
            <Input v-model="autoRows" placeholder="rows"></Input>
          </FormItem>
          <FormItem label="autoColumns">
            <Input v-model="autoColumns" placeholder="columns"></Input>
          </FormItem>
          <FormItem label="gap">
            <Slider v-model="gap" :min="0" :max="20"></Slider>
          </FormItem>
          <FormItem label="flow">
            <Flex wrap>
              <Checkbox v-model="flow" value="row" :disabled="flow.includes('column')">row</Checkbox>
              <Checkbox v-model="flow" value="column" :disabled="flow.includes('row')">column</Checkbox>
              <Checkbox v-model="flow" value="dense">dense</Checkbox>
            </Flex>
          </FormItem>
          <FormItem label="inline">
            <Switch v-model="inline"></Switch>
          </FormItem>
        </Form>

        <Flex center>
          <Button @on-click="handleAddItem"><Icon><Plus/></Icon>Item</Button>
          <Button @on-click="handleMinusItem"><Icon><Dash/></Icon>Item</Button>
        </Flex>
      </Flex>
    </GridItem>
  </Grid>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

import {
  Grid, GridItem, Flex,
  Form, FormItem,
  Input, Checkbox, Select, Slider, Option, Switch, Icon,
  Button
} from 'comz'

import { Plus, Dash } from '@comz/icons'

export default defineComponent({
  components: {
    Grid, GridItem, Flex, Button,
    Form, FormItem,
    Input, Checkbox, Select, Slider, Option, Switch,
    Icon, Plus, Dash
  },
  setup() {
    const rows = ref('100px 100px 100px')
    const columns = ref('200px 100px')
    const autoRows = ref('')
    const autoColumns = ref('')
    const padding = ref(10)
    const gap = ref(8)
    const flow = ref([])
    const inline = ref(false)

    const items = reactive([{}, {}, {}, {}])

    const handleAddItem = () => {
      items.push({})
    }

    const handleMinusItem = () => {
      items.pop()
    }

    return {
      rows, columns, autoRows, autoColumns,
      padding,
      gap, flow, inline,
      items, handleAddItem, handleMinusItem
    }
  }
})
</script>

<style scoped>
.grid {
  width: 100%;
  height: 400px;
  border: 1px solid var(--c-divider-light);
}
.container {
  overflow: scroll;
}
.side {
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  border-left: 1px solid var(--c-divider-light);
}
.title {
  margin-bottom: .5em;
  font-weight: bold;
}

.demo-grid {
  background-color: #a8dadc;
}
.demo-griditem {
  position: relative;
  background-color: #457b9d;
}
.demo-griditem > .label {
  position: absolute;
  top: 2px;
  left: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  color: #457b9d;
  background-color: white;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;
}
</style>