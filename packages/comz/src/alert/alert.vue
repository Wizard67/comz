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
import { toRefs, useContext, getCurrentInstance } from 'vue'
import { useCssVars } from '@comz/vca'
import { string, bool } from 'vue-types'

import { Icon } from 'comz'
import { X } from '@comz/icons'

const props = defineProps({
  color: string(),
  show: bool().isRequired
})

const emit = defineEmit([
  'update:show',
  'on-close'
])

const instance = getCurrentInstance()!
const { expose } = useContext()
expose(instance['ctx'])

const { color } = toRefs(props)

const cssVars = useCssVars({
  '--calert-color': color
})

const handleClose = () => {
  emit('update:show', false)
  emit('on-close')
}
</script>
