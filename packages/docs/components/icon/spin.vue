<template>
  <Space>
    <Icon spin><ArrowRepeat/></Icon>
    <Icon spin><ArrowClockwise/></Icon>
    <Icon spin><BrightnessHigh/></Icon>
  </Space>
</template>

<script>
import { defineComponent } from 'vue'
import { Space, Icon } from 'comz'
import { ArrowRepeat, ArrowClockwise, BrightnessHigh } from '@comz/icons'

export default defineComponent({
  components: {
    Space, Icon,
    ArrowRepeat, ArrowClockwise, BrightnessHigh
  }
})
</script>
