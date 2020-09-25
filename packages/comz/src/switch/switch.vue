<template>
  <div
    :class="cswitch"
    @click="handleValueChange"
  >
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { toRefs } from 'vue'
import { useClassName } from '@comz/vca'

declare const props: {
  modelValue: boolean
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: boolean): void

export const { modelValue, disabled } = toRefs(props)

export const cswitch = useClassName('cswitch', {
  'checked': modelValue,
  'disabled': disabled
})

export const handleValueChange = () => {
  if (disabled.value) return
  emit('update:modelValue', !modelValue.value)
}

export default {}
</script>

<style lang="scss">
$block: '.cswitch';

%switch {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  width: 2.5em;
  height: 22px;
  padding: 4px 0;
  color: rgb(52, 142, 199);
  font-size: 14px;
  line-height: 1.2em;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 0;
  }
  &::before {
    left: .5em;
    transform: translateY(-50%);
    width: 1.5em;
    height: 4px;
    border-radius: 200px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-color: currentColor;
    clip-path: polygon(.5em 0, 100% 0, 100% 100%, .5em 100%);
    transition: clip-path 0s linear 0.02s;
  }

  &::after {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: translateY(-50%) translateZ(0);
    border: 2px currentColor solid;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: transform .1s ease-in-out,
                background-color .1s ease-in-out;
    cursor: inherit;
  }
}

#{$block} {
  @extend %switch;

  &--checked {
    @extend %switch;

    &::before {
      clip-path: none;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      transform: translateY(-50%) translateZ(0);
    }

    &::after {
      background-color: currentColor;
      transform: translateX(1.5em) translateY(-50%) translateZ(0);
    }
  }

  &--disabled {
    @extend %switch;

    color: #c7c7c7;
    cursor: not-allowed;
  }

  &--checked--disabled {
    @extend #{$block}--checked; 
    @extend #{$block}--disabled; 
  }
}
</style>