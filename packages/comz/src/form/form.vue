<template>
  <div class="cform" :style="cssVars">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { toRefs } from 'vue'
import { useCssVars } from '@comz/vca'
import { string } from 'vue-types'

const props = defineProps({
  labelWidth: string(),
  labelAlign: string()
})

const { labelWidth, labelAlign } = toRefs(props)

const cssVars = useCssVars({
  '--cform-label-width': labelWidth,
  '--cform-label-align': labelAlign
}, { scoped: true })
</script>
