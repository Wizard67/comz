<template>
  <teleport to="body">
    <!-- <transition
      name="tooltip"
      @after-leave="handleTransitionEnd"
    > -->
      <div v-if="show" ref="textRef" class="ctooltip">
        <span>{{ text }}</span>
      </div>
    <!-- </transition> -->
  </teleport>

  <div class="ctooltip__slot" ref="slotRef">
    <slot />
  </div>

</template>

<script setup="props, { emit, slots }" lang="ts">
declare const props: {
  text?: String
  placement?: Placement
}

declare const slots: any

import type { Ref, WatchStopHandle } from 'vue'
import type { Placement, Instance } from '@popperjs/core'
import { ref } from 'vue'
import { useEvent, useToggle, usePopper } from '@comz/vca'

export const textRef = ref<HTMLElement | null>(null)
export const slotRef = ref<HTMLElement | null>(null)

export const { state: show, toggle } = useToggle(true)

let stop: WatchStopHandle | null
let instance: Ref<Instance | null>

export const handleTransitionEnd = () => {
  stop?.()
  instance.value?.destroy()
  instance.value = null
  console.log('destroy')
}

useEvent(slotRef, 'mouseenter', () => {
  toggle()


})

    const { popperInstance, stopWatch } = usePopper(
      slotRef,
      textRef,
      {
        placement: props.placement || 'top',
        modifiers: [{
          name: 'offset',
          options: {
            offset: [0, 8]
          }
        }]
      },
      { autoClear: false }
    )

    stop = stopWatch
    instance = popperInstance

useEvent(slotRef, 'mouseleave', () => toggle())

export default {}
</script>
