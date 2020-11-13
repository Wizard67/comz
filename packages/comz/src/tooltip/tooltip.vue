<template>
  <section class="ctooltip">
    <div
      v-show="show"
      class="ctooltip__text"
      ref="textRef"
    >
      {{ text }}
    </div>
    <div class="ctooltip__slot" ref="slotRef">
      <slot />
    </div>
  </section>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  text?: String
  placement?: Placement
}

import { ref, Ref } from 'vue'
import { Placement, Instance } from '@popperjs/core'
import { useEvent, useToggle, usePopper } from '@comz/vca'

export const textRef = ref<HTMLElement | null>(null)
export const slotRef = ref<HTMLElement | null>(null)

export const { state: show, toggle } = useToggle()

let popper: Ref<Instance | null>

useEvent(slotRef, 'mouseenter', () => {
  toggle()
  popper = usePopper(slotRef, textRef, {
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
  popper.value?.destroy()
})

export default {}
</script>
