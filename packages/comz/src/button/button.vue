<template>
  <button
    type="button"
    :class="className"
    :disabled="disabled"
    @click="handleClick"
  >
    <component v-if="icon" class="cbutton__icon" :is="icon" />
    <slot />
  </button>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  icon?: object
  loading: boolean
  disabled: boolean
}

declare function emit(event: 'on-click'): void

import { toRefs } from 'vue'
import { useBEM } from '@comz/vca'

const { loading, disabled } = toRefs(props)

export const className = useBEM(({b, m}) => ({
  [b('cbutton')]: true,
  [m('loading')]: loading,
  [m('disabled')]: disabled
}))

export const handleClick = () => emit('on-click')

export default {}
</script>