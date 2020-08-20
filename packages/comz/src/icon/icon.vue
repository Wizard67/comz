<template>
  <div :class="iconClassName">
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useClassName, useCssVars } from '../../vcas'

declare const props: {
  size?: string
  color?: string
  strokeWidth?: number
  spin: boolean
}

export const iconClassName = useClassName('icon', {
  'spin': computed(() => props.spin)
})

useCssVars({
  'icon-size': computed(() => props.size),
  'icon-color': computed(() => props.color),
  'icon-stroke-width': computed(() => props.strokeWidth)
})

export default {}
</script>

<style lang="scss">
[class^=icon] {
  display: inline-flex;
  align-items: center;
  color: var(--icon-color, inhert);
  font-size: var(--icon-size, inhert);
  line-height: var(--icon-size, inhert);
  stroke-width: var(--icon-stroke-width, 1);

  &[class*=--spin] {
    animation: icon-spin .85s linear infinite;
  }
}

@keyframes icon-spin {
  100% {
    transform: rotate(-1turn);
  }
}
</style>