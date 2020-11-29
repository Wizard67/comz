<template>
  <div
    class="cswitch"
    :class="className"
    @click="handleValueChange"
  >
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  modelValue: boolean
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: boolean): void

import { toRefs } from 'vue'
import { useBEM } from '@comz/vca'

export const { modelValue, disabled } = toRefs(props)

export const className = useBEM(({b, m}) => ({
  [b('cswitch')]: true,
  [m('checked')]: modelValue,
  [m('disabled')]: disabled
}), { blockPrefix: false })

export const handleValueChange = () => {
  if (disabled.value) return
  emit('update:modelValue', !modelValue.value)
}

export default {}
</script>
