<template>
  <section
    ref="rulerRef"
    class="cruler"
    :class="className"
  >
  </section>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  backgroundColor?: string
  borderColor?: string
  grid: boolean
}

import { toRefs } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'

export const { grid, backgroundColor, borderColor } = toRefs(props)

export const className = useBEM(({b, m}) => ({
  [b('cruler')]: true,
  [m('grid')]: grid
}), { blockPrefix: false })

export const cssVars = useCssVars({
  '--cruler-background-color': backgroundColor,
  '--cruler-border-color': borderColor
})

export default {}
</script>
