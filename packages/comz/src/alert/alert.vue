<template>
  <div class="alert">
    <div v-if="$slots.pre" class="alert__pre">
      <slot name="pre"></slot>
    </div>
    <div class="alert__content">
      <slot name="default"></slot>
    </div>
    <div v-if="$slots.next" class="alert__next">
      <slot name="next"></slot>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">

declare const props: {
  color?: string
}

export const color = props.color ?? 'transparent'

export default {}
</script>

<style vars="{ color }" lang="scss">
.alert {
  display: flex;
  min-width: 200px;
  max-width: 100%;
  padding: 6px 16px;
  color: rgb(51, 51, 51);
  background-color: var(--color);
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .2);

  &__pre {
    margin-right: 16px;
  }

  &__next {
    margin-left: 16px;
  }
}
</style>