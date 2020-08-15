<template>
  <label :class="inputClassName">
    <input
      type="checkbox"
      :value="value"
      :checked="modelValue.includes(value)"
      :disabled="disabled"
      @change="handleInput"
    />
    <slot></slot>
  </label>
</template>

<script setup="props, { emit }" lang="ts">
import { computed, reactive } from 'vue'

declare const props: {
  value: string
  modelValue: string[]
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

export const inputClassName = computed(() => {
  const classNameList = ['checkbox']

  if (props.disabled) classNameList.push('disabled')
  if (props.modelValue.includes(props.value)) classNameList.push('checked')

  return classNameList.join('--')
})

const checkeds = reactive<string[]>(props.modelValue)

export const handleInput = (event: InputEvent) => {
  const value = (<HTMLInputElement>event.target).value
  const index = props.modelValue.indexOf(value)

  index >= 0
  ? checkeds.splice(index, 1)
  : checkeds.push(value)

  emit('update:modelValue', checkeds)
}

export default {}
</script>

<style lang="scss">
%checkbox {
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
    border: 1px rgb(52, 142, 199) solid;
    cursor: inherit;
  }

  input[type="checkbox"] {
    width: 1em;
    height: 1em;
    margin: 0 .25em 0 0;
    opacity: 0;
    font-size: inherit;
    cursor: inherit;
  }
}

[class^="checkbox"] {
  @extend %checkbox;

  &:focus {
    outline: none;
  }

  &[class*="--checked"] {
    @extend %checkbox;

    &::before {
      background-color: rgb(52, 142, 199);
    }
    &::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: .65em;
      left: .125em;
      transform: translate(50%, -50%) rotate(45deg) scale(.8);
      width: .4em;
      height: .8em;
      border-right: .21em white solid;
      border-bottom: .21em white solid;
    }
  }

  &[class*="--disabled"] {
    @extend %checkbox;
    color: rgba(0, 0, 0, .2);
    cursor: not-allowed;

    &::before {
      border: 1px rgba(0, 0, 0, .2) solid;
      background-color: rgba(0, 0, 0, .2);
    }
    &::after {
      // background-color: rgba(0, 0, 0, .2);
    }
  }
}
</style>