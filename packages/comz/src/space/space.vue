<template>
  <section
    class="cspace"
    :class="className"
    :style="cssVars"
  >
    <slot />
  </section>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  gap?: string
  align?: 'start' | 'center' | 'end'
  itemWidth?: string
  vertical: boolean
  wrap: boolean
}

import { ref, toRefs, computed } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'

const { vertical, wrap, gap, align, itemWidth } = toRefs(props)

export const className = useBEM(({b, m}) => ({
  [b('cspace')]: ref(true),
  [m('wrap')]: computed(() => !vertical.value && wrap.value),
  [m('vertical')]: computed(() => vertical.value && !wrap.value),
  [m('vertical-wrap')]: computed(() => vertical.value && wrap.value)
}), { blockPrefix: false })

export const cssVars = useCssVars({
  '--cspace-gap': gap,
  '--cspace-align': align,
  '--cspace-item-width': itemWidth
}, { scoped: true })

export default {}
</script>
