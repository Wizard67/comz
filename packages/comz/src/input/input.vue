<template>
  <div :class="className">
    <div v-if="$slots.prepend" class="cinput__prepend">
      <slot name="prepend" />
    </div>

    <div class="cinput__wrapper">
      <input
        type="text"
        :class="fieldClassName"
        :value="modelValue"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        @input="handleInputChange"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      >
      <div
        v-if="allowClear"
        class="cinput__clear"
        @click="clearValue"
      >
        <XCircleFill />
      </div>
    </div>

    <div v-if="$slots.append" class="cinput__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  modelValue: string
  placeholder?: string
  readonly: boolean
  disabled: boolean
  clearable: boolean
}

declare function emit (event: 'update:modelValue', value: string): void
declare function emit (event: 'on-focus', value: string): void
declare function emit (event: 'on-blur', value: string): void
declare function emit (event: 'on-clear'): void

import { computed, toRefs } from 'vue'
import { useBEM } from '@comz/vca'

export { XCircleFill } from '@comz/icons'

const { readonly, disabled } = toRefs(props)

export const className = useBEM(({ b, m }) => ({
  [b('cinput')]: true,
  [m('disabled')]: disabled
}))

export const fieldClassName = useBEM(({ b, e, m }) => ({
  [b('cinput')]: true,
  [e('field')]: true,
  [m('readonly')]: readonly,
  [m('disabled')]: disabled
}))

export const allowClear = computed(() =>
  props.modelValue?.length &&
  props.clearable &&
  !props.readonly &&
  !props.disabled
)

export const handleInputChange = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

export const handleInputFocus = (event: InputEvent) => {
  emit('on-focus', (event.target as HTMLInputElement).value)
}

export const handleInputBlur = (event: InputEvent) => {
  emit('on-blur', (event.target as HTMLInputElement).value)
}

export const clearValue = () => {
  emit('update:modelValue', '')
  emit('on-clear')
}

export default {}
</script>
