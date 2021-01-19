import { ref, Ref, watch, WatchStopHandle } from 'vue'

import { createPopper, Instance, Options } from '@popperjs/core'

// TODO: check the memory leak.
export const usePopper = (
  reference: Ref<HTMLElement | null>,
  popper: Ref<HTMLElement | null>,
  popperOptions?: Partial<Options>,
  options?: {
    autoClear?: boolean
  }
) => {
  const autoClear = options?.autoClear ?? true
  const popperInstance = ref<Instance | null>(null)

  let stopWatch: WatchStopHandle

  stopWatch = watch(
    [reference, popper],
    ([referenceValue, popperValue], _, cleanUp) => {
      if (referenceValue && popperValue) {
        popperInstance.value = createPopper(
          referenceValue,
          popperValue,
          popperOptions
        )
      }

      popperInstance.value &&
        autoClear &&
        cleanUp(() => {
          popperInstance.value?.destroy()
          popperInstance.value = null
        })
    },
    { immediate: true, flush: 'post' }
  )

  return {
    popperInstance,
    stopWatch
  }
}
