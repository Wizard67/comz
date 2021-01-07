<template>
  <section :class="className" :style="cssVars">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { toRefs } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'
import { string, bool } from 'vue-types'

const props = defineProps({
  areas: string(),
  rows: string(),
  columns: string(),
  autoRows: string(),
  autoColumns: string(),
  flow: string(),
  padding: string(),
  gap: string(),
  inline: bool().isRequired
})

const {
  areas,
  rows,
  columns,
  autoRows,
  autoColumns,
  flow,
  padding,
  gap,
  inline
} = toRefs(props)

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
  '--cgrid-padding': padding,
  '--cgrid-gap': gap
})
</script>
