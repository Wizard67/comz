<template>
  <div class="cformitem">
    <div class="cformitem__label" :style="cssVars">{{ label }}</div>
    <div :class="cformitem__field">
      <slot />
      <div v-if="errorMsg" class="cformitem__error">
        {{ errorMsg }}
      </div>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { inject, ref, computed } from 'vue'
import { SET_MSG_METHOD, LABEL_WIDTH } from './utils'

import { useClassName, useCssVars } from '@comz/vca'

export { default as Space } from '../space/space.vue'

declare const props: {
  label: string
  name?: string
}

export const errorMsg = ref('')

props.name && inject(SET_MSG_METHOD)?.(props.name, errorMsg)

export const labelWidth = inject(LABEL_WIDTH)

export const cformitem__field = useClassName('cformitem__field', {
  'error': computed(() => errorMsg.value !== '')
})

export const cssVars = useCssVars({
  '--cformitem-width': computed(() => labelWidth?.value)
})

export default {}
</script>

<style lang="scss">
$block: '.cformitem';

#{$block} {
  display: flex;
  align-items: flex-start;
  margin: 4px 0;
}

#{$block}__label {
  flex: none;
  width: var(--cformitem-width, 80px);
  padding: 4px 0;
  color: rgb(51, 51, 51);
  font-size: 14px;
  line-height: 1.2em;
}

#{$block}__field {
  position: relative;
  flex: 1;
  width: calc(100% - 80%);

  &--error {
    @extend #{$block}__field;
  }
}

#{$block}__error {
  box-sizing: border-box;
  color: rgb(252, 92, 92);
  font-size: 14px;
}
</style>