<template>
  <div :class="iconClassName" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

declare const props: {
  size?: string
  color?: string
  strokeWidth?: number
  spin: boolean
  link: boolean
}

declare function emit(event: 'on-click'): void

export const handleClick = () => emit('on-click')

export const iconClassName = useClassName('c-icon', {
  'spin': computed(() => props.spin),
  'link': computed(() => props.link)
})

useCssVars({
  'icon-size': computed(() => props.size),
  'icon-color': computed(() => props.color),
  'icon-stroke-width': computed(() => props.strokeWidth)
})

export default {}
</script>

<style lang="scss">
$block: ".c-icon";

%icon {
  display: inline-flex;
  align-items: center;
  color: var(--icon-color, inhert);
  font-size: var(--icon-size, inhert);
  stroke-width: var(--icon-stroke-width, 1);

  // aligns svg/image/font icon with text
  // https://zhuanlan.zhihu.com/p/30624268
  &::before {
    content: '\200b'
  }
}

#{$block} {
  @extend %icon;
}

#{$block}--spin {
  @extend %icon;
  animation: c-icon-spin .85s linear infinite;
}

#{$block}--link {
  @extend %icon;
  cursor: pointer;
}

#{$block}--spin--link {
  @extend #{$block}--spin;
  @extend #{$block}--link;
}

@keyframes c-icon-spin {
  100% {
    transform: rotate(-1turn);
  }
}
</style>