<template>
  <Teleport to="body">
    <div v-if="showWrap" ref="popperRef" class="ttooltip">
      <Transition name="ctooltip" @after-leave="handleAfterLeave">
        <div v-show="showContent" class="ttooltip__content" v-html="text"></div>
      </Transition>
    </div>
  </Teleport>

  <component :is="slot" ref="slotRef" />
</template>

<script setup lang="ts">
import type { Placement } from '@popperjs/core'

import { defineProps, nextTick } from 'vue'
import { computed, ref, useContext } from 'vue'
import { useEvent, useToggle } from '@comz/vca'
import { string } from 'vue-types'
import { getSlotVnodes, getSlotHTMLElement } from '../utils/getVnodes'

import { usePopover, useExpose } from '@comz/vca'

const props = defineProps({
  text: string(),
  placement: string().def('top')
})

const { slots: originSlots } = useContext()

const popperRef = ref<HTMLElement | null>(null)
const slotRef = ref<HTMLElement | null>(null)

const { state: showWrap, toggle: toggleShowWrap } = useToggle()
const { state: showContent, toggle: toggleShowContent } = useToggle()

const slot = computed(() => getSlotVnodes(originSlots?.default?.() || [])[0])

const referenceRef = computed(() => getSlotHTMLElement(slotRef))

const { create, destroy, instance } = usePopover(referenceRef, popperRef, {
  placement: props.placement as Placement,
  strategy: 'fixed',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }
  ]
})

const createPopover = () => {
  toggleShowWrap(true)
  create()
}

const destroyPopover = () => {
  toggleShowWrap(false)
  destroy()
}

const handleAfterLeave = () => {
  destroyPopover()
}

useEvent(referenceRef, 'mouseenter', async () => {
  createPopover()

  // make element transition
  await nextTick()
  toggleShowContent(true)

  // update element position state
  await nextTick()
  instance.value?.forceUpdate()
})

useEvent(referenceRef, 'mouseleave', () => {
  toggleShowContent(false)
})

useExpose({
  $el: popperRef
})
</script>
