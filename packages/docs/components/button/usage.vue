<template>
  <Grid class="grid" columns="auto 200px">
    <GridItem place-items="center">
      <Button v-bind="atts" :type="type">
        <Flex gap="4px">
          <Icon v-if="props.includes('icon')"><HeartFill /></Icon>
          {{ text }}
        </Flex>
      </Button>
    </GridItem>

    <GridItem>
      <Flex class="side" flow="column">
        <div class="title">Props</div>
        <Input v-model="text" placeholder="button text"></Input>

        <Select v-model="type" placeholder="button type" style="width: 100%">
          <Option label="default" value="default">default</Option>
          <Option label="text" value="text">text</Option>
        </Select>

        <input type="color" v-model="color" />

        <Checkbox v-model="props" value="icon">icon</Checkbox>
        <Checkbox v-model="props" value="loading">loading</Checkbox>
        <Checkbox v-model="props" value="disabled">disabled</Checkbox>
      </Flex>
    </GridItem>
  </Grid>
</template>

<script>
import { defineComponent, ref, computed, watch } from 'vue'

import {
  Button,
  Grid,
  GridItem,
  Flex,
  Input,
  Checkbox,
  Select,
  Option,
  Icon
} from 'comz'

import { HeartFill } from '@comz/icons'

export default defineComponent({
  components: {
    Button,
    Grid,
    GridItem,
    Flex,
    Input,
    Checkbox,
    Select,
    Option,
    Icon,
    HeartFill
  },
  setup() {
    const text = ref('Button')
    const color = ref('')

    const type = ref('')

    const props = ref([])

    const atts = computed(() => {
      const obj = {}
      props.value
        .filter((item) => item !== 'icon')
        .map((item) => (obj[item] = true))

      obj['color'] = color.value

      return obj
    })

    return {
      text,
      color,
      type,
      props,
      atts
    }
  }
})
</script>

<style scoped>
.grid {
  width: 100%;
  height: 300px;
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
</style>
