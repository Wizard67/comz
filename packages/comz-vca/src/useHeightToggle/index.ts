import {
  ref,
  onMounted,
  onUnmounted,
  watch,
  Ref,
  ComputedRef
} from 'vue'

export const useHeightToggle = (
  state: Ref | ComputedRef,
  config?: {
    wrapPadding?: number
  }
) => {

  const height = ref<string>(state.value ? 'auto' : '0')
  const wrapRef = ref<HTMLElement | null>(null)
  const bodyRef = ref<HTMLElement | null>(null)

  const transHeightToAuto = (event: TransitionEvent) => {
    if (event.propertyName !== 'height') return
    if (state.value) {
      height.value = 'auto'
    }
  }

  onMounted(() => {
    watch(() => state.value, (state) => {
      const padding = config?.wrapPadding ?? 0
      height.value = `${ bodyRef.value!.clientHeight + padding }px`

      if (!state) {
        setTimeout(() => height.value = '0')
      }
    })
  
    wrapRef.value!.addEventListener('transitionend', transHeightToAuto, false)
  })

  onUnmounted(() => {
    wrapRef.value?.removeEventListener('transitionend', transHeightToAuto, false)
  })

  return {
    wrapRef,
    bodyRef,
    height
  }
}
