<template>
  <button
    type="button"
    class="cbutton"
    :class="className"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  loading: boolean
  disabled: boolean
}

declare function emit(event: 'on-click'): void

import { ref, toRefs } from 'vue'
import { useBEM } from '@comz/vca'

const { loading, disabled } = toRefs(props)

export const className = useBEM(({b, m}) => ({
  [b('cbutton')]: ref(true),
  [m('loading')]: loading,
  [m('disabled')]: disabled
}), { blockPrefix: false })

export const handleClick = () => emit('on-click')

export default {}
</script>