<template>
  <teleport to="body">
    <transition name="modal">
      <div
        v-if="show"
        class="cmodal"
        :style="cssVars"
        @click.self="handleMaskClick"
      >
        <div class="cmodal__content">
          <Card shadow>
            <template #header>
              <slot name="header" :close="handleClose">
                <template v-if="true">{{ title || '提示' }}</template>
                <Icon v-if="closable" @on-click="handleClose" link><X/></Icon>
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

<script setup="props, { emit }" lang="ts">
declare const props: {
  title?: string
  width?: string
  show: boolean
  closable: boolean
}

declare function emit(event: 'update:show', state: boolean): void
declare function emit(event: 'on-close'): void

import { toRefs } from 'vue'
import { useCssVars } from '@comz/vca'

export { default as Card } from '../card/card.vue'
export { default as Button } from '../button/button.vue'
export { default as Icon } from '../icon/icon.vue'
export { X } from '@comz/icons'

const { closable, width } = toRefs(props)

export const handleClose = () => {
  emit('update:show', false)
  emit('on-close')
}

export const handleMaskClick = () => {
  if (!closable.value) return

  handleClose()
}

export const cssVars = useCssVars({
  '--cmodal-width': width
}, { scoped: true })

export default {}
</script>
