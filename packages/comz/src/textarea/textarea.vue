<template>
  <div class="c-textarea">
    <textarea
      :class="textareaClassName"
      :style="textareaCssVars"
      :value="modelValue"
      :rows="textareaRows"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
    ></textarea>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

declare const props: {
  modelValue: string | number
  width?: string
  rows?: number
  placeholder?: string
  readonly: boolean
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

export const textareaRows = computed(() => props.rows || 2)

export const textareaClassName = useClassName('c-textarea__field', {
  'disabled': computed(() => props.disabled)
})

export const textareaCssVars = useCssVars({
  '--c-textarea-width': computed(() => props.width)
})

export const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}

export default {}
</script>

<style lang="scss">
$block: '.c-textarea';

%textarea-field {
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-height: 2em;
  padding: 4px 8px;
  border: 1px rgba(0, 0, 0, .2) solid;
  color: rgb(51, 51, 51);
  resize: vertical;

  &:focus {
    outline: none;
  }
}

#{$block} {
  position: relative;
  width: var(--c-textarea-width, 200px);
}

#{$block}__field {
  @extend %textarea-field;
}

#{$block}__field[readonly] {
  @extend %textarea-field;
  background-color: rgb(235, 235, 235);
}

#{$block}__field--disabled {
  @extend %textarea-field;
  color: rgba(0, 0, 0, .2);
  background-color: rgb(235, 235, 235);
  cursor: not-allowed;
}
</style>