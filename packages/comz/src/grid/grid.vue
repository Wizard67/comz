<template>
  <div
    class="cgrid"
    :class="className"
    :style="cssVars"
  >
    <slot />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  gap?: string
  template?: string
  border: boolean
}

import { provide, ref, toRefs } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'
import { key } from './utils'

const { border, gap, template } = toRefs(props)

provide(key, border)

export const className = useBEM(({ b, m }) => ({
  [b('cgrid')]: ref(true),
  [m('border')]: border
}), { blockPrefix: false })

export const cssVars = useCssVars({
  '--cgrid-gap': gap,
  '--cgrid-template': template
}, { scoped: true })

export default {}
</script>
