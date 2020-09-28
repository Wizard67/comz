<template>
  <teleport to="body">
    <transition name="ctoast-fade">
      <div
        v-if="show"
        class="ctoast"
        :style="cssVars"
      >
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script setup="props, { emit }" lang="ts">
import { computed, toRefs } from 'vue'
import { useOverlay, useCssVars } from '@comz/vca'

declare const props: {
  show: boolean
  duration?: number
}

declare function emit(event: 'update:show', state: boolean): void

const { show, duration } = toRefs(props)

const { index } = useOverlay({
  namespace: 'toast',
  track: show,
  duration: duration?.value ?? 3000,
  onChange(state) {
    state && emit('update:show', false)
  }
})

export const cssVars = useCssVars({
  '--ctoast-top': computed(() => `${(index.value - 1) * 50 + 12}px`)
})

export default {}
</script>

<style lang="scss">
$block: '.ctoast';

#{$block} {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, var(--ctoast-top));
  display: flex;
  min-width: 200px;
  max-width: 500px;
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  color: rgb(51, 51, 51);
  background-color: white;
  font-size: 14px;
  line-height: 1.2em;
  transition: transform .3s ease-in-out;
}

.ctoast-fade-enter-active {
  animation: ctoast-fade-in .3s ease-in-out;
}
.ctoast-fade-leave-active {
  animation: ctoast-fade-out .3s ease-in-out;
}

@keyframes ctoast-fade-in {
  0% {
    transform: translate3d(-50%, -100%, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(-50%, var(--ctoast-top), 0);
    opacity: 1;
  }
}

@keyframes ctoast-fade-out {
  0% {
    transform: translate3d(-50%, var(--ctoast-top), 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-50%, -100%, 0);
    opacity: 0;
  }
}
</style>