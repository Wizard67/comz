<template>
  <div
    class="c-select"
    ref="selectRef"
  >
    <div
      class="c-select__selector"
      @click="handleSelectClick"
    >
      <div :class="fieldClassName">
        {{ label || modelValue || placeholder }}
      </div>

      <div class="c-select__helper">
        <Icon link>
          <ChevronDown v-if="state === 'normal'" />
          <ChevronUp v-else />
        </Icon>
      </div>
    </div>

    <div :class="optionsClassName">
      <slot></slot>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { ref, computed, provide } from 'vue'
import Icon from '../icon/icon.vue'
import { ChevronDown, ChevronUp } from '@comz/icons'
import { useClassName } from '@comz/vca'

import { handler, current, useClickOutSide } from './utils'

declare const props: {
  placeholder?: string,
  modelValue: unknown
}

declare function emit (event: 'update:modelValue', value: any): void

export const selectRef = ref<HTMLElement | null>(null)
export const state = ref('normal')
export const label = ref('')

provide(current, computed(() => props.modelValue))
provide(handler, payload => {
  label.value = payload.label
  emit('update:modelValue', payload.value)
})

export const fieldClassName = useClassName(
  'c-select__field',
  { 'empty': computed(() => props.modelValue === '') }
)
export const optionsClassName = useClassName(
  'c-select__options',
  { 'open': computed(() => state.value === 'open') }
)

useClickOutSide(
  computed(() => state.value === 'open'),
  selectRef,
  result => state.value = result ? 'open' : 'normal'
)

export const handleSelectClick = () => {
  state.value = state.value === 'open'? 'normal': 'open'
}

export default {
  components: {
    Icon, ChevronDown, ChevronUp
  }
}
</script>

<style lang="scss">
$block: '.c-select';

#select {
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  display: flex;
  min-width: 200px;
  height: 28px;
  padding: 0 8px;
  border: 1px rgba(0, 0, 0, .2) solid;
  color: rgb(51, 51, 51);
  font-size: 14px;
  cursor: pointer;
}

#{$block} {
  @extend #select;
}

#{$block}__selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

#{$block}__field {
  flex: auto;
}
#{$block}__field--empty {
  flex: auto;
  color: rgba(0, 0, 0, .3);
}

#{$block}__helper {
  flex: none;
}

#{$block}__options {
  display: none;
}

#{$block}__options--open {
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: -1px;
  width: calc(100% + 2px);
  border: 1px rgba(0, 0, 0, .2) solid;
  line-height: 28px;
}
</style>