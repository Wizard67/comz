<template>
  <div class="cform">
    <slot />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  labelWidth?: string
}

import { toRefs, provide, reactive } from 'vue'
import { LABEL_WIDTH, SET_MSG_METHOD } from './utils'

const { labelWidth } = toRefs(props)
const itemMap = reactive(new Map())

provide(LABEL_WIDTH, labelWidth)
provide(SET_MSG_METHOD, (key, value) => itemMap.set(key, value))

export const setMsg = (name: string, msg: string) => {
  const value = itemMap.get(name)
  value.value = msg
}

export default {}
</script>
