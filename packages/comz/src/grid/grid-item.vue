<template>
  <div class="cgrid-item" :style="cssStyle">
    <slot />
  </div>
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
}, { scoped: true })
</script>
