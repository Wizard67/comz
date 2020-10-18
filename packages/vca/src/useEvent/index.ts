import { ref, Ref, isRef, watch } from 'vue'

export const useEvent = <
  K extends (keyof WindowEventMap | DocumentEventMap)
>(
  target: EventTarget | Ref<EventTarget | null>,
  type: K,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => {
  const targetRef = isRef(target) ? target : ref(target)

  const stopWatch = watch(targetRef, (element, _, cleanUp) => {
    if (element) {
      element.addEventListener(type as string, listener, options)
      cleanUp(() => element.removeEventListener(type as string, listener))
    }
  }, { immediate: true, flush: 'post' })

  return stopWatch
}
