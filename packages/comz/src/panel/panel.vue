<template>
  <section class="cpanel">
    <div class="cpanel__header" @click="togglePanelState">
      <Icon size="22px">
        <DirectionHorizontal v-if="expand" />
        <Direction v-else />
      </Icon>
      <template v-if="true">{{ title }}</template>
    </div>
    <div
      class="cpanel__wrap"
      ref="wrapRef"
      :class="className"
      :style="{ height }"
    >
      <div class="cpanel__body" ref="bodyRef">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  expand: boolean
  title?: string
}

declare function emit (event: 'update:expand', value: boolean): void

import { toRefs } from 'vue'
import { useBEM, useHeightToggle } from '@comz/vca'

export { default as Icon } from '../icon/icon.vue'
export { Direction, DirectionHorizontal } from '@comz/icons'

const { expand } = toRefs(props)

export const className = useBEM(({b, e, m}) => ({
  [b('cpanel')]: true,
  [e('wrap')]: true,
  [m('expand')]: expand
}), { blockPrefix: false })

export const togglePanelState = () => {
  emit('update:expand', !expand.value)
}

export const { wrapRef, bodyRef, height } = useHeightToggle(expand, {
  wrapPadding: 8
})

export default {}
</script>
