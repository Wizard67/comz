<template>
  <section
    :class="spaceClassName"
    :style="cssVars"
  >
    <slot></slot>
  </section>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

declare const props: {
  gap?: string
  align?: 'start' | 'center' | 'end'
  vertical: boolean
}

export const spaceClassName = useClassName('c-space', {
  'vertical': computed(() => props.vertical)
})

export const cssVars = useCssVars({
  '--c-space-gap': computed(() => props.gap),
  '--c-space-align': computed(() => props.align)
}, { scoped: true })

export default {}
</script>

<style lang="scss">
$block: '.c-space';

%space {
  display: grid;
}

#{$block} {
  @extend %space;
  grid-auto-flow: column dense;
  grid-column-gap: var(--c-space-gap, 0);
  place-items: var(--c-space-align, start) start;
}

#{$block}--vertical {
  @extend %space;
  grid-auto-flow: row dense;
  grid-row-gap: var(--c-space-gap, 0);
  place-items: start var(--c-space-align, start);
}
</style>