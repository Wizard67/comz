<template>
  <button
    ref="$el"
    type="button"
    :class="className"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmit, toRefs, computed } from 'vue'
import { useBEM, useExpose } from '@comz/vca'
import { oneOf, bool } from 'vue-types'

const props = defineProps({
  type: oneOf(['', 'default', 'primary', 'text']).def(''),
  loading: bool().def(false),
  disabled: bool().def(false),
  danger: bool().def(false)
})

const emit = defineEmit<{
  (e: 'on-click'): void
}>()

const { type, danger, loading, disabled } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('cbutton')]: true,
  [m(type)]: computed(() => !!type?.value),
  [m('danger')]: danger,
  [m('loading')]: loading,
  [m('disabled')]: disabled
}))

const handleClick = () => emit('on-click')

const $el = useExpose()
</script>
