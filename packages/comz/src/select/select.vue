<template>
  <div class="cselect" ref="selectRef">
    <div
      class="cselect__selector"
      @click.stop="togglePanelState"
    >
      <div :class="cselect__field">{{ currentText }}</div>

      <div class="cselect__icon">
        <Icon link>
          <ChevronUp v-if="expand" />
          <ChevronDown v-else />
        </Icon>
      </div>
    </div>

    <div :class="cselect__options">
      <slot />
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
export { default as Icon } from '../icon/icon.vue'
export { ChevronDown, ChevronUp } from '@comz/icons'

import { ref, toRefs, computed, provide } from 'vue'
import { useClassName } from '@comz/vca'

import { handler, current, useClickOutSide, isEmpty } from './utils'

declare const props: {
  placeholder?: string,
  modelValue: unknown
}

declare function emit (event: 'update:modelValue', value: unknown): void

export const expand = ref(false)
export const label = ref('')

export const { modelValue, placeholder } = toRefs(props)

provide(current, modelValue)
provide(handler, payload => {
  label.value = payload.label
  togglePanelState()
  emit('update:modelValue', payload.value)
})

export const cselect__field = useClassName('cselect__field', {
  'empty': computed(() => isEmpty(modelValue.value))
})

export const cselect__options = useClassName('cselect__options', {
  'open': expand
})

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

<style lang="scss">
$block: '.cselect';

#select {
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  width: var(--cinput-width, 100%);
  padding: 4px 8px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  color: rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2em;
  cursor: pointer;
}

#{$block} {
  @extend #select;

  &__selector {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__field {
    flex: auto;

    &--empty {
      flex: auto;
      color: rgba(0, 0, 0, .3);
    }
  }

  &__icon {
    flex: none;
  }

  &__options {
    display: none;

    &--open {
      display: block;
      box-sizing: border-box;
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      width: 100%;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      background-color: white;
      z-index: 200;
    }
  }
}
</style>