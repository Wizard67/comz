<template>
  <Grid
    class="grid"
    columns="auto 200px"
  >
    <GridItem>
      <Flex style="height: 100%" center>
        <Button v-bind="atts">
          <Icon v-if="props.includes('icon')"><HeartFill/></Icon>
          {{ text }}
        </Button>
      </Flex>
    </GridItem>

    <GridItem>
      <Flex class="side" vertical>
        <div class="title">Props</div>
        <Input v-model="text" placeholder="button text"></Input>
        <Checkbox v-model="props" value="danger">danger</Checkbox>
        <Checkbox v-model="props" value="icon">icon</Checkbox>
        <Checkbox v-model="props" value="loading">loading</Checkbox>
        <Checkbox v-model="props" value="disabled">disabled</Checkbox>
      </Flex>
    </GridItem>
  </Grid>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

import {
  Button,
  Grid, GridItem, Flex,
  Input, Checkbox, Icon
} from 'comz'

import { HeartFill } from '@comz/icons'

export default defineComponent({
  components: {
    Button,
    Grid, GridItem, Flex,
    Input, Checkbox,
    Icon, HeartFill
  },
  setup() {
    const props = ref([])

    const atts = computed(() => {
      const obj = {}
      props.value.map(item => {
        if (item !== 'icon') {
          obj[item] = true
        }
      })
      return obj
    })

    const text = ref('Button')

    return {
      props,
      atts,
      text
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
  margin-bottom: .5em;
  font-weight: bold;
}
</style>