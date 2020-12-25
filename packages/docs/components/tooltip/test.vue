<template>

  <teleport to="body">
    <!-- <transition
      name="tooltip"
      @after-leave="handleTransitionEnd"
    > -->
      <div v-if="show" ref="textRef" class="ctooltip">
        {{ text }}
      </div>
    <!-- </transition> -->
  </teleport>

  <span ref="slotRef">okok</span>
  <!-- <Button ref="slotRef">
    okok
  </Button> -->
  <!-- <div class="ctooltip__slot" ref="slotRef">
    <slot />
  </div> -->

  <!-- <teleport to="body">
    <div class="text" ref="textRef">text</div>
  </teleport>

  <div ref="slotRef" style="display: inline-block;">
    <slot/>
  </div> -->
</template>

<script>
import { onMounted, nextTick, ref, renderSlot, toDisplayString, computed } from 'vue'
import * as Popper from "@popperjs/core"
import { useToggle, useEvent, usePopper } from '@comz/vca'
import { Button } from 'comz'

export default {
  components: {
    Button
  },
  props: {
    text: String
  },
  setup(props, { slots }) {
    const { state: show, toggle } = useToggle()

    const textRef = ref(null)
    const slotRef = ref(null)

    onMounted(() => {
      nextTick(() => {
        console.log(slotRef.value)
        console.log(textRef.value)

        useEvent(slotRef, 'mouseenter', () => {
          toggle()
          
          nextTick(() => {
            console.log(slotRef.value)
            console.log(textRef.value)

            // const { popperInstance, stopWatch } = usePopper(
            //   slotRef,
            //   textRef,
            //   {
            //     placement: 'top',
            //     modifiers: [{
            //       name: 'offset',
            //       options: {
            //         offset: [0, 8]
            //       }
            //     }]
            //   }
            // )
            Popper.createPopper(
              slotRef.value,
              textRef.value,
              {
                placement: 'top',
                modifiers: [{
                  name: 'offset',
                  options: {
                    offset: [0, 0]
                  }
                }]
              }
            )
          })
        })

        useEvent(slotRef, 'mouseleave', () => {
          toggle()
        })

      })
    })
  
    return {
      show, toggle,
      textRef, slotRef
    }
  }
}
</script>