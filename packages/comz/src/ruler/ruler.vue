<template>
  <section
    ref="rulerRef"
    :class="cruler"
  >
  </section>
</template>

<script setup="props, { emit }" lang="ts">
import { toRefs } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

declare const props: {
  backgroundColor?: string
  borderColor?: string
  grid: boolean
}

export const { grid, backgroundColor, borderColor } = toRefs(props)

export const cruler = useClassName('cruler', {
  'grid': grid
})

export const cssVars = useCssVars({
  '--cruler-background-color': backgroundColor,
  '--cruler-border-color': borderColor
})

export default {}
</script>

<style lang="scss">
$block: '.cruler';


#{$block} {
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  --border-clor: var(--cruler-border-color, rgb(247, 247, 247));

  &--grid {
    @extend #{$block};
    background: var(--cruler-background-color, white);
    background-image: linear-gradient(var(--border-clor) 1px, transparent 0),
                      linear-gradient(90deg, var(--border-clor) 1px, transparent 0),
                      linear-gradient(var(--border-clor) 1px, transparent 0),
                      linear-gradient(90deg, var(--border-clor) 1px, transparent 0);
    background-size: 10px 10px, 10px 10px, 70px 70px, 70px 70px;
  }
}
</style>