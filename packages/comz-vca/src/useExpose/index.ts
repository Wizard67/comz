import { getCurrentInstance, useContext, ref } from 'vue'

export function useExpose(payload?: Record<string, any>) {
  const instance = getCurrentInstance()

  if (!instance) return

  const compRef = ref<null | HTMLElement>(null)
  const { expose } = useContext()

  const data = {
    $el: compRef,
    ...(payload ?? {})
  }

  /**
   * in test mode
   * should expose instance.proxy for vue-test-utils-next.
   */
  if (process.env.NODE_ENV === 'test') {
    expose(Object.assign(instance.proxy!, data))
  } else {
    expose(data)
  }

  return compRef
}
