<template>
  <Grid class="grid" columns="auto 330px">
    <GridItem padding="8px">
      <Flex
        :style="full ? 'height: 382px; width: 100%;' : ''"
        :gap="`${gap}px`"
        :wrap="wrap"
        :inline="inline"
        :flow="flow.sort((a, b) => (a === 'reverse' ? 1 : -1)).join('-')"
        :place-content="placeContent"
        :place-items="placeItems"
      >
        <template v-for="(item, index) in items" :key="index">
          <div class="demo-block">
            <div class="label">{{ index + 1 }}</div>
          </div>
        </template>
      </Flex>
    </GridItem>

    <GridItem>
      <Flex class="side" flow="column">
        <div class="title">Props</div>
        <Form label-width="100px" label-align="left">
          <FormItem label="full">
            <Switch v-model="full"></Switch>
          </FormItem>
          <FormItem label="inline">
            <Switch v-model="inline"></Switch>
          </FormItem>
          <FormItem label="gap">
            <Slider v-model="gap" :min="0" :max="20"></Slider>
          </FormItem>
          <FormItem label="flow">
            <Flex wrap>
              <Checkbox
                v-model="flow"
                value="row"
                :disabled="flow.includes('column')"
                >row</Checkbox
              >
              <Checkbox
                v-model="flow"
                value="column"
                :disabled="flow.includes('row')"
                >column</Checkbox
              >
              <Checkbox
                v-model="flow"
                value="reverse"
                :disabled="flow.length === 0"
                >reverse</Checkbox
              >
            </Flex>
          </FormItem>
          <FormItem label="wrap">
            <Switch v-model="wrap"></Switch>
          </FormItem>
          <FormItem label="place-content">
            <Input v-model="placeContent" placeholder="place-content"></Input>
          </FormItem>
          <FormItem label="place-items">
            <Input v-model="placeItems" placeholder="place-items"></Input>
          </FormItem>
        </Form>

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
      </Flex>
    </GridItem>
  </Grid>
</template>

<script>
import { defineComponent, ref, reactive, computed } from 'vue'

import {
  Grid,
  GridItem,
  Flex,
  Form,
  FormItem,
  Input,
  Checkbox,
  Select,
  Slider,
  Option,
  Switch,
  Icon,
  Button
} from 'comz'

import { Plus, Dash } from '@comz/icons'

export default defineComponent({
  components: {
    Grid,
    GridItem,
    Flex,
    Button,
    Form,
    FormItem,
    Input,
    Checkbox,
    Select,
    Slider,
    Option,
    Switch,
    Icon,
    Plus,
    Dash
  },
  setup() {
    const full = ref(false)
    const gap = ref(8)
    const flow = ref([])
    const wrap = ref(true)
    const inline = ref(false)
    const placeContent = ref('center')
    const placeItems = ref('')

    const items = reactive([{}, {}, {}])

    const handleAddItem = () => {
      items.push({})
    }

    const handleMinusItem = () => {
      items.pop()
    }

    return {
      full,
      gap,
      flow,
      wrap,
      inline,
      placeContent,
      placeItems,
      items,
      handleAddItem,
      handleMinusItem
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
}
.side {
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  border-left: 1px solid var(--c-divider-light);
}
.title {
  margin-bottom: 0.5em;
  font-weight: bold;
}

.demo-block {
  position: relative;
  width: 90px;
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
