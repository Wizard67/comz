<template>
  <section
    ref="flexRef"
    :class="className"
    :style="cssVars"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ref, toRefs, computed } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'
import { string, bool } from 'vue-types'
import { useFlexPolyfillGapItem } from './utils'

const props = defineProps({
  gap: string(),
  align: string(),
  justify: string(),
  center: bool().isRequired,
  inline: bool().isRequired,
  vertical: bool().isRequired,
  wrap: bool().isRequired
})

const { inline, vertical, wrap, gap, align, justify, center } = toRefs(props)

const flexRef = ref<HTMLLIElement | null>(null)

useFlexPolyfillGapItem(flexRef, computed(() => props.gap ?? '8px'))

const className = useBEM(({ b, m }) => ({
  [b('cflex')]: true,
  [m('center')]: center,
  [m('inline')]: inline,
  [m('wrap')]: wrap,
  [m('vertical')]: vertical
}))

const cssVars = useCssVars({
  '--cflex-gap': gap,
  '--cflex-align': align,
  '--cflex-justify': justify
}, { scoped: true })
</script>
