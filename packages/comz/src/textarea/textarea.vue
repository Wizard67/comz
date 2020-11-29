<template>
  <div class="ctextarea">
    <textarea
      class="ctextarea__field"
      :class="className"
      :style="cssVars"
      :value="modelValue"
      :rows="textareaRows"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
    ></textarea>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  modelValue: string | number
  width?: string
  rows?: number
  placeholder?: string
  readonly: boolean
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

import { computed, toRefs } from 'vue'
import { useBEM,  useCssVars } from '@comz/vca'

const { rows, disabled, width } = toRefs(props)

export const textareaRows = computed(() => rows?.value ?? 2)

export const className = useBEM(({b, e, m}) => ({
  [b('ctextarea')]: true,
  [e('field')]: true,
  [m('disabled')]: disabled
}), { blockPrefix: false })

export const cssVars = useCssVars({
  '--ctextarea-width': width
})

export const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}

export default {}
</script>
