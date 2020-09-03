<template>
  <label :class="radioClassName">
    <input
      type="radio"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleInput"
    />
    <slot></slot>
  </label>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useClassName } from '@comz/vca'

declare const props: {
  value: string
  modelValue: string | number
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

export const checked = computed(() => props.value === props.modelValue)

export const radioClassName = useClassName('c-radio', {
  'checked': checked,
  'disabled': computed(() => props.disabled)
})

export const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (<HTMLInputElement>event.target).value)
}

export default {}
</script>

<style lang="scss">
$block: '.c-radio';

%radio {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  padding: 0;
  transform: translate3d(0, 0, 0);
  color: rgb(51, 51, 51);
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

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
    opacity: 0;
    transition: opacity .3s ease-in-out;
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

#{$block} {
  @extend %radio;
}

#{$block}--checked {
  @extend %radio;
  &::after {
    opacity: 1;
  }
}

#{$block}--disabled {
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

#{$block}--checked--disabled {
  @extend #{$block}--checked; 
  @extend #{$block}--disabled; 
}
</style>