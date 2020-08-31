<template>
  <teleport to="body">
    <transition name="toast-fade">
      <div
        v-if="show"
        class="c-toast"
        :style="cssVars"
      >
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useOverlay, useCssVars } from '@comz/vca'

declare const props: {
  show: boolean
  duration?: number
}

declare function emit(event: 'update:show', state: boolean): void

const { index } = useOverlay({
  namespace: 'toase',
  track: computed(() => props.show),
  duration: props.duration ?? 3000,
  onChange(state) {
    state && emit('update:show', false)
  }
})

export const cssVars = useCssVars({
  '--c-toast-top': computed(() => `${(index.value - 1) * 50 + 12}px`)
})

export default {}
</script>

<style lang="scss">
$block: '.c-toast';

#{$block} {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, var(--c-toast-top));
  display: flex;
  min-width: 200px;
  max-width: 100%;
  padding: 6px 16px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .2);
  color: rgb(51, 51, 51);
  background-color: white;
  transition: transform .3s ease-in-out;
}

.toast-fade-enter-active {
  animation: toast-fade-in .3s;
}

.toast-fade-leave-active {
  animation: toast-fade-out .3s;
}

@keyframes toast-fade-in {
  0% {
    transform: translate3d(-50%, -100%, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(-50%, var(--c-toast-top), 0);
    opacity: 1;
  }
}

@keyframes toast-fade-out {
  0% {
    transform: translate3d(-50%, var(--c-toast-top), 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-50%, -100%, 0);
    opacity: 0;
  }
}
</style>