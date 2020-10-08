<template>
  <div
    :class="gridClassName"
    :style="cssVars"
  >
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { computed, provide } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

import { key } from './utils'

declare const props: {
  gap?: string
  template?: string
  border: boolean
}

provide(key, computed(() => props.border ?? false))

export const gridClassName = useClassName('c-grid', {
  'border': computed(() => props.border)
})

export const cssVars = useCssVars({
  '--c-grid-gap': computed(() => props.gap),
  '--c-grid-template': computed(() => props.template)
}, { scoped: true })

export default {}
</script>

<style lang="scss">
$block: ".c-grid";

%grid {
  display: grid;
  grid-gap: var(--c-grid-gap, 0 0);
  grid-template: var(--c-grid-template);
  width: 100%;
  height: 100%;
}

#{$block} {
  @extend %grid;
}

#{$block}--border {
  @extend %grid;
  outline: 0.5px rgba(0, 0, 0, .2) dashed;
}
</style>