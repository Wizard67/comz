<template>
  <div
    :class="selectorClassName"
    @click="changeState"
  >
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { inject, computed, reactive, toRefs } from 'vue'
import { useClassName } from '@comz/vca'

import { handler, current, useOptionState } from './utils'

declare const props: {
  value: unknown
  label: string
}

const { value, label } = toRefs(props)

export const { state, changeState } = useOptionState(
  inject(current)!,
  reactive({ value, label }),
  inject(handler)!
)

export const selectorClassName = useClassName('c-option', {
  'selected': computed(() => state.value === 'selected')
})

export default {}
</script>

<style lang="scss">
$block: '.c-option';

#option {
  padding: 0 8px;
  color: rgb(51, 51, 51);
}

#{$block} {
  @extend #option;

  &:hover {
    background-color: rgba(0, 0, 0, .05);
  }
}

#{$block}--selected {
  @extend #option;
  color: white;
  background-color: rgb(52, 142, 199);
  transition: background-color .3s ease-in-out;
}
</style>