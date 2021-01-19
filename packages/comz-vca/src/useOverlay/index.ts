import { ref, watch, Ref, ComputedRef } from 'vue'

type OverlayOptions = {
  namespace: string
  track: Ref<boolean> | ComputedRef<boolean>
  duration: number
  onChange?: (state: boolean) => void
}

type UseOverlay = (
  options: OverlayOptions
) => {
  index: Ref
}

const indexMarker = {}

export const useOverlay: UseOverlay = (options) => {
  const { namespace, track, duration, onChange } = options

  indexMarker[namespace] ??= ref(0)

  const marder = indexMarker[namespace]

  const index = ref(0)

  watch(
    () => track.value,
    (value) => {
      marder.value += value ? 1 : -1
      index.value = marder.value

      value ? setTimeout(() => onChange?.(value), duration) : onChange?.(value)
    }
  )

  // animation queue
  watch(
    () => marder.value,
    (val, perVal) => {
      if (val === 0 || val >= perVal) return

      const distance = perVal - val
      index.value -= distance
    }
  )

  return {
    index
  }
}
