<template>
  <div
    ref="selectRef"
    :class="className"
  >
    <div
      class="cselect__selector"
      @click.stop="() => !disabled && toggle()"
    >
      <div :class="fieldClassName">{{ currentText }}</div>
      <div class="cselect__icon">
        <Icon>
          <ChevronUp v-if="expand" />
          <ChevronDown v-else />
        </Icon>
      </div>
    </div>
    <div :class="optionsClassName">
      <slot />
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  modelValue: string | number | boolean | any[] | object,
  placeholder?: string
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

import type { Ref } from 'vue'
import type { Handler } from './utils'

import { ref, toRefs, computed, provide, getCurrentInstance } from 'vue'
import { useBEM, useToggle } from '@comz/vca'
import { useClickOutSide, isEmpty } from './utils'

export { default as Icon } from '../icon/icon.vue'
export { ChevronDown, ChevronUp } from '@comz/icons'

const uid = getCurrentInstance()?.uid

const label = ref('')
const { modelValue, placeholder, disabled } = toRefs(props)

export const { state: expand, toggle } = useToggle(false)

export const handleClick = () => {
  // console.log(expand.value)
  toggle()
}

provide<Ref<unknown>>(`select-${uid}-value`, modelValue)
provide<Handler>(`select-${uid}-handler`, payload => {
  label.value = payload.label
  toggle(false)
  emit('update:modelValue', payload.value)
})

export const className = useBEM(({ b, m }) => ({
  [b('cselect')]: true,
  [m('disabled')]: disabled
}))

export const fieldClassName = useBEM(({ b, e, m }) => ({
  [b('cselect')]: true,
  [e('field')]: true,
  [m('empty')]: computed(() => isEmpty(modelValue.value))
}))

export const optionsClassName = useBEM(({ b, e, m }) => ({
  [b('cselect')]: true,
  [e('options')]: true,
  [m('open')]: expand
}))

export const selectRef = ref<HTMLElement | null>(null)

useClickOutSide(
  expand,
  selectRef,
  result => expand.value = result
)

export const currentText = computed(() =>
  label.value || modelValue.value || placeholder?.value
)

export default {}
</script>
