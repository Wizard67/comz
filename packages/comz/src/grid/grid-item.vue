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
  area: string()
})

const { area } = toRefs(props)

const cssStyle = useCssVars({
  '--cgrid-item-area': area
})
</script>
