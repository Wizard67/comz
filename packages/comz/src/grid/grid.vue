<template>
  <div :class="className" :style="cssVars">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { toRefs } from 'vue'

import { useBEM, useCssVars } from '@comz/vca'

const props = defineProps({
  areas: { type: String, required: false },
  rows: { type: String, required: false },
  columns: { type: String, required: false },
  autoRows: { type: String, required: false },
  autoColumns: { type: String, required: false },
  flow: { type: String, required: false },
  gap: { type: String, required: false },
  inline: { type: Boolean, required: true }
})

const { areas, rows, columns, autoRows, autoColumns, flow, gap, inline } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('cgrid')]: true,
  [m('inline')]: inline
}))

const cssVars = useCssVars({
  '--cgrid-areas': areas,
  '--cgrid-rows': rows,
  '--cgrid-columns': columns,
  '--cgrid-auto-rows': autoRows,
  '--cgrid-auto-columns': autoColumns,
  '--cgrid-flow': flow,
  '--cgrid-gap': gap
}, { scoped: true })
</script>
