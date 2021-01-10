<template>
  <Grid
    class="grid"
    columns="auto 300px"
  >
    <GridItem class="container">
      <Flex
        class="demo-flex"
        :style="full ? 'height: 382px' : ''"
        :gap="`${gap}px`"
        :wrap="wrap"
        :inline="inline"
        :flow="(flow.sort((a, b) => a === 'reverse' ? 1 : -1)).join('-')"
      >
        <template v-for="(item, index) in items" :key="index">
          <div class="demo-block">
            <div class="label">{{ index+1 }}</div>
          </div>
        </template>
      </Flex>
    </GridItem>

    <GridItem>
      <Flex class="side" flow="column">
        <div class="title">Props</div>
        <Form label-width="60px" label-align="left">
          <FormItem label="full">
            <Switch v-model="full"></Switch>
          </FormItem>
          <FormItem label="gap">
            <Slider v-model="gap" :min="0" :max="20"></Slider>
          </FormItem>
          <FormItem label="flow">
            <Flex wrap>
              <Checkbox v-model="flow" value="row" :disabled="flow.includes('column')">row</Checkbox>
              <Checkbox v-model="flow" value="column" :disabled="flow.includes('row')">column</Checkbox>
              <Checkbox v-model="flow" value="reverse" :disabled="flow.length === 0">reverse</Checkbox>
            </Flex>
          </FormItem>
          <FormItem label="wrap">
            <Switch v-model="wrap"></Switch>
          </FormItem>
          <FormItem label="inline">
            <Switch v-model="inline"></Switch>
          </FormItem>
          <FormItem label="justify-center">
            <Select v-model="justifyCenter" placeholder="justify-center" style="width: 174px;">
              <Option label="" value=""></Option>
              <Option label="flex-start" value="flex-start">flex-start</Option>
              <Option label="center" value="center">center</Option>
              <Option label="flex-end" value="flex-end">flex-end</Option>
              <Option label="baseline" value="baseline">baseline</Option>
              <Option label="stretch" value="stretch">stretch</Option>
              <Option label="space-between" value="space-between">space-between</Option>
              <Option label="space-around" value="space-around">space-around</Option>
              <Option label="space-evenly" value="space-evenly">space-evenly</Option>
            </Select>
          </FormItem>
        </Form>

        <Flex full justify-content="center">
          <Button @on-click="handleAddItem"><Icon><Plus/></Icon>Item</Button>
          <Button @on-click="handleMinusItem"><Icon><Dash/></Icon>Item</Button>
        </Flex>
      </Flex>
    </GridItem>
  </Grid>
</template>

<script>
import { defineComponent, ref, reactive, computed } from 'vue'

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
    const full = ref(false)
    const gap = ref(8)
    const flow = ref([])
    const wrap = ref(false)
    const inline = ref(false)
    const justifyCenter = ref('')

    const items = reactive([{}, {}, {}])

    const handleAddItem = () => {
      items.push({})
    }

    const handleMinusItem = () => {
      items.pop()
    }

    return {
      full,
      gap, flow, wrap, inline,
      justifyCenter, 
      items, handleAddItem, handleMinusItem
    }
  }
})
</script>

<style scoped>
.grid {
  box-sizing: border-box;
  width: 100%;
  height: 400px;
  border: 1px solid var(--c-divider-light);
  overflow: hidden;
}
.container {
  padding: 8px;
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

.demo-flex {
  background-color: #a8dadc;
}
.demo-block {
  position: relative;
  width: 100px;
  height: 28px;
  background-color: #457b9d;
}
.demo-block > .label {
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