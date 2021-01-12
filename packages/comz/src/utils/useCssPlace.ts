import type { Ref } from 'vue'
import { ref, watchEffect, unref } from 'vue'

export function useCssPlace (place: Ref<string | undefined> | undefined) {
  const align = ref<string | undefined>(undefined)
  const justify = ref<string | undefined>(undefined)

  watchEffect(() => {
    const value = unref(place)

    if (!value) return

    const alignment = value.split(' ')

    align.value = alignment[0]
    justify.value = alignment[1] || alignment[0]
  })

  return {
    align,
    justify
  }
}
