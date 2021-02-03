import type { Ref } from 'vue'
import type { Instance, Options } from '@popperjs/core'

import { ref, nextTick, unref, onUnmounted } from 'vue'
import { createPopper } from '@popperjs/core'

type RefElement = Ref<HTMLElement | null> | undefined

export function usePopover(
  referenceRef: RefElement,
  popperRef: RefElement,
  options?: Partial<Options>
) {
  const popover = ref<Instance | null>(null)

  async function create() {
    await nextTick()

    const reference = unref(referenceRef)
    const popper = unref(popperRef)

    if (!popover.value && reference && popper) {
      popover.value = createPopper(reference, popper, options)
    }
  }

  function destroy() {
    if (popover.value) {
      popover.value?.destroy()
      popover.value = null
    }
  }

  onUnmounted(() => destroy())

  return {
    instance: popover,
    create,
    destroy
  }
}
