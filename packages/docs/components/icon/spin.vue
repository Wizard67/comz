<template>
  <Flex>
    <Icon spin><ArrowRepeat /></Icon>
    <Icon spin><ArrowClockwise /></Icon>
    <Icon spin><BrightnessHigh /></Icon>
  </Flex>
</template>

<script>
import { defineComponent } from 'vue'
import { Flex, Icon } from 'comz'
import { ArrowRepeat, ArrowClockwise, BrightnessHigh } from '@comz/icons'

export default defineComponent({
  components: {
    Flex,
    Icon,
    ArrowRepeat,
    ArrowClockwise,
    BrightnessHigh
  }
})
</script>
