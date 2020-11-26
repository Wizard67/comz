import { ref, Ref, watch } from 'vue'
import {
  createPopper,
  Instance,
  Options
} from '@popperjs/core'

export const usePopper = (
  reference: Ref<HTMLElement | null>,
  popper: Ref<HTMLElement | null>,
  options?: Partial<Options>
) => {
  const popperInstance = ref<Instance | null>(null)

  watch([reference, popper], ([referenceValue, popperValue], _, cleanUp) => {
    if (referenceValue && popperValue) {
      popperInstance.value = createPopper(
        referenceValue,
        popperValue,
        options
      )
    }

    cleanUp(() => {
      popperInstance.value?.destroy()
      popperInstance.value = null
    })
  }, { immediate: true, flush: 'post' })

  return popperInstance
}
