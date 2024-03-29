<template>
  <section ref="$el" :class="className" :style="cssVars">
    <div class="cflex__item" v-for="(item, index) in slots" :key="index">
      <component :is="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, useContext, toRefs, computed } from 'vue'
import { useBEM, useCssVars, useExpose } from '@comz/vca'
import { string, bool } from 'vue-types'
import { getSlotVnodes } from '../utils/getVnodes'
import { useCssShorthand } from '../utils/useCssShorthand'

const { slots: originSlots } = useContext()

const props = defineProps({
  inline: bool().def(false),
  wrap: bool().def(false),
  gap: string(),
  flow: string(),
  placeContent: string(),
  placeItems: string(),
  placeSelf: string()
})

// filter vnode which type is comment
const slots = computed(() => getSlotVnodes(originSlots?.default?.() || []))

const { inline, wrap, gap, flow, placeContent, placeItems, placeSelf } = toRefs(
  props
)

const [rowGap, columnGap] = useCssShorthand(gap)
const [alignContent, justifyContent] = useCssShorthand(placeContent)
const [alignItems, justifyItems] = useCssShorthand(placeItems)
const [alignSelf, justifySelf] = useCssShorthand(placeSelf)

const className = useBEM(({ b, m }) => ({
  [b('cflex')]: true,
  [m('inline')]: inline,
  [m('wrap')]: wrap
}))

const cssVars = useCssVars({
  '--cflex-row-gap': rowGap,
  '--cflex-column-gap': columnGap,
  '--cflex-flow': flow,
  '--cflex-align-content': alignContent,
  '--cflex-justify-content': justifyContent,
  '--cflex-align-items': alignItems,
  '--cflex-justify-items': justifyItems,
  '--cflex-align-self': alignSelf,
  '--cflex-justify-self': justifySelf
})

const $el = useExpose()
</script>
