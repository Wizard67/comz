<template>
  <div class="c-form-item">
    <div class="c-form-item__label">{{ label }}</div>
    <div :class="fieldClassName">
      <Space gap="8px">
        <slot></slot>
      </Space>
      <div
        v-if="errorMsg"
        class="c-form-item__error"
      >{{ errorMsg }}</div>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { inject, ref, computed } from 'vue'
import { key } from './utils'

import { useClassName } from '@comz/vca'

export { default as Space } from '../space/space.vue'

declare const props: {
  label: string
  name: string
}

export const errorMsg = ref('')

inject(key)?.(props.name, errorMsg)

export const fieldClassName = useClassName('c-form-item__field', {
  'error': computed(() => errorMsg.value !== '')
})

</script>

<style lang="scss">
$block: '.c-form-item';

#{$block} {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8px 0 22px 0;
}

#{$block}__label {
  width: 80px;
}

#{$block}__field {
  position: relative;
  flex: auto;
}
#{$block}__field--error {
  @extend #{$block}__field;
  // outline: 1px rgb(252, 92, 92) solid;
}

#{$block}__error {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: -1px;
  transform: translateY(100%);
  width: calc(100% + 2px);
  // padding: 0 8px;
  color: rgb(252, 92, 92);
  // border: 1px rgb(252, 92, 92) solid;
  // background-color: rgb(252, 92, 92);
  font-size: 14px;
  z-index: 200;
}
</style>