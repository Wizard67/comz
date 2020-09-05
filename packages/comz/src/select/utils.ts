import {
  nextTick,
  onUnmounted,
  watchEffect,
  computed,
  InjectionKey, Ref, ComputedRef, UnwrapRef
} from 'vue'

export const handler: InjectionKey<Handler> = Symbol()

export const current: InjectionKey<Ref<unknown>> = Symbol()


export const useClickOutSide = (
  track: Ref<boolean>,
  elementRef: Ref<null | HTMLElement>,
  callback: (state: boolean) => void
) => {
  const handler = async (event: MouseEvent) => {
    await nextTick()

    if (elementRef.value === undefined) {
      return callback(false)
    }
  
    const el = <HTMLInputElement>event.target
    const hasContains = elementRef.value?.contains(el)
    callback(hasContains!)
  }

  watchEffect(() => {
    track.value
    ? window.addEventListener('click', handler)
    : window.removeEventListener('click', handler)
  })

  onUnmounted(() => window.removeEventListener('click', handler))
}

type Option = UnwrapRef<{
  value: unknown,
  label: string
}>

type Handler = (value: Option) => void

export const useOptionState = (
  target: Ref<unknown> | ComputedRef<unknown>,
  option: Option,
  handler: Handler
) => {
  // prevent updating state twice
  let lock = false

  const state = computed<'normal' | 'selected'>(() => {
    const isCurrent = JSON.stringify(option.value) === JSON.stringify(target.value)
  
    !lock && isCurrent && handler({
      value: option.value,
      label: option.label
    })
  
    lock = false
  
    return isCurrent ? 'selected' : 'normal'
  })

  const changeState = () => {
    if (state.value === 'selected') return

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
