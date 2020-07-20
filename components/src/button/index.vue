<template>
  <button
    :class="status === 'loading'
      ? 'button--loading'
      : 'button'
    "
    type="button"
    :autofocus="autofocus"
    :disabled="status === 'disabled'"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup="props, { emit }" lang="ts">

declare const props: {
  status?: 'normal' | 'disabled'
  autofocus: boolean
}

declare function emit(event: 'on-click'): void

export const handleClick = () => {
  props.status === 'normal'
    ? emit('on-click')
    : undefined
}

</script>

<style lang="scss">
%button {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
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

.button {
  @extend %button;

  &:hover {
    cursor: pointer;
    color: rgb(240, 240, 240);
    background-color: rgb(32, 123, 180);
  }

  &:active {
    color: rgb(231, 231, 231);
    box-shadow: inset 0 0 20px 2px rgba(241, 241, 241, .3);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    color: rgb(192, 192, 192);
    background-color: rgb(225, 239, 248);
  }

  &--loading {
    @extend %button;
    background-color: rgb(83, 172, 228);
    cursor: wait;

    &:focus {
      outline: none;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50%;
      height: 4px;
      background-color: rgb(32, 123, 180);
      animation: buttonloading .5s linear infinite forwards;
    }
  }
}

@keyframes buttonloading {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(200%);
  }
}
</style>
