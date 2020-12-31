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

<script setup lang="ts">
import type { Ref } from 'vue'
import type { Placement, Instance } from '@popperjs/core'

import { defineProps, defineEmit } from 'vue'
import { ref } from 'vue'
import { useEvent, useToggle, usePopper } from '@comz/vca'
import { string } from 'vue-types'

const props = defineProps({
  text: string(),
  placement: string()
})

const textRef = ref<HTMLElement | null>(null)
const slotRef = ref<HTMLElement | null>(null)

const { state: show, toggle } = useToggle()

let popper: Ref<Instance | null>

useEvent(slotRef, 'mouseenter', () => {
  toggle()
  const { popperInstance } = usePopper(slotRef, textRef, {
    placement: (props.placement || 'bottom') as Placement,
    strategy: 'fixed',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }]
  })

  popper = popperInstance
})

useEvent(slotRef, 'mouseleave', () => {
  toggle()
  popper.value?.destroy()
})
</script>
