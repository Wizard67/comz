import { ref, toRef, computed, reactive, isRef, watch, Ref, UnwrapRef, watchEffect } from 'vue'
import { useEvent } from '../useEvent'

type MouseEventPagePosition = {
  pageX: number
  pageY: number
}

interface Rect {
  left: number
  top: number
  width: number
  height: number
}

export interface MouseState {
  x: number
  y: number
  offsetX: number
  offsetY: number
  inner: boolean
  target: {
    width: number
    height: number
  }
}

interface Hooks <T extends MouseEventPagePosition>{
  onBefore?: () => T,
  onUpdate?: (event: T & Rect) => T
}

export const useMouse = (
  target: Ref<HTMLElement | null> | HTMLElement = document.body,
  hooks?: Hooks<MouseEventPagePosition>
) => {
  const targetRect = reactive<Rect>({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  })

  const initState = hooks?.onBefore?.()

  const pageX = ref(initState?.pageX ?? 0)
  const pageY = ref(initState?.pageY ?? 0)

  const state: UnwrapRef<MouseState> = reactive({
    x: pageX,
    y: pageY,
    offsetX: computed(() => state.x - targetRect.left - window.pageXOffset),
    offsetY: computed(() => state.y - targetRect.top - window.pageYOffset),
    inner: computed(() => (
      state.offsetX >= 0 &&
      state.offsetY >= 0 &&
      state.offsetX <= targetRect.width &&
      state.offsetY <= targetRect.height
    )),
    target: {
      width: toRef(targetRect, 'width'),
      height: toRef(targetRect, 'height')
    }
  })

  const updateTargetRect = (element: HTMLElement) => {
    const { left, top, width, height } = element.getBoundingClientRect()

    targetRect.left = left
    targetRect.top = top
    targetRect.height = height
    targetRect.width = width
  }

  const updateMouseState = (event: MouseEventPagePosition) => {
    const mouseEvent = hooks?.onUpdate?.({
      pageX: event.pageX,
      pageY: event.pageY,
      top: targetRect.top,
      left: targetRect.left,
      width: targetRect.width,
      height: targetRect.height
    }) ?? event

    pageX.value = mouseEvent.pageX
    pageY.value = mouseEvent.pageY
  }

  const targetRef = isRef(target) ? target : ref(target)

  const stop = watch(targetRef, (element, _, cleanUp) => {
    if (!element) return

    updateTargetRect(element)

    initState && updateMouseState(initState)

    const observer = new MutationObserver(() => {
      updateTargetRect(element)
    })
    observer.observe(element, { attributes: true })

    const stopMoveEvent = useEvent(document, 'mousemove', updateMouseState)

    cleanUp(() => {
      observer.disconnect()
      stopMoveEvent()
    })

  }, { immediate: true, flush: 'post' })

  return { state, stop }
}
