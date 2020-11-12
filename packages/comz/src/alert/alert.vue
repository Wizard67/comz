<template>
  <section v-if="show" class="calert" :style="cssVars">
    <div class="calert__content"><slot /></div>
    <div class="calert__extra">
      <slot name="extra" :close="handleClose">
        <Icon @on-click="handleClose" link><X /></Icon>
      </slot>
    </div>
  </section>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  color?: string
  show: boolean
}

declare function emit(event: 'update:show', state: boolean): void
declare function emit(event: 'on-close'): void

import { toRefs } from 'vue'
import { useCssVars } from '@comz/vca'

export { default as Icon } from '../icon/icon.vue'
export { X } from '@comz/icons'

const { color } = toRefs(props)

export const cssVars = useCssVars({
  '--calert-color': color
})

export const handleClose = () => {
  emit('update:show', false)
  emit('on-close')
}

export default {}
</script>
