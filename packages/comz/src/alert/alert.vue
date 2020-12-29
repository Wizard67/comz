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

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
import { toRefs } from 'vue'

import { Icon } from 'comz'
import { X } from '@comz/icons'

import { useCssVars } from '@comz/vca'

const props = defineProps({
  color: { type: String, required: false },
  show: { type: Boolean, required: true }
})

const emit = defineEmit([
  'update:show',
  'on-close'
])

const { color } = toRefs(props)

const cssVars = useCssVars({
  '--calert-color': color
})

const handleClose = () => {
  emit('update:show', false)
  emit('on-close')
}
</script>
