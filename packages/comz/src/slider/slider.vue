<template>
  <section :class="className">
    <div v-if="$slots.prepend" class="cslider__prepend">
      <slot name="prepend" />
    </div>

    <div class="cslider__field" ref="sliderRef" :style="cssVars">
      <div class="cslider__thumb" ref="thumbRef"></div>
    </div>

    <div v-if="$slots.append" class="cslider__append">
      <slot name="append" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Ref, WatchStopHandle } from 'vue'
import type { MouseState } from '@comz/vca'

import { defineProps, defineEmit } from 'vue'
import {
  useContext,
  getCurrentInstance,
  ref,
  toRefs,
  computed,
  watchEffect,
  watch
} from 'vue'
import { useEvent, useMouse, useBEM, useCssVars } from '@comz/vca'
import { strip } from 'number-precision'
import { number, bool } from 'vue-types'
import { useElementRect, getPointValue } from './utils'

const { expose } = useContext()

const props = defineProps({
  modelValue: number().isRequired,
  min: number(),
  max: number(),
  step: number(),
  disabled: bool().def(false)
})

const emit = defineEmit(['update:modelValue'])

const instance = getCurrentInstance()!

const { disabled } = toRefs(props)

const sliderRef = ref<HTMLElement | null>(null)
const thumbRef = ref<HTMLElement | null>(null)

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
const currentPoint = computed(() =>
  Math.min(Math.max(0, offsetX.value), width.value)
)
const currentValue = computed(() =>
  strip(currentPoint.value * unitWidth.value + min.value, 10)
)

const valuePosition = computed(
  () => (value.value - min.value) * unitDistance.value + left.value
)
const thumbOffset = computed(
  () => getPointValue(valuePosition.value, breakPoints.value) - left.value
)

watch(
  mouseState,
  () => {
    emit('update:modelValue', currentValue.value)
  },
  { deep: true }
)

const cssVars = useCssVars({
  '--cslider-thumb-offset': computed(() => `${thumbOffset.value}px`)
})

const className = useBEM(({ b, m }) => ({
  [b('cslider')]: true,
  [m('disabled')]: disabled
}))

const breakPoints = ref<number[]>([])
watchEffect(() => {
  const points = Math.ceil(distance.value / step.value + 1)
  const list = Array(points)
    .fill(null)
    .map((_, index) => index * unitDistance.value * step.value + left.value)

  if (list[points - 1] > right.value) list.pop()

  breakPoints.value = list
})

let stopUseMouse: WatchStopHandle | null = null

useEvent(sliderRef, 'mousedown', (event) => {
  if (disabled.value) return

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

expose(instance['ctx'])
</script>
