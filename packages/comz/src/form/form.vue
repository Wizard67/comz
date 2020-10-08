<template>
  <div class="cform">
    <slot />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { provide, reactive, computed } from 'vue'
import { LABEL_WIDTH, SET_MSG_METHOD } from './utils'

declare const props: {
  labelWidth?: string
}

const itemMap = reactive(new Map())

provide(LABEL_WIDTH, computed(() => props.labelWidth))
provide(SET_MSG_METHOD, (key, value) => itemMap.set(key, value))

export const setMsg = (name: string, msg: string) => {
  const value = itemMap.get(name)
  value.value = msg
}

export default {}
</script>

<style lang="scss">
$block: '.cform';

#{$block} {
  display: flex;
  flex-direction: column;
  padding: 4px;
}
</style>