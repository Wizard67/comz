<template>
  <div
    :class="coption"
    @click="changeState"
  >
    <slot />
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

const currentValue = inject(current)
const { value, label } = toRefs(props)

export const { state, changeState } = useOptionState(
  currentValue!,
  reactive({ value, label }),
  inject(handler)!
)

export const coption = useClassName('coption', {
  'selected': computed(() => state.value === 'selected')
})

export default {}
</script>

<style lang="scss">
$block: '.coption';

#option {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 24px;
  padding: 0 8px;
  color: rgb(51, 51, 51);

  &:first-child {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
  &:last-child {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
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
  transition: background-color .2s ease-in-out;
}
</style>