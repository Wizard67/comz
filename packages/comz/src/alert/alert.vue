<template>
  <section v-if="show" ref="$el" class="calert" :style="cssVars">
    <div class="calert__content"><slot /></div>
    <div class="calert__extra">
      <slot name="extra" :close="handleClose">
        <Icon @on-click="handleClose" link><X /></Icon>
      </slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, defineEmit, toRefs } from 'vue'
import { useCssVars, useExpose } from '@comz/vca'
import { string, bool } from 'vue-types'

import { Icon } from 'comz'
import { X } from '@comz/icons'

const props = defineProps({
  color: string(),
  show: bool().def(false)
})

const emit = defineEmit<{
  (e: 'update:show', p: boolean): void
  (e: 'on-close'): void
}>()

const { color } = toRefs(props)

const cssVars = useCssVars({
  '--calert-color': color
})

const handleClose = () => {
  emit('update:show', false)
  emit('on-close')
}

const $el = useExpose()
</script>
