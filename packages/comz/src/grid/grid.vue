<template>
  <div :class="className" :style="cssVars">
    <slot />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  areas?: string
  rows?: string
  columns?: string
  autoRows?: string
  autoColumns?: string
  flow?: 'row' | 'column' | 'row dense' | 'column dense'
  gap?: string
  inline: boolean
}

import { toRefs } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'

const { areas, rows, columns, autoRows, autoColumns, flow, gap, inline } = toRefs(props)

export const className = useBEM(({ b, m }) => ({
  [b('cgrid')]: true,
  [m('inline')]: inline
}))

export const cssVars = useCssVars({
  '--cgrid-areas': areas,
  '--cgrid-rows': rows,
  '--cgrid-columns': columns,
  '--cgrid-auto-rows': autoRows,
  '--cgrid-auto-columns': autoColumns,
  '--cgrid-flow': flow,
  '--cgrid-gap': gap
}, { scoped: true })

export default {}
</script>
