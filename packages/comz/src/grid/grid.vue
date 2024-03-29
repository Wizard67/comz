<template>
  <section ref="$el" :class="className" :style="cssVars">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import { useBEM, useCssVars, useExpose } from '@comz/vca'
import { string, bool } from 'vue-types'
import { useCssShorthand } from '../utils/useCssShorthand'

const props = defineProps({
  areas: string(),
  rows: string(),
  columns: string(),
  autoRows: string(),
  autoColumns: string(),
  flow: string(),
  gap: string(),
  inline: bool().def(false),
  placeContent: string(),
  width: string(),
  height: string(),
  padding: string()
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
  inline,
  placeContent,
  width,
  height
} = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('cgrid')]: true,
  [m('inline')]: inline
}))

const [align, justify] = useCssShorthand(placeContent)

const cssVars = useCssVars({
  '--cgrid-areas': areas,
  '--cgrid-rows': rows,
  '--cgrid-columns': columns,
  '--cgrid-auto-rows': autoRows,
  '--cgrid-auto-columns': autoColumns,
  '--cgrid-flow': flow,
  '--cgrid-gap': gap,
  '--cgrid-align-content': align,
  '--cgrid-justify-content': justify,
  '--cgrid-width': width,
  '--cgrid-height': height,
  '--cgrid-padding': padding
})

const $el = useExpose()
</script>
