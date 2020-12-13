<template>
  <Flex gap="160px">
    <Flex gap="24px">
      <Checkbox v-model="value" value="image1">
        <Icon size="64px" color="#d2d2d2"><CardImage/></Icon>
      </Checkbox>
      <Checkbox v-model="value" value="image2">
        <Icon size="64px" color="#d2d2d2"><CardImage/></Icon>
      </Checkbox>
      <Checkbox v-model="value" value="image3">
        <Icon size="64px" color="#d2d2d2"><CardImage/></Icon>
      </Checkbox>
    </Flex>
  </Flex>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Flex, Checkbox, Icon } from 'comz'
import { CardImage } from '@comz/icons'

export default defineComponent({
  components: {
    Flex, Checkbox,
    Icon, CardImage
  },
  setup() {
    return {
      value: ref([])
    }
  }
})
</script>
