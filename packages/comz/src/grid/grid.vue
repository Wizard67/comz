<template>
  <div :class="gridClassName">
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { computed, provide } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

import { key } from './utils'

declare const props: {
  gap: string
  template: string
  border: boolean
}

provide(key, computed(() => props.border ?? false))

export const gridClassName = useClassName('c-grid', {
  'border': computed(() => props.border)
})

useCssVars({
  'c-grid-gap': computed(() => props.gap),
  'c-grid-template': computed(() => props.template)
})

export default {}
</script>

<style lang="scss">
$block: ".c-grid";

%grid {
  display: grid;
  gap: var(--c-grid-gap, 0);
  grid-template: var(--c-grid-template, unset);
}

#{$block} {
  @extend %grid;
}

#{$block}--border {
  @extend %grid;
  outline: 0.5px rgba(0, 0, 0, .2) dashed;
}
</style>