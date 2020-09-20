<template>
  <div class="c-input">
    <input
      type="text"
      :class="inputClassName"
      :style="inputCssVars"
      :value="modelValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
    >
    <div
      class="c-input__clear"
      v-if="showClearButton"
    ><Icon @on-click="handleClear" link><X/></Icon>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

import Icon from '../icon/icon.vue'
import { X } from '@comz/icons'

declare const props: {
  modelValue: string
  placeholder?: string
  width?: string
  readonly: boolean
  disabled: boolean
  clearable: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

export const inputClassName = useClassName('c-input__field', {
  'disabled': computed(() => props.disabled)
})

export const inputCssVars = useCssVars({
  '--c-input-width': computed(() => props.width),
  '--c-input-field-rpadding': computed(() => props.clearable ? '24px' : '')
})

export const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

export const showClearButton = computed(() =>
  props.modelValue?.length > 0 &&
  props.clearable
)

export const handleClear = () => {
  emit('update:modelValue', '')
}

export default {
  components: {
    Icon, X
  }
}
</script>

<style lang="scss">
$block: '.c-input';

%input-field {
  box-sizing: border-box;
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  width: 100%;
  height: 100%;
  padding: 4px 8px;
  padding-right: var(--c-input-field-rpadding, 8px);
  border: 1px rgba(0, 0, 0, .2) solid;
  color: rgb(51, 51, 51);

  &:focus {
    outline: none;
  }
}

#{$block} {
  position: relative;
  width: var(--c-input-width, 200px);
}

#{$block}__field {
  @extend %input-field;
}

#{$block}__field--disabled {
  @extend %input-field;
  color: rgba(0, 0, 0, .2);
  background-color: rgb(235, 235, 235);
  cursor: not-allowed;
}

#{$block}__clear {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 100%;
}
</style>