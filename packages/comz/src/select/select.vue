<template>
  <div ref="selectRef" class="select" @click="handleSelectClick($event)">
    <div class="select__selector"  @click="handleSelectorClick">
      {{ currentSelectSet || placeholder }}
    </div>
    <div :class="selectorClassName">
      <slot></slot>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { ref, computed, onUnmounted, provide } from 'vue'
import { key, value } from './use'

declare const props: {
  placeholder?: string,
  modelValue: any
}

declare function emit (event: 'update:modelValue', value: any): void

export const state = ref('normal')
export const selectRef = ref<HTMLElement | null>(null)

provide(value, computed(() => props.modelValue))
provide(key, value => {
  emit('update:modelValue', value)
})

export const selectorClassName = computed(() => {
  const classNameList = ['select__options']

  if (state.value === 'open') classNameList.push('open')

  return classNameList.join('--')
})

const handle = (event: MouseEvent) => {
  const el = <HTMLInputElement>event.target
  const hasContains = selectRef.value?.contains(el)

  state.value = hasContains? 'open' : 'normal'
}

export const handleSelectClick = (el: MouseEvent) => {
  if (state.value === 'open') {
    window.addEventListener('click', handle)
  } else {
    window.removeEventListener('click', handle)
  }
}
onUnmounted(() => {
  window.removeEventListener('click', handle)
})

export const handleSelectorClick = () => {
  state.value = state.value === 'open'? 'normal': 'open'
}

export const currentSelectSet = computed(() => props.modelValue)

export default {}
</script>

<style lang="scss">
[class^=select] {
  position: relative;
  font-size: 14px;
  cursor: pointer;

  &[class*=__selector] {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    min-width: 200px;
    height: 28px;
    padding: 0 8px;
    border: 1px rgba(0, 0, 0, .2) solid;
    color: rgb(51, 51, 51);
  }

  &[class*=__options] {
    display: none;
  }
  &[class*=__options--open] {
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px rgba(0, 0, 0, .2) solid;
    line-height: 28px;
  }
}
</style>