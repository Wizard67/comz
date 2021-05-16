import { Ref, ComputedRef, watch } from 'vue'
import type { RgbaTuple } from 'hex-rgb'

import { ref } from 'vue'
import hexRgb from 'hex-rgb'

import colorKeyWords from './color'

export function hex2Rgb(color: string) {
  try {
    const rgb = (colorKeyWords[color] ??
      hexRgb(color, { format: 'array' })) as RgbaTuple

    return rgb
  } catch {
    return [undefined, undefined, undefined]
  }
}

export function useColor(colorRef: Ref<string> | ComputedRef<string>) {
  const r = ref<number>()
  const g = ref<number>()
  const b = ref<number>()

  watch(
    colorRef,
    (val) => {
      const color = hex2Rgb(val)
      r.value = color[0]
      g.value = color[1]
      b.value = color[2]
    },
    { immediate: true }
  )

  return { r, g, b }
}
