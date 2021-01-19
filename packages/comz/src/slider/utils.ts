import { reactive, toRefs, watch, Ref } from 'vue'

export const getRange = (value: number, range: number[]) => {
  let left = 0
  let right = range.length

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)

    if (range[mid] <= value) {
      left = mid
    } else {
      right = mid
    }
  }

  return [range[left], range[left + 1]]
}

export const getPointValue = (value: number, range: number[]) => {
  const [min, max] = getRange(value, range)

  return value - min > max - value ? max : min
}

export const useElementRect = (targetRef: Ref<HTMLElement | null>) => {
  const rect = reactive({
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0
  })

  const updateTargetRect = (element: HTMLElement) => {
    const domRect = element.getBoundingClientRect()

    rect.top = domRect.top
    rect.right = domRect.right
    rect.left = domRect.left
    rect.bottom = domRect.bottom
    rect.width = domRect.width
    rect.height = domRect.height
    rect.x = domRect.x
    rect.y = domRect.y
  }

  watch(
    targetRef,
    (element, _, cleanUp) => {
      if (!element) return

      updateTargetRect(element)

      const observer = new MutationObserver(() => {
        updateTargetRect(element)
      })
      observer.observe(element, { attributes: true })

      cleanUp(() => {
        observer.disconnect()
      })
    },
    { immediate: true, flush: 'post' }
  )

  return toRefs(rect)
}
