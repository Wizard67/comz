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

const props = defineProps({
  area: string(),
  padding: string(),
  placeItems: string()
})

const { padding, area, placeItems } = toRefs(props)

const cssStyle = useCssVars({
  '--cgrid-item-area': area,
  '--cgrid-item-padding': padding,
  '--cgrid-item-place-items': placeItems
})
</script>
