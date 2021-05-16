<template>
  <button
    ref="$el"
    type="button"
    :class="className"
    :style="style"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmit, toRefs, computed } from 'vue'
import { useBEM, useCssVars, useColor, useExpose } from '@comz/vca'
import { oneOf, bool, string } from 'vue-types'

const props = defineProps({
  type: oneOf(['', 'default', 'text']).def(''),
  color: string().def(''),
  loading: bool().def(false),
  disabled: bool().def(false)
})

const emit = defineEmit<{
  (e: 'on-click'): void
}>()

const { type, color, loading, disabled } = toRefs(props)

const { r, g, b } = useColor(color)

const className = useBEM(({ b, m }) => ({
  [b('cbutton')]: true,
  [m(type)]: computed(() => !!type?.value),
  [m('loading')]: loading,
  [m('disabled')]: disabled
}))

const style = useCssVars({
  '--cbutton-color-r': r,
  '--cbutton-color-g': g,
  '--cbutton-color-b': b
})

const handleClick = () => emit('on-click')

const $el = useExpose()
</script>
