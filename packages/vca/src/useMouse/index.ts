import { ref, computed, reactive, isRef, watch, Ref } from 'vue'
import { useEvent } from '../useEvent'

export const useMouse = (
  target: Ref<HTMLElement | null> | HTMLElement = document.body
) => {
  const targetRef = isRef(target) ? target : ref(target)

  const targetRect = reactive({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  })

  const state = reactive({
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    inner: false,
    target: {
      width: computed(() => targetRect.width),
      height: computed(() => targetRect.height)
    }
  })

  const positionX = computed(() => targetRect.left + window.pageXOffset)
  const positionY = computed(() => targetRect.top + window.pageYOffset)

  const updateTargetRect = (element: HTMLElement) => {
    const { left, top, width, height } = element.getBoundingClientRect()

    targetRect.left = left
    targetRect.top = top
    targetRect.height = height
    targetRect.width = width
  }

  const stop = watch(targetRef, (element, _, cleanUp) => {
    if (!element) return

    updateTargetRect(element)

    const observer = new MutationObserver(() => {
      updateTargetRect(element)
    })
    observer.observe(element, { attributes: true })

    const stopEvent = useEvent(document, 'mousemove', event => {
      state.x = event.pageX
      state.y = event.pageY

      state.offsetX = state.x - positionX.value
      state.offsetY = state.y - positionY.value
      
      state.inner = state.offsetX >= 0 &&
                    state.offsetY >= 0 &&
                    state.offsetX <= targetRect.width &&
                    state.offsetY <= targetRect.height
    })

    cleanUp(() => {
      observer.disconnect()
      stopEvent()
    })

  }, { immediate: true, flush: 'post' })

  return { state, stop }
}
