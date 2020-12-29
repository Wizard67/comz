<template>
  <div class="cform" :style="cssVars">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { toRefs } from 'vue'

import { useCssVars } from '@comz/vca'

const props = defineProps({
  labelWidth: { type: String, required: false },
  labelAlign: { type: String, required: false }
})

const { labelWidth, labelAlign } = toRefs(props)

const cssVars = useCssVars({
  '--cform-label-width': labelWidth,
  '--cform-label-align': labelAlign
}, { scoped: true })
</script>
