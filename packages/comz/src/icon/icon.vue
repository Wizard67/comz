<template>
  <div ref="$el" :class="className" :style="cssVars" @click="handleClick">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit, toRefs } from 'vue'
import { useBEM, useCssVars, useExpose } from '@comz/vca'
import { string, bool } from 'vue-types'

const props = defineProps({
  size: string(),
  color: string(),
  spin: bool().def(false),
  link: bool().def(false)
})

const emit = defineEmit<{
  (e: 'on-click'): void
}>()

const { spin, link, size, color } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('cicon')]: true,
  [m('spin')]: spin,
  [m('link')]: link
}))

const cssVars = useCssVars({
  '--cicon-size': size,
  '--cicon-color': color
})

const handleClick = () => emit('on-click')

const $el = useExpose()
</script>
