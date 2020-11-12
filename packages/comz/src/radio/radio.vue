<template>
  <label class="cradio" :class="className">
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
  value: string
  modelValue: string | number
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

import { computed, ref, toRefs } from 'vue'
import { useBEM } from '@comz/vca'

const { disabled } = toRefs(props)

export const checked = computed(() => props.value === props.modelValue)

export const className = useBEM(({b, e, m}) => ({
  [b('cradio')]: ref(true),
  [m('checked')]: checked,
  [m('disabled')]: disabled
}), { blockPrefix: false })

export const handleValueChange = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

export default {}
</script>
