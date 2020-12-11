<template>
  <section
    ref="flexRef"
    :class="className"
    :style="cssVars"
  >
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
  full: boolean
  vertical: boolean
  wrap: boolean
}

import { ref, toRefs, computed } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'

import { useFlexPolyfillGapItem } from './utils'

const { inline, full, vertical, wrap, gap, align, justify, center } = toRefs(props)

export const flexRef = ref<HTMLLIElement | null>(null)

useFlexPolyfillGapItem(flexRef, computed(() => props.gap ?? '8px'))

export const className = useBEM(({b, m}) => ({
  [b('cflex')]: true,
  [m('center')]: center,
  [m('inline')]: inline,
  [m('full')]: full,
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
