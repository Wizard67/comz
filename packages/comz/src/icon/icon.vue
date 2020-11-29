<template>
  <div
    :class="className"
    :style="cssVars"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  size?: string
  color?: string
  strokeWidth?: number
  spin: boolean
  link: boolean
}

declare function emit(event: 'on-click'): void

import { toRefs } from 'vue'
import { useBEM ,useCssVars } from '@comz/vca'

const { spin, link, size, color, strokeWidth } = toRefs(props)

export const handleClick = () => emit('on-click')

export const className = useBEM(({b, m}) => ({
  [b('cicon')]: true,
  [m('spin')]: spin,
  [m('link')]: link,
}))

export const cssVars = useCssVars({
  '--cicon-size': size,
  '--cicon-color': color,
  '--cicon-stroke-width': strokeWidth
})

export default {}
</script>
