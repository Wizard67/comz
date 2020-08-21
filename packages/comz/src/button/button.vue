<template>
  <button
    type="button"
    :class="buttonClassName"
    :autofocus="autofocus"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useClassName } from '@comz/vca'

declare const props: {
  loading: boolean
  disabled: boolean
  autofocus: boolean
}

declare function emit(event: 'on-click'): void

export const buttonClassName = useClassName('c-button', {
  'loading': computed(() => props.loading),
  'disabled': computed(() => props.disabled)
})

export const handleClick = () => emit('on-click')

export default {}
</script>

<style lang="scss">
$block: ".c-button";

%button {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: 2em;
  padding: 4px 16px;
  color: white;
  border: none;
  background-color: rgb(52, 142, 199);
  font-size: 14px;
  letter-spacing: 1px;
  user-select: none;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, .2);
  transition: box-shadow .1s ease-in-out;
  overflow: hidden;
}

#{$block} {
  @extend %button;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    color: rgb(240, 240, 240);
    background-color: rgb(32, 123, 180);
  }

  &:active {
    color: rgb(231, 231, 231);
    box-shadow: inset 0 0 20px 2px rgba(241, 241, 241, .3);
  }
}

#{$block}--loading {
  @extend %button;
  background-color: rgb(83, 172, 228);
  cursor: wait;

  &:focus {
    outline: none;
  }

  &:active {
    color: rgb(231, 231, 231);
    box-shadow: inset 0 0 20px 2px rgba(241, 241, 241, .3);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 4px;
    background-color: rgb(32, 123, 180);
    animation: c-button-loading .5s linear infinite forwards;
  }
}

#{$block}--disabled {
  @extend %button;
  cursor: not-allowed;
  color: #b1b1b1;
  background-color: rgb(225, 239, 248);
}

#{$block}--loading--disabled {
  @extend #{$block}--loading;
  @extend #{$block}--disabled;

  &::after {
    background-color: rgb(102, 188, 241);
  }
}

@keyframes c-button-loading {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(200%);
  }
}
</style>
