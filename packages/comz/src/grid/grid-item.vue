<template>
  <div class="cgrid-item" :style="cssStyle">
    <slot />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  area?: string
}

import { toRefs } from 'vue'
import { useCssVars } from '@comz/vca'

const { area } = toRefs(props)

export const cssStyle = useCssVars({
  '--cgrid-item-area': area
}, { scoped: true })

export default {}
</script>
