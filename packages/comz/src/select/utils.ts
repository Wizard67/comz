import type { Ref, ComputedRef, UnwrapRef } from 'vue'
import { computed } from 'vue'

type Option = UnwrapRef<{
  value: unknown
  label: string
}>

export type Handler = (value: Option) => void

export const useOptionState = (
  target: Ref<unknown> | ComputedRef<unknown>,
  option: Option,
  handler: Handler
) => {
  // prevent updating state twice
  let lock = false

  const state = computed<boolean>(() => {
    const isCurrent =
      JSON.stringify(option?.value) === JSON.stringify(target?.value)

    !lock &&
      isCurrent &&
      handler({
        value: option.value,
        label: option.label
      })

    lock = false

    return isCurrent
  })

  const changeState = () => {
    if (state.value) return

    lock = true

    handler({
      value: option.value,
      label: option.label
    })
  }

  return {
    state,
    changeState
  }
}
