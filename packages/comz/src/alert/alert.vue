<template>
  <div
    v-if="show"
    :class="alertClassName"
    :style="cssVars"
  >
    <div class="c-alert__content">
      <slot name="default" />
    </div>
    <div class="c-alert__extra">
      <slot name="extra" :close="handleClose">
        <Icon @on-click="handleClose" link><X /></Icon>
      </slot>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

import Icon from '../icon/icon.vue'
import { X } from '@comz/icons'

declare const props: {
  color?: string
  show: boolean
}

declare function emit(event: 'update:show', state: boolean): void
declare function emit(event: 'on-close'): void

export const alertClassName = useClassName('c-alert')

export const cssVars = useCssVars({
  '--c-alert-color': computed(() => props.color)
})

export const handleClose = () => {
  emit('update:show', false)
  emit('on-close')
}

export default {
  components: { Icon, X }
}
</script>

<style lang="scss">
$block: '.c-alert';

#{$block} {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  max-width: 100%;
  padding: 6px 16px;
  color: rgb(51, 51, 51);
  background-color: var(--c-alert-color, transparent);
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .2);

  &__extra {
    margin-left: 16px;
  }
}
</style>