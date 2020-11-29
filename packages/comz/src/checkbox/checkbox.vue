<template>
  <label class="ccheckbox" :class="className">
    <input
      type="checkbox"
      class="ccheckbox__field"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
    />
    <slot />
  </label>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  value: string
  modelValue: string[]
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: string[]): void

import { reactive, computed, toRefs } from 'vue'
import { useBEM } from '@comz/vca'

const { disabled } = toRefs(props)
const checkeds = reactive(props.modelValue)

export const checked = computed(() => checkeds.includes(props.value))

export const className = useBEM(({b, e, m}) => ({
  [b('ccheckbox')]: true,
  [m('checked')]: checked,
  [m('disabled')]: disabled
}), { blockPrefix: false })

export const handleChange = (event: InputEvent) => {
  const value = (event.target as HTMLInputElement).value
  const index = props.modelValue.indexOf(value)

  index >= 0
  ? checkeds.splice(index, 1)
  : checkeds.push(value)

  emit('update:modelValue', checkeds)
}

export default {}
</script>
