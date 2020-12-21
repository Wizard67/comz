<template>
  <label :class="className">
    <div class="cradio__button">{{ '\u200b' }}</div>
    <input
      class="cradio__field"
      type="radio"
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
  modelValue: string | number | boolean | any[] | object
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

import { computed, toRefs } from 'vue'
import { useBEM } from '@comz/vca'

const { disabled } = toRefs(props)

export const checked = computed(() =>
  JSON.stringify(props.value) === JSON.stringify(props.modelValue)
)

export const className = useBEM(({ b, m }) => ({
  [b('cradio')]: true,
  [m('checked')]: checked,
  [m('disabled')]: disabled
}))

export const handleValueChange = (event: InputEvent) => {
  // to avoid object-value being stringify, return props.value
  emit('update:modelValue', props.value)
}

export default {}
</script>
