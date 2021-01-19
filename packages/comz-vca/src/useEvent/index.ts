import { ref, Ref, isRef, watch, WatchStopHandle } from 'vue'

export function useEvent<K extends keyof HTMLElementEventMap>(
  target: EventTarget | Ref<EventTarget | null>,
  type: K,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): WatchStopHandle
export function useEvent(
  target: EventTarget | Ref<EventTarget | null>,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) {
  const targetRef = isRef(target) ? target : ref(target)

  const stopWatch = watch(
    targetRef,
    (element, _, cleanUp) => {
      if (element) {
        element.addEventListener(type, listener, options)
        cleanUp(() => element.removeEventListener(type, listener))
      }
    },
    { immediate: true, flush: 'post' }
  )

  return stopWatch
}
