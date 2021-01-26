import type { Ref, ComputedRef, WatchStopHandle } from 'vue'
import { unref, watch } from 'vue'
import { useEvent } from '../useEvent'

type TypeRef<T> = T | Ref<T> | ComputedRef<T>

export function useClickOutSide(
  elementRef: TypeRef<Element | null | undefined>,
  callback: (event: MouseEvent) => void
) {
  const handler = (event: MouseEvent) => {
    const element = unref(elementRef)

    if (!element) return

    const el = event.target

    if (
      element === event.target ||
      (el instanceof Node && element.contains(el))
    ) {
      callback(event)
    }
  }

  let stop: WatchStopHandle = () => {}

  watch(
    () => unref(elementRef),
    (element, _, cleanUp) => {
      if (element) {
        stop = useEvent(window, 'click', handler)
      } else {
        stop()
      }

      cleanUp(stop)
    },
    { flush: 'post' }
  )

  return stop
}
