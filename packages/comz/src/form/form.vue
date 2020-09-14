<template>
  <div class="c-form">
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { provide, ref } from 'vue'
import { key } from './utils'

const itemMap = ref(new Map())

provide(key, (key, value) => {
  itemMap.value.set(key, value)
})

export const setMsg = (name: string, msg: string) => {
  const value = itemMap.value.get(name)
  value.value = msg
}

</script>

<style lang="scss">

</style>