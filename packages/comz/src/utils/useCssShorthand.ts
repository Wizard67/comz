import type { Ref } from 'vue'
import { ref, watchEffect, unref } from 'vue'

export function useCssShorthand(
  shorthand: Ref<string | undefined> | undefined
) {
  const property1 = ref<string | undefined>(undefined)
  const property2 = ref<string | undefined>(undefined)

  watchEffect(() => {
    const value = unref(shorthand)

    if (!value) return

    const args = value.split(' ')

    property1.value = args[0]
    property2.value = args[1] || args[0]
  })

  return [property1, property2]
}
