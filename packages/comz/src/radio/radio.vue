<template>
  <label :class="inputClassName">
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      @change="handleInput"
    />
    <slot></slot>
  </label>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'

declare const props: {
  value: string
  modelValue: string | number
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

export const inputClassName = computed(() => {
  const classNameList = ['radio']

  if (props.value === props.modelValue) classNameList.push('checked')
  if (props.disabled) classNameList.push('disabled')

  return classNameList.join('--')
})

export const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (<HTMLInputElement>event.target).value)
}

export default {}
</script>

<style lang="scss">
%radio {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  margin: 4px 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
  color: rgb(51, 51, 51);
  font-size: 14px;
  cursor: pointer;

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 1px rgb(52, 142, 199) solid;
    cursor: inherit;
  }

  input[type="radio"] {
    width: 1em;
    height: 1em;
    margin: 0 .25em 0 0;
    opacity: 0;
    font-size: inherit;
    cursor: inherit;
  }
}

[class^="radio"] {
  @extend %radio;

  &:focus {
    outline: none;
  }

  &[class*="--checked"] {
    @extend %radio;

    &::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(50%, -50%);
      width: .5em;
      height: .5em;
      border-radius: 50%;
      background-color: rgb(52, 142, 199);
    }
  }

  &[class*="--disabled"] {
    @extend %radio;
    color: rgba(0, 0, 0, .2);
    cursor: not-allowed;

    &::before {
      border: 1px rgba(0, 0, 0, .2) solid;
    }
    &::after {
      background-color: rgba(0, 0, 0, .2);
    }
  }
}
</style>