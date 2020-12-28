<template>
  <teleport to="body">
    <transition name="ctoast">
      <div
        v-if="show"
        class="ctoast"
        :style="cssVars"
      >
        <div class="ctoast__icon">
          <Icon>
            <component :is="icon"></component>
          </Icon>
        </div>
        <div class="ctoast__content">
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  show: boolean
  type?: string
  duration?: number
}

declare function emit(event: 'update:show', state: boolean): void

import { computed, toRefs } from 'vue'
import { useOverlay, useCssVars } from '@comz/vca'

import {
  InfoCircleFill,
  CheckCircleFill,
  ExclamationCircleFill,
  XCircleFill
} from '@comz/icons'

export { default as Icon } from '../icon/icon.vue'

const { show, type, duration } = toRefs(props)

const { index } = useOverlay({
  namespace: 'toast',
  track: show,
  duration: duration?.value ?? 3000,
  onChange: state => state && emit('update:show', false)
})

export const cssVars = useCssVars({
  '--ctoast-top': computed(() => `${(index.value - 1) * 50 + 12}px`)
})

export const icon = computed(() => {
  switch (type?.value) {
    case 'info':
      return InfoCircleFill
      break
    case 'success':
      return CheckCircleFill
      break
    case 'warning':
      return ExclamationCircleFill
      break
    case 'error':
      return XCircleFill
      break
    default:
      return InfoCircleFill
      break
  }
})

export default {}
</script>
