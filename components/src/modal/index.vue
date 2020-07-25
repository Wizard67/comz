<template>
  <transition name="modal-fade">
    <div
      class="modal"
      v-if="show"
      @click.self="handleModalClose"
    >
      <div class="modal__content">
        <Card shadow>
          <template #header>
            <slot name="header">
              {{ title || '提示' }}
            </slot>
          </template>
          <template #default>
            <slot></slot>
          </template>
          <template #footer>
            <slot name="footer">
              <Button @on-click="handleModalClose">关闭</Button>
            </slot>
          </template>
        </Card>
      </div>
    </div>
  </transition>
  <transition name="modal-backdrop-fade">
    <div v-if="show" class="modal-backdrop"></div>
  </transition>
</template>

<script setup="props, { emit }" lang="ts">
import Card from '../card/index.vue'
import Button from '../button/index.vue'

declare function emit(event: 'update:show', state: boolean): void
declare function emit(event: 'on-close'): void

declare const props: {
  show: boolean
  title?: String
}

export const handleModalClose = () => {
  emit('update:show', false)
  emit('on-close')
}

export default {
  components: {
    Card,
    Button
  }
}
</script>

<style lang="scss">
.modal {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  z-index: 200;

  &__content {
    flex: none;
    width: 300px;
    margin-top: 100px;
  }
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, .5);
  transform: translate3d(0, 0, 0);
}

.modal-fade-enter-active {
  animation: modal-fade-in .3s;
}

.modal-fade-leave-active {
  animation: modal-fade-out .3s;
}

@keyframes modal-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes modal-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}

.modal-backdrop-fade-enter-active {
  animation: modal-backdrop-fade-in .3s;
}

.modal-backdrop-fade-leave-active {
  animation: modal-backdrop-fade-out .3s;
}

@keyframes modal-backdrop-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes modal-backdrop-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>