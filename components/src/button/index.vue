<template>
  <div
    class="button"
    @click="handleButtonClick"
  >
    <slot></slot>
  </div>
</template>

<script setup="_, { emit }" lang="ts">

declare function emit(event: 'on-click'): void

declare const props: {
  type?: string
  color?: string
}

export const handleButtonClick = () => emit('on-click')

</script>

<style lang="scss">
.button {
  display: inline-flex;
  padding: 4px 16px;
  color: white;
  background-color: lightskyblue;
  font-size: 14px;
  user-select: none;
}
.button:hover {
  cursor: pointer;
}
</style>