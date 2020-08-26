<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div
        v-if="show"
        class="c-modal"
        :style="cssVars"
        @click.self="closable ? handleModalClose() : void 0"
      >
        <div class="c-modal__content">

          <Card shadow>
            <template #header>
              <slot
                name="header"
                :close="handleModalClose"
              >
                <template v-if="true">{{ title || '提示' }}</template>
                <Icon v-if="closable" @on-click="handleModalClose" link><X/></Icon>
              </slot>
            </template>

            <template #default>
              <slot></slot>
            </template>

            <template #footer>
              <slot
                name="footer"
                :close="handleModalClose"
              >
                <Button @on-click="handleModalClose">关闭</Button>
              </slot>
            </template>
          </Card>

        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useCssVars } from '@comz/vca'

import Card from '../card/card.vue'
import Button from '../button/button.vue'
import Icon from '../icon/icon.vue'

import { X } from '@comz/icons'

declare function emit(event: 'update:show', state: boolean): void
declare function emit(event: 'on-close'): void

declare const props: {
  title?: string
  width?: string
  show: boolean
  closable: boolean
}

export const handleModalClose = () => {
  emit('update:show', false)
  emit('on-close')
}

export const cssVars = useCssVars({
  '--c-modal-width': computed(() => props.width)
})

export default {
  components: {
    Card, Button, Icon, X
  }
}
</script>

<style lang="scss">
$block: '.c-modal';

%modal {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  z-index: 600;
}

%modal-content {
  position: relative;
  top: 100px;
  flex: none;
  width: var(--c-modal-width, 300px);
}


#{$block} {
  @extend %modal;

  &__content { @extend %modal-content; }
}

.modal-fade-enter-active { animation: modal-fade-in .3s; }
.modal-fade-leave-active { animation: modal-fade-out .3s; }

@keyframes modal-fade-in {
  0% { transform: translate3d(0, -20px, 0); opacity: 0; }
  100% { transform: translate3d(0, 0, 0); opacity: 1; }
}
@keyframes modal-fade-out {
  0% { transform: translate3d(0, 0, 0); opacity: 1; }
  100% { transform: translate3d(0, -20px, 0); opacity: 0; }
}
</style>