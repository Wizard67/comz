<template>
  <section class="ctooltip">
    <div
      v-show="show"
      class="ctooltip__text"
      ref="textRef"
    >{{ text }}</div>
    <div class="ctooltip__slot" ref="slotRef">
      <slot />
    </div>
  </section>
</template>

<script setup="props, { emit }" lang="ts">
import { ref } from 'vue'
import { createPopper, Placement, Instance } from '@popperjs/core'
import { useEvent, useToggle } from '@comz/vca'

declare const props: {
  text?: String
  placement?: Placement
}

export const textRef = ref<HTMLElement | null>(null)
export const slotRef = ref<HTMLElement | null>(null)
let popper: Instance | null = null

export const { state: show, toggle } = useToggle()

useEvent(slotRef, 'mouseenter', () => {
  toggle()
  popper = createPopper(slotRef.value!, textRef.value!, {
    placement: props.placement || 'bottom',
    strategy: 'fixed',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }]
  })
})

useEvent(slotRef, 'mouseleave', () => {
  toggle()
  popper?.destroy()
})

</script>

<style lang="scss">
$block: '.ctooltip';

#{$block} {
  position: relative;
  display: inline-block;

  &__text {
    position: absolute;
    display: inline-flex;
    align-items: center;
    max-width: 160px;
    padding: 4px 16px;
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    color: white;
    background-color: rgb(47, 49, 55);
    font-size: 14px;
    line-height: 1.2em;
    z-index: 100;
    pointer-events: none;
  }
}
</style>