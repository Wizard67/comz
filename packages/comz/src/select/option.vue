<template>
  <div
    class="coption"
    :class="className"
    @click="changeState"
  >
    <slot />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  value: unknown
  label: string
}

import { inject, computed, reactive, toRefs } from 'vue'
import { useBEM } from '@comz/vca'
import { handler, current, useOptionState } from './utils'

const currentValue = inject(current)
const { value, label } = toRefs(props)

export const { state, changeState } = useOptionState(
  currentValue!,
  reactive({ value, label }),
  inject(handler)!
)

export const className = useBEM(({b, m}) => ({
  [b('coption')]: true,
  [m('selected')]: computed(() => state.value === 'selected'),
}), { blockPrefix: false })

export default {}
</script>
