<template>
  <div :class="className" @click="handleValueChange">
    <div v-if="$slots.prepend" class="cswitch__prepend">
      <slot name="prepend" />
    </div>

    <div class="cswitch__field"></div>

    <div v-if="$slots.append" class="cswitch__append">
      <slot name="append" />
    </div>
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

const { modelValue, disabled } = toRefs(props)

export const className = useBEM(({ b, m }) => ({
  [b('cswitch')]: true,
  [m('checked')]: modelValue,
  [m('disabled')]: disabled
}))

export const handleValueChange = () => {
  if (disabled.value) return
  emit('update:modelValue', !modelValue.value)
}

export default {}
</script>
