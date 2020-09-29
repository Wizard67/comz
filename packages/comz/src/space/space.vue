<template>
  <section :class="cspace" :style="cssVars">
    <slot />
  </section>
</template>

<script setup="props, { emit }" lang="ts">
import { toRefs } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

declare const props: {
  gap?: string
  align?: 'start' | 'center' | 'end'
  itemWidth?: string
  vertical: boolean
  wrap: boolean
}

export const { vertical, wrap, gap, align, itemWidth } = toRefs(props)

export const cspace = useClassName('cspace', {
  'vertical': vertical,
  'wrap': wrap
})

export const cssVars = useCssVars({
  '--cspace-gap': gap,
  '--cspace-align': align,
  '--cspace-item-width': itemWidth
}, { scoped: true })

export default {}
</script>

<style lang="scss">
$block: '.cspace';

%space {
  display: grid;
  grid-gap: var(--cspace-gap, 0 0);
  place-items: start var(--cspace-align, start);
}

#{$block} {
  @extend %space;
  grid-auto-flow: column;

  &--wrap {
    @extend #{$block};
    grid-auto-flow: inherit;
    grid-template-columns: repeat(auto-fit, minmax(var(--cspace-item-width, 60px), auto));
  }
}

#{$block}--vertical {
  @extend %space;
  grid-auto-flow: row;

  &--wrap {
    @extend #{$block}--vertical;
  }
}
</style>