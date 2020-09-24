<template>
  <section class="cpanel">
    <div class="cpanel__header" @click="togglePanelState">
      <Icon size="22px">
        <DirectionHorizontal v-if="expand" />
        <Direction v-else />
      </Icon>{{ title }}
    </div>
    <div
      ref="panelWrapRef"
      :class="cpanel__wrap"
      :style="{
        height: panelWrapHeight
      }"
    >
      <div class="cpanel__body" ref="panelBodyRef">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup="props, { emit }" lang="ts">
export { default as Icon } from '../icon/icon.vue'
export { Direction, DirectionHorizontal } from '@comz/icons'

import { toRefs } from 'vue'

import { useClassName, useHeightToggle } from '@comz/vca'

declare const props: {
  expand: boolean
  title?: string
}

declare function emit (event: 'update:expand', value: boolean): void

const { expand } = toRefs(props)

export const cpanel__wrap = useClassName('cpanel__wrap', {
  'expand': expand
})

export const togglePanelState = () => {
  emit('update:expand', !expand.value)
}

export const {
  wrapRef: panelWrapRef,
  bodyRef: panelBodyRef,
  height: panelWrapHeight
} = useHeightToggle(expand, {
  wrapPadding: 8
})

export default {}
</script>

<style lang="scss">
$block: '.cpanel';

#{$block} {
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: rgb(51, 51, 51);
  background-color: white;
  font-size: 14px;
}

#header {
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0 4px;
  background-color: rgba(200, 202, 208, 0.5);
  user-select: none;
  cursor: pointer;
}

#{$block}__header {
  @extend #header;

  &:hover {
    @extend #header;
    background-color: rgba(200, 202, 208, 0.4);
  }

  &:active {
    @extend #header;
    background-color: rgba(200, 202, 208, 0.6);
  }
}

#wrap {
  box-sizing: border-box;
  position: relative;
  transform: translateZ(0);
}
#{$block}__wrap {
  @extend #wrap;
  height: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
  transition: height .2s ease-in-out,
              opacity .2s linear,
              padding .2s ease-in-out;

  &--expand {
    @extend #wrap;
    padding: 4px;
    opacity: 1;
    overflow: visible;
    transition: height .2s ease-in-out,
                opacity .2s linear .2s,
                padding .2s ease-in-out;
  }
}
</style>