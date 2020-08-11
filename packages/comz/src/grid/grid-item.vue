<template>
  <div class="grid-item">
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { inject, useCssVars } from 'vue'
import { key } from './use'

declare const props: {
  name: string
  place?: string
}

useCssVars(() => ({ name: props.name }))
useCssVars(() => ({ place: props.place || 'initial' }))
useCssVars(() => ({ border: inject(key)?.value ? '0.5px rgba(0, 0, 0, .2) dashed': 'unset' }))

export default {}
</script>

<style lang="scss">
.grid-item {
  grid-area: var(--name);
  place-self: var(--place);
  outline: var(--border);
}
</style>