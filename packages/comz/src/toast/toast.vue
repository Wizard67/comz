<template>
  <teleport to="body">
    <transition name="ctoast">
      <div v-if="show" ref="$el" class="ctoast" :style="cssVars">
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

<script setup lang="ts">
import { defineProps, defineEmit, computed, toRefs } from 'vue'
import { useOverlay, useCssVars, useExpose } from '@comz/vca'
import { string, number, bool } from 'vue-types'

import { Icon } from 'comz'
import {
  InfoCircleFill,
  CheckCircleFill,
  ExclamationCircleFill,
  XCircleFill
} from '@comz/icons'

const props = defineProps({
  show: bool().def(false),
  type: string(),
  duration: number()
})

const emit = defineEmit<{
  (e: 'update:show', p: boolean): void
}>()

const { show, type, duration } = toRefs(props)

const { index } = useOverlay({
  namespace: 'toast',
  track: show,
  duration: duration?.value ?? 3000,
  onChange: (state) => state && emit('update:show', false)
})

const cssVars = useCssVars({
  '--ctoast-top': computed(() => `${(index.value - 1) * 50 + 12}px`)
})

const icon = computed(() => {
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

const $el = useExpose()
</script>
