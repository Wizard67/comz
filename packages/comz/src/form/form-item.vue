<template>
  <div class="cform-item">
    <div class="cform-item__label" :style="cssVars">{{ label }}</div>
    <div :class="className">
      <slot />
      <div v-if="errorMsg" class="cform-item__error">{{ errorMsg }}</div>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  label: string
  name?: string
}

import { inject, ref, computed } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'
import { SET_MSG_METHOD, LABEL_WIDTH } from './utils'

export const errorMsg = ref('')

props.name && inject(SET_MSG_METHOD)?.(props.name, errorMsg)

export const className = useBEM(({b, e, m}) => ({
  [b('cform-item')]: true,
  [e('field')]: true,
  [m('error')]: computed(() => errorMsg.value !== '')
}))

export const cssVars = useCssVars({
  '--cformitem-width': inject(LABEL_WIDTH)
})

export default {}
</script>
