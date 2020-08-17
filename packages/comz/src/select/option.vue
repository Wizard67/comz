<template>
  <div :class="selectorClassName" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { inject, computed, ref, watch } from 'vue'
import { key, value } from './use'

declare const props: {
  value: any
}

const handle = inject(key)

const state = ref<string>('normal')
const current = inject(value)!

watch(() => current.value, value => {
  state.value = props.value === value? 'selected': 'normal' 
})

export const selectorClassName = computed(() => {
  const classNameList = ['option']

  if (state.value === 'selected') classNameList.push('selected')

  return classNameList.join('--')
})

export const handleClick = () => {
  handle?.(props.value)
}

export default {}
</script>

<style lang="scss">
[class^=option] {
  padding: 0 8px;
  color: rgb(51, 51, 51);

  &:hover {
    background-color: rgba(0, 0, 0, .2);
  }

  &[class*=selected] {
    color: white;
    background-color: rgb(52, 142, 199);
  }
}
</style>