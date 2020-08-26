<template>
  <div
    :class="gridItemClassName"
    :style="cssStyle"
  >
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { inject, ref, computed } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

import { key } from './utils'

declare const props: {
  name: string
  place?: string
}

export const gridItemClassName = useClassName('c-grid-item', {
  'border': inject(key, ref(false))
})

export const cssStyle = useCssVars({
  '--c-grid-item-name': computed(() => props.name),
  '--c-grid-item-place': computed(() => props.place)
})

export default {}
</script>

<style lang="scss">
$block: ".c-grid-item";

%item {
  grid-area: var(--c-grid-item-name);
  place-self: var(--c-grid-item-place);
}

#{$block} {
  @extend %item;
}

#{$block}--border {
  @extend %item;
  outline: 0.5px rgba(0, 0, 0, .2) dashed;
}
</style>