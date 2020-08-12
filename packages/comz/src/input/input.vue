<template>
  <input
    :class="inputClassName"
    type="text"
    :value="modelValue"
    :readonly="readonly"
    :disabled="disabled"
    @input="handleInput"
  >
</template>

<script setup="props, { emit }" lang="ts">
import { ref, computed } from 'vue'

declare const props: {
  modelValue: string | number
  readonly: boolean
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

export const value = ref('')

export const inputClassName = computed(() => {
  const classNameList = ['input']

  if (props.readonly) classNameList.push('readonly')
  if (props.disabled) classNameList.push('disabled')

  return classNameList.join('--')
})

export const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (<HTMLInputElement>event.target).value)
}

export default {}
</script>

<style lang="scss">
%input {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  padding: 4px 8px;
  border: 1px rgba(0, 0, 0, .2) solid;
  color: rgb(51, 51, 51);
}

[class^="input"] {
  @extend %input;

  &:focus {
    outline: none;
  }

  &[class*="--disabled"] {
    @extend %input;
    color: rgba(0, 0, 0, .2);
    background-color: rgb(235, 235, 235);
    cursor: not-allowed;
  }

  &[class*="--readonly"] {
    @extend %input;
    // color: rgba(0, 0, 0, .2);
    background-color: rgb(235, 235, 235);
  }
}
</style>