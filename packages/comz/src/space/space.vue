<template>
  <section :class="className" :style="cssVars">
    <slot />
  </section>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  gap?: string
  align?: string
  justify?: string
  center: boolean
  inline: boolean
  fill: boolean
  vertical: boolean
  wrap: boolean
}

import { toRefs } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'

const { inline, fill, vertical, wrap, gap, align, justify, center } = toRefs(props)

export const className = useBEM(({b, m}) => ({
  [b('cspace')]: true,
  [m('center')]: center,
  [m('inline')]: inline,
  [m('fill')]: fill,
  [m('wrap')]: wrap,
  [m('vertical')]: vertical
}))

export const cssVars = useCssVars({
  '--cspace-gap': gap,
  '--cspace-align': align,
  '--cspace-justify': justify
}, { scoped: true })

export default {}
</script>
