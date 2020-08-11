<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import {
  computed, readonly,
  provide,
  useCssVars
} from 'vue'

import { key } from './use'

declare const props: {
  gap: string
  template: string
  border?: boolean
}

provide(key, readonly(computed(() => props.border ?? false)))

useCssVars(() => ({ gap: props.gap || '0px' }))
useCssVars(() => ({ template: props.template }))
useCssVars(() => ({ border: props.border? '0.5px rgba(0, 0, 0, .2) dashed' : 'unset' }))

export default {}
</script>

<style lang="scss">
.grid {
  display: grid;
  gap: var(--gap);
  grid-template: var(--template);
  outline: var(--border);
}
</style>