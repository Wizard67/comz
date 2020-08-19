<template>
  <div :class="iconClassName">
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { useCssVars, computed } from 'vue'

declare const props: {
  size?: string
  color?: string
  strokeWidth?: number
  spin: boolean
}

export const iconClassName = computed(() => {
  const classNameList = ['icon']

  if (props.spin) classNameList.push('spin')

  return classNameList.join('--')
})

useCssVars(() => ({ size: props.size || '' }))
useCssVars(() => ({ color: props.color || '' }))
useCssVars(() => ({ 'stroke-width': String(props.strokeWidth) || '' }))

export default {}
</script>

<style lang="scss">
[class^=icon] {
  display: inline-flex;
  align-items: center;
  color: var(--color, inhert);
  font-size: var(--size, inhert);
  line-height: var(--size, inhert);
  stroke-width: var(--stroke-width, 1);

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