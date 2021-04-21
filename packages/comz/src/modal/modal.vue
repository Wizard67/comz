<template>
  <teleport to="body">
    <transition name="modal">
      <div
        v-if="show"
        ref="$el"
        class="cmodal"
        :style="cssVars"
        @click.self="handleMaskClick"
      >
        <div class="cmodal__content">
          <Card shadow>
            <template #header>
              <slot name="header" :close="handleClose">
                <template v-if="true">{{ title || '提示' }}</template>
                <Icon v-if="closable" @on-click="handleClose" link><X /></Icon>
              </slot>
            </template>
            <template #default>
              <slot />
            </template>
            <template #footer>
              <slot name="footer" :close="handleClose">
                <Button @on-click="handleClose">关闭</Button>
              </slot>
            </template>
          </Card>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmit, toRefs } from 'vue'
import { useCssVars, useExpose } from '@comz/vca'
import { string, bool } from 'vue-types'

import { Card } from 'comz'
import { Button } from 'comz'
import { Icon } from 'comz'
import { X } from '@comz/icons'

const props = defineProps({
  title: string(),
  width: string(),
  show: bool().def(false),
  closable: bool().def(false)
})

const emit = defineEmit<{
  (e: 'update:show', p: boolean): void
  (e: 'on-close'): void
}>()

const { closable, width } = toRefs(props)

const handleClose = () => {
  emit('update:show', false)
  emit('on-close')
}

const handleMaskClick = () => {
  if (!closable.value) return

  handleClose()
}

const cssVars = useCssVars({
  '--cmodal-width': width
})

const $el = useExpose()
</script>
