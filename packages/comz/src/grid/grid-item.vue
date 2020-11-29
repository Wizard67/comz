<template>
  <div :class="className" :style="cssStyle">
    <slot />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  name: string
  place?: string
}

import { inject, ref, toRefs } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'
import { key } from './utils'

const { name, place } = toRefs(props)

export const className = useBEM(({ b, e, m}) => ({
  [b('cgrid-item')]: true,
  [m('border')]: inject(key, ref(false))
}))

export const cssStyle = useCssVars({
  '--cgrid-item-name': name,
  '--cgrid-item-place': place
}, { scoped: true })

export default {}
</script>
