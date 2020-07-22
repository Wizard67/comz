<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { provide } from 'vue'
import { key } from './use'

provide(key, Boolean(props.border))

declare const props: {
  gap: string
  template: string
  border: boolean
}

export const gap = props.gap
export const template = props.template
</script>

<style vars="{ gap, template }">
.grid {
  display: grid;
  gap: var(--gap);
  grid-template: var(--template);
}
</style>