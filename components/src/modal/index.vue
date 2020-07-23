<template>
  <div
    class="modal"
    v-if="show"
    @click.self="handleWrapClick"
  >
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import {} from 'vue'

declare function emit(event: 'update:show', state: boolean): void
declare function emit(event: 'on-close'): void

declare const props: {
  show: boolean
}

export const handleWrapClick = () => {

  emit('update:show', false)
  emit('on-close')
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
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 200;

  &__content {
    width: 200px;
    height: 300px;
    background-color: white;
  }
}
</style>