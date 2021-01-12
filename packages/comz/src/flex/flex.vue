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
import { useCssPlace } from '../utils/useCssPlace'

const props = defineProps({
  inline: bool().isRequired,
  wrap: bool().isRequired,
  gap: string(),
  flow: string(),
  placeContent: string(),
  placeItems: string(),
  placeSelf: string()
})

const {
  inline,
  wrap,
  gap,
  flow,
  placeContent,
  placeItems,
  placeSelf
} = toRefs(props)

const flexRef = ref<HTMLLIElement | null>(null)

useFlexPolyfillGapItem(flexRef, computed(() => props.gap ?? '8px'))

const { align: alignCenter, justify: justifyCenter } = useCssPlace(placeContent)
const { align: alignItems, justify: justifyItems } = useCssPlace(placeItems)
const { align: alignSelf, justify: justifySelf } = useCssPlace(placeSelf)

const className = useBEM(({ b, m }) => ({
  [b('cflex')]: true,
  [m('inline')]: inline,
  [m('wrap')]: wrap
}))

const cssVars = useCssVars({
  '--cflex-gap': gap,
  '--cflex-flow': flow,
  '--cflex-align-center': alignCenter,
  '--cflex-justify-center': justifyCenter,
  '--cflex-align-items': alignItems,
  '--cflex-justify-items': justifyItems,
  '--cflex-align-self': alignSelf,
  '--cflex-justify-self': justifySelf
})
</script>
