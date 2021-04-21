import { getCurrentInstance, useContext, ref } from 'vue'

export function useExpose(payload?: Record<string, any>) {
  const instance = getCurrentInstance()

  if (!instance) return

  const compRef = ref<null | HTMLElement>(null)
  const { expose } = useContext()

  expose({
    $el: compRef,
    ...(payload ?? {})
  })

  return compRef
}
