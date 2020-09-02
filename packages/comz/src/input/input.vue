<template>
  <div class="c-input">
    <input
      type="text"
      :class="inputClassName"
      :value="modelValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
    >
    <div
      v-if="showClearButton"
      class="c-input__clear"
    >
      <Icon
        color="rgba(0, 0, 0, .2)"
        :stroke-width="3"
        @on-click="handleClear"
        link
      ><CircleX/></Icon>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useClassName } from '@comz/vca'

import Icon from '../icon/icon.vue'
import { CircleX } from '@comz/icons'

declare const props: {
  modelValue: string
  placeholder?: string
  readonly: boolean
  disabled: boolean
  clearable: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

export const inputClassName = useClassName('c-input__field', {
  'readonly': computed(() => props.readonly),
  'disabled': computed(() => props.disabled)
})

export const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (<HTMLInputElement>event.target).value)
}

export const showClearButton = computed(() =>
  props.modelValue.length > 0 &&
  props.clearable
)

export const handleClear = () => {
  emit('update:modelValue', '')
}

export default {
  components: {
    Icon, CircleX
  }
}
</script>

<style lang="scss">
$block: '.c-input';

%input-field {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  padding: 4px 8px;
  border: 1px rgba(0, 0, 0, .2) solid;
  color: rgb(51, 51, 51);

  &:focus {
    outline: none;
  }
}

#{$block} {
  position: relative;
}

#{$block}__field {
  @extend %input-field;
}

#{$block}__field--readonly {
  @extend %input-field;
  background-color: rgb(235, 235, 235);
}

#{$block}__field--disabled {
  @extend %input-field;
  color: rgba(0, 0, 0, .2);
  background-color: rgb(235, 235, 235);
  cursor: not-allowed;
}

#{$block}__field--readonly--disabled {
  @extend #{$block}__field--readonly;
  @extend #{$block}__field--disabled;
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
}
</style>