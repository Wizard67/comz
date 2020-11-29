<template>
  <div class="cselect" ref="selectRef">
    <div
      class="cselect__selector"
      @click.stop="togglePanelState"
    >
      <div class="cselect__field" :class="fieldClassName">{{ currentText }}</div>
      <div class="cselect__icon">
        <Icon link>
          <ChevronUp v-if="expand" />
          <ChevronDown v-else />
        </Icon>
      </div>
    </div>
    <div class="cselect__options" :class="optionsClassName">
      <slot />
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  placeholder?: string,
  modelValue: unknown
}

declare function emit (event: 'update:modelValue', value: unknown): void

import { ref, toRefs, computed, provide } from 'vue'
import { useBEM } from '@comz/vca'
import { handler, current, useClickOutSide, isEmpty } from './utils'

export { default as Icon } from '../icon/icon.vue'
export { ChevronDown, ChevronUp } from '@comz/icons'

export const expand = ref(false)
export const label = ref('')

export const { modelValue, placeholder } = toRefs(props)

provide(current, modelValue)
provide(handler, payload => {
  label.value = payload.label
  togglePanelState()
  emit('update:modelValue', payload.value)
})

export const fieldClassName = useBEM(({b, e, m}) => ({
  [b('cselect')]: true,
  [e('field')]: true,
  [m('empty')]: computed(() => isEmpty(modelValue.value))
}), { blockPrefix: false })

export const optionsClassName = useBEM(({b, e, m}) => ({
  [b('cselect')]: true,
  [e('options')]: true,
  [m('open')]: expand
}), { blockPrefix: false })

export const selectRef = ref<HTMLElement | null>(null)

useClickOutSide(
  expand,
  selectRef,
  result => expand.value = result
)

export const currentText = computed(() => {
  return label.value || modelValue.value || placeholder?.value
})

export const togglePanelState = () => {
  expand.value = !expand.value
}

export default {}
</script>
