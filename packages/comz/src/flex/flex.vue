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
import { string, bool, oneOf } from 'vue-types'
import { useFlexPolyfillGapItem } from './utils'

const props = defineProps({
  inline: bool().isRequired,
  wrap: bool().isRequired,
  gap: string(),
  flow: oneOf(['', 'row', 'column', 'row-reverse', 'column-reverse']),
  justifyCenter: oneOf(['', 'flex-start', 'center', 'flex-end', 'baseline', 'stretch', 'space-between', 'space-around', 'space-evenly']),
  alignCenter: oneOf(['', 'flex-start', 'center', 'flex-end', 'baseline', 'stretch', 'space-between', 'space-around', 'space-evenly']),
  justifyItem: oneOf(['', 'flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
  alignItem: oneOf(['', 'flex-start', 'center', 'flex-end', 'baseline', 'stretch'])
})

const { inline, wrap, gap, flow, justifyCenter, alignCenter, justifyItem, alignItem } = toRefs(props)

const flexRef = ref<HTMLLIElement | null>(null)

useFlexPolyfillGapItem(flexRef, computed(() => props.gap ?? '8px'))

const className = useBEM(({ b, m }) => ({
  [b('cflex')]: true,
  [m('inline')]: inline,
  [m('wrap')]: wrap
}))

const cssVars = useCssVars({
  '--cflex-gap': gap,
  '--cflex-flow': flow,
  '--cflex-justify-center': justifyCenter,
  '--cflex-align-center': alignCenter,
  '--cflex-justify-item': justifyItem,
  '--cflex-align-item': alignItem
})
</script>
