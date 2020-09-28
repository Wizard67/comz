<template>
  <div class="ctextarea">
    <textarea
      :class="ctextarea__field"
      :style="cssVars"
      :value="modelValue"
      :rows="textareaRows"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
    ></textarea>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { computed, toRefs } from 'vue'
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

const { rows, disabled, width } = toRefs(props)

export const textareaRows = computed(() => rows?.value || 2)

export const ctextarea__field = useClassName('ctextarea__field', {
  'disabled': disabled
})

export const cssVars = useCssVars({
  '--ctextarea-width': width
})

export const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}

export default {}
</script>

<style lang="scss">
$block: '.ctextarea';

%textarea-field {
  box-sizing: border-box;
  position: relative;
  flex: 1;
  display: block;
  width: 100%;
  min-height: 24px;
  padding: 4px 8px;
  border: none;
  color: rgb(51, 51, 51);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
               Helvetica Neue, Arial, Noto Sans, sans-serif,
               Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 14px;
  line-height: 1.2em;
  white-space: pre-wrap;
  resize: vertical;

  &:focus {
    outline: none;
  }
}

#{$block} {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--ctextarea-width, 100%);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &__field {
    @extend %textarea-field;

    &::placeholder {
      color: rgba(0, 0, 0, .3);
    }

    &:read-only {
      @extend %textarea-field;
      background-color: rgb(235, 235, 235);
    }

    &--disabled {
      @extend %textarea-field;
      color: rgba(0, 0, 0, .2);
      background-color: rgb(235, 235, 235);
      cursor: not-allowed;
    }
  }
}
</style>