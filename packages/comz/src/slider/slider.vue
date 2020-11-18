<template>
  <div class="cslider" ref="sliderRef" :style="cssVars">
    <div class="cslider__thumb" ref="thumbRef"></div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  modelValue?: number
  min?: number
  max?: number
  step?: number
}

declare function emit(event: 'update:modelValue', value: number): void

import { ref, computed, watchEffect, watch, nextTick, Ref, WatchStopHandle } from 'vue'
import { useEvent, useMouse, useCssVars, MouseState } from '@comz/vca'
import { useElementRect, getPointValue } from './utils'

export const sliderRef = ref<HTMLElement | null>(null)
export const thumbRef = ref<HTMLElement | null>(null)

const { width, right, left } = useElementRect(sliderRef)

const step = computed(() => props.step ?? 1)
const min = computed(() => props.min ?? 0)
const max = computed(() => props.max ?? 100)
const value = computed(() => props.modelValue ?? min.value)

const distance = computed(() => max.value - min.value)
const unitWidth = computed(() => distance.value / width.value)
const unitDistance = computed(() => width.value / distance.value)

const mouseState: Ref<MouseState | null> = ref(null)
const offsetX = computed(() => mouseState.value?.offsetX ?? 0)
const currentPoint = computed(() => Math.min(Math.max(0, offsetX.value), width.value))
const currentValue = computed(() => Math.round(currentPoint.value * unitWidth.value + min.value))

const valuePosition = computed(() => (value.value - min.value) * unitDistance.value + left.value)
const thumbOffset = computed(() => getPointValue(valuePosition.value, breakPoints.value) - left.value)

watch(mouseState, () => {
  nextTick(() => emit('update:modelValue', currentValue.value))
}, { deep: true })

export const cssVars = useCssVars({
  '--cslider-thumb-offset': computed(() => `${ thumbOffset.value }px`)
})

const breakPoints = ref<number[]>([])
watchEffect(() => {
  const points = Math.ceil(distance.value / step.value + 1)
  const list = [...Array(points).keys()].map(point =>
    point * unitDistance.value * step.value + left.value
  )

  if (list[points - 1] > right.value) list.pop()

  breakPoints.value = list
})

let stopUseMouse: WatchStopHandle | null = null

useEvent(sliderRef, 'mousedown', event => {
  const { state, stop } = useMouse(sliderRef, {
    onBefore: () => event,
    onUpdate: ({ pageX, pageY }) => ({
      pageX: getPointValue(pageX, breakPoints.value),
      pageY: pageY
    })
  })

  mouseState.value = state
  stopUseMouse = stop
})

useEvent(window, 'mouseup', () => stopUseMouse?.())

export default {}
</script>
