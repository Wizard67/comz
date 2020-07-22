<template>
  <div class="grid-item">
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { inject } from 'vue'
import { key } from './use'

declare const props: {
  name: string
  place?: string
}

export const name = props.name
export const place = props.place || 'initial'
export const border = inject(key) ? '0.5px rgba(0, 0, 0, .2) dashed': ''
</script>

<style vars="{ name, place, border }">
.grid-item {
  border: var(--border, unset);
  grid-area: var(--name);
  place-self: var(--place);
}
</style>