<template>
  <label :class="className">
    <div class="ccheckbox__button">{{ '\u200b' }}</div>
    <input
      type="checkbox"
      class="ccheckbox__field"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleValueChange"
    />
    <slot />
  </label>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  value: string | number | boolean | any[] | object
  modelValue: (string | number | boolean | any[] | object)[]
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: any[]): void

import { computed, toRefs } from 'vue'
import { useBEM } from '@comz/vca'

const { disabled } = toRefs(props)

const strModelValue = computed(() =>
  props.modelValue.map(item => JSON.stringify(item))
)
const strValue = computed(() => JSON.stringify(props.value))

export const checked = computed(() =>
  strModelValue.value.includes(strValue.value)
)

export const className = useBEM(({ b, m }) => ({
  [b('ccheckbox')]: true,
  [m('checked')]: checked,
  [m('disabled')]: disabled
}))

export const handleValueChange = (event: InputEvent) => {
  const index = strModelValue.value.indexOf(strValue.value)

  index >= 0
  ? props.modelValue.splice(index, 1)
  : props.modelValue.push(props.value)

  emit('update:modelValue', props.modelValue)
}

export default {}
</script>
