<template>
  <div class="cform" :style="cssVars">
    <slot />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  labelWidth?: string
  labelAlign?: string
}

import { toRefs } from 'vue'
import { useCssVars } from '@comz/vca'

const { labelWidth, labelAlign } = toRefs(props)

export const cssVars = useCssVars({
  '--cform-label-width': labelWidth,
  '--cform-label-align': labelAlign
}, { scoped: true })

export default {}
</script>
