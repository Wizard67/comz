<template>
  <teleport to="body">
    <transition name="toast-fade">
      <div v-if="show" class="toast">
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script setup="props, { emit }" lang="ts">

import { watch } from 'vue'

declare const props: {
  show: boolean
}

declare function emit(event: 'update:show', state: boolean): void

watch(() => props.show, state => {
  if (state) {
    setTimeout(() => emit('update:show', false), 2000)
  }
})

export default {}
</script>

<style lang="scss">
.toast {
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  min-width: 200px;
  max-width: 100%;
  padding: 6px 16px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .2);
  color: rgb(51, 51, 51);
  background-color: white;
}

.toast-fade-enter-active {
  animation: toast-fade-in .3s;
}

.toast-fade-leave-active {
  animation: toast-fade-out .3s;
}

@keyframes toast-fade-in {
  0% {
    transform: translate3d(-50%, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }
}

@keyframes toast-fade-out {
  0% {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-50%, -20px, 0);
    opacity: 0;
  }
}
</style>