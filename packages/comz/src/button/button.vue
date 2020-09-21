<template>
  <button
    type="button"
    :class="cbutton"
    :autofocus="autofocus"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup="props, { emit }" lang="ts">
import { toRefs } from 'vue'
import { useClassName } from '@comz/vca'

declare const props: {
  loading: boolean
  disabled: boolean
  autofocus: boolean
}

declare function emit(event: 'on-click'): void

const { loading, disabled } = toRefs(props)

export const cbutton = useClassName('cbutton', {
  'loading': loading,
  'disabled': disabled
})

export const handleClick = () => emit('on-click')

export default {}
</script>

<style lang="scss">
$block: ".cbutton";

%button {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  padding: 4px 16px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: rgb(52, 142, 199);
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.2em;
  user-select: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
    animation: cbutton-loading .5s linear infinite forwards;
  }
}

#{$block}--disabled {
  @extend %button;
  box-shadow: inset 0 0 20px 2px rgba(241, 241, 241, .3);
  color: #b1b1b1;
  background-color: rgb(238, 238, 238);
  cursor: not-allowed;
}

#{$block}--loading--disabled {
  @extend #{$block}--loading;
  @extend #{$block}--disabled;
  box-shadow: inset 0 0 20px 2px rgba(241, 241, 241, .3);

  &::after {
    background-color: rgb(189, 189, 189);
  }
}

@keyframes cbutton-loading {
  from { transform: translateX(-100%); }
  to { transform: translateX(200%); }
}
</style>
