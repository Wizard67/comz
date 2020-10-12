import { ref, Ref, isRef, watch } from 'vue'

export const useEvent = (
  target: EventTarget | Ref<EventTarget>,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => {
  const tragetRef = isRef(target) ? target : ref(target)

  const stopWatch = watch(tragetRef, (element, _, cleanUp) => {
    element.addEventListener(type, listener, options)
    cleanUp(() => element.removeEventListener(type, listener))
  }, { immediate: true })

  return () => {
    stopWatch()
  }
}
