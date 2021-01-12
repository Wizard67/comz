<template>
  <section class="cgrid-item" :style="cssStyle">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { toRefs } from 'vue'
import { useCssVars } from '@comz/vca'
import { string } from 'vue-types'
import { useCssPlace } from '../utils/useCssPlace'

const props = defineProps({
  area: string(),
  padding: string(),
  placeItems: string()
})

const { padding, area, placeItems } = toRefs(props)

const { align, justify } = useCssPlace(placeItems)

const cssStyle = useCssVars({
  '--cgrid-item-area': area,
  '--cgrid-item-padding': padding,
  '--cgrid-item-align-items': align,
  '--cgrid-item-justify-items': justify
})
</script>
