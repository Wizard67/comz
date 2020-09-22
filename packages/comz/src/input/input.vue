<template>
  <div
    class="cinput"
    :style="inputCssVars"
  >
    <input
      type="text"
      :class="cinput__field"
      :style="inputFieldCssVars"
      :value="modelValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
    >
    <div v-if="showClearButton" class="cinput__clear">
      <Icon @on-click="handleClear" link><X/></Icon>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
import { computed, toRefs } from 'vue'
import { useClassName, useCssVars } from '@comz/vca'

export { default as Icon } from '../icon/icon.vue'
export { X } from '@comz/icons'

declare const props: {
  modelValue: string
  placeholder?: string
  width?: string
  readonly: boolean
  disabled: boolean
  clearable: boolean
}

declare function emit (event: 'update:modelValue', value: any): void

const { disabled, width } = toRefs(props)

export const cinput__field = useClassName('cinput__field', {
  'disabled': disabled
})

export const inputCssVars = useCssVars({
  '--cinput-width': width
})

export const inputFieldCssVars = useCssVars({
  '--cinput-field-rpadding': computed(() => 
    showClearButton.value ? '1.5em': undefined
  )
}, { scoped: true })

export const showClearButton = computed(() =>
  props.modelValue?.length > 0 &&
  props.clearable &&
  !props.readonly &&
  !props.disabled
)

export const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

export const handleClear = () => {
  emit('update:modelValue', '')
}

export default {}
</script>

<style lang="scss">
$block: '.cinput';

#{$block} {
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: var(--cinput-width, 100%);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

%input-field {
  box-sizing: border-box;
  flex: 1;
  position: relative;
  width: 160px;
  max-width: 100%;
  height: 100%;
  padding: 4px 8px;
  padding-right: var(--cinput-field-rpadding, 8px);
  border: none;
  color: rgb(51, 51, 51);
  font-size: 14px;
  line-height: 1.2em;

  &:focus {
    outline: none;
  }

  &:read-only {
    color: rgba(0, 0, 0, .3);
  }
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
  flex: none;
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