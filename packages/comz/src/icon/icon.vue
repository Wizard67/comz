<template>
  <div
    :class="className"
    :style="cssVars"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
import { toRefs, useContext, getCurrentInstance } from 'vue'
import { useBEM, useCssVars } from '@comz/vca'
import { string, bool } from 'vue-types'

const props = defineProps({
  size: string(),
  color: string(),
  spin: bool().isRequired,
  link: bool().isRequired
})

const emit = defineEmit([
  'on-click'
])

const instance = getCurrentInstance()!
const { expose } = useContext()
expose(instance['ctx'])

const { spin, link, size, color } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('cicon')]: true,
  [m('spin')]: spin,
  [m('link')]: link,
}))

const cssVars = useCssVars({
  '--cicon-size': size,
  '--cicon-color': color
})

const handleClick = () => emit('on-click')
</script>
