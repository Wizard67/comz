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
import { computed } from 'vue'
export { default as Icon } from '../icon/icon.vue'
export { Direction, DirectionHorizontal } from '@comz/icons'

import { useClassName, useHeightToggle } from '@comz/vca'

declare const props: {
  expand: boolean
  title?: string
}

declare function emit (event: 'update:expand', value: boolean): void

export const cpanel__wrap = useClassName('cpanel__wrap', {
  'expand': computed(() => props.expand)
})

export const togglePanelState = () => {
  emit('update:expand', !props.expand)
}

export const {
  wrapRef: panelWrapRef,
  bodyRef: panelBodyRef,
  height: panelWrapHeight
} = useHeightToggle(computed(() => props.expand), {
  wrapPadding: 8
})

export default {}
</script>

<style lang="scss">
$block: '.cpanel';

#{$block} {
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #c8cad0;
  background-color: #2f3137;
  font-size: 14px;
}

#header {
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0 4px;
  background-color: rgba(200, 202, 208, 0.1);
  user-select: none;
  cursor: pointer;
}

#{$block}__header {
  @extend #header;

  &:hover {
    @extend #header;
    background-color: rgba(200, 202, 208, 0.15);
  }

  &:active {
    @extend #header;
    background-color: rgba(200, 202, 208, 0.2);
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