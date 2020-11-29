<template>
  <div class="cinput" :style="inputCssVars">
    <input
      type="text"
      :class="className"
      :style="inputFieldCssVars"
      :value="modelValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
    >
    <div v-if="showClearButton" class="cinput__clear">
      <Icon @on-click="handleClear" link><X /></Icon>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  modelValue: string
  placeholder?: string
  width?: string
  readonly: boolean
  disabled: boolean
  clearable: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

import { computed, toRefs } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'

export { default as Icon } from '../icon/icon.vue'
export { X } from '@comz/icons'

const { disabled, width } = toRefs(props)

export const className = useBEM(({ b, e, m }) => ({
  [b('cinput')]: true,
  [e('field')]: true,
  [m('disabled')]: disabled
}))

export const inputCssVars = useCssVars({
  '--cinput-width': width
})

export const inputFieldCssVars = useCssVars({
  '--cinput-field-rpadding': computed(() => 
    showClearButton.value ? '1.5em': undefined
  )
})

export const showClearButton = computed(() =>
  props.modelValue?.length > 0 &&
  props.clearable &&
  !props.readonly &&
  !props.disabled
)

export const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

export const handleClear = () => {
  emit('update:modelValue', '')
}

export default {}
</script>
