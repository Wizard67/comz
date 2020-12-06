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
  [b('cflex')]: true,
  [m('center')]: center,
  [m('inline')]: inline,
  [m('fill')]: fill,
  [m('wrap')]: wrap,
  [m('vertical')]: vertical
}))

export const cssVars = useCssVars({
  '--cflex-gap': gap,
  '--cflex-align': align,
  '--cflex-justify': justify
}, { scoped: true })

export default {}
</script>
