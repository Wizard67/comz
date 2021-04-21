<template>
  <section ref="$el" class="cgrid-item" :style="cssStyle">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import { useCssVars, useExpose } from '@comz/vca'
import { string } from 'vue-types'
import { useCssShorthand } from '../utils/useCssShorthand'

const props = defineProps({
  area: string(),
  padding: string(),
  placeItems: string()
})

const { padding, area, placeItems } = toRefs(props)

const [align, justify] = useCssShorthand(placeItems)

const cssStyle = useCssVars({
  '--cgrid-item-area': area,
  '--cgrid-item-padding': padding,
  '--cgrid-item-align-items': align,
  '--cgrid-item-justify-items': justify
})

const $el = useExpose()
</script>
