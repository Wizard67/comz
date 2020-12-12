<template>
  <Flex gap="160px">
    <Flex gap="24px">
      <Radio v-model="value" value="image1">
        <Icon size="64px" color="#d2d2d2"><CardImage/></Icon>
      </Radio>
      <Radio v-model="value" value="image2">
        <Icon size="64px" color="#d2d2d2"><CardImage/></Icon>
      </Radio>
      <Radio v-model="value" value="image3">
        <Icon size="64px" color="#d2d2d2"><CardImage/></Icon>
      </Radio>
    </Flex>
  </Flex>
</template>

<script>
import { ref } from 'vue'
import { Flex, Radio, Icon } from 'comz'
import { CardImage } from '@comz/icons'

export default {
  components: {
    Flex, Radio,
    Icon, CardImage
  },
  setup() {
    return {
      value: ref('')
    }
  }
}
</script>
