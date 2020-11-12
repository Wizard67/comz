<template>
  <teleport to="body">
    <transition name="ctoast">
      <div
        v-if="show"
        class="ctoast"
        :style="cssVars"
      >
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  show: boolean
  duration?: number
}

declare function emit(event: 'update:show', state: boolean): void

import { computed, toRefs } from 'vue'
import { useOverlay, useCssVars } from '@comz/vca'

const { show, duration } = toRefs(props)

const { index } = useOverlay({
  namespace: 'toast',
  track: show,
  duration: duration?.value ?? 3000,
  onChange(state) {
    state && emit('update:show', false)
  }
})

export const cssVars = useCssVars({
  '--ctoast-top': computed(() => `${(index.value - 1) * 50 + 12}px`)
})

export default {}
</script>
