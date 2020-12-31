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

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
import { toRefs } from 'vue'
import { useBEM } from '@comz/vca'
import { object, bool } from 'vue-types'

const props = defineProps({
  icon: object(),
  loading: bool().isRequired,
  disabled: bool().isRequired
})

const emit = defineEmit([
  'on-click'
])

const { loading, disabled } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('cbutton')]: true,
  [m('loading')]: loading,
  [m('disabled')]: disabled
}))

const handleClick = () => emit('on-click')
</script>