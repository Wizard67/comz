<template>
  <label :class="ccheckbox">
    <input
      class="ccheckbox__field"
      type="checkbox"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleInput"
    />
    <slot />
  </label>
</template>

<script setup="props, { emit }" lang="ts">
import { reactive, computed, toRefs } from 'vue'
import { useClassName } from '@comz/vca'

declare const props: {
  value: string
  modelValue: string[]
  disabled: boolean
}

declare function emit (event: 'update:modelValue', value: string[]): void

const { disabled } = toRefs(props)
const checkeds = reactive(props.modelValue)

export const checked = computed(() => checkeds.includes(props.value))

export const ccheckbox = useClassName('ccheckbox', {
  'checked': checked,
  'disabled': disabled
})

export const handleInput = (event: InputEvent) => {
  const value = (event.target as HTMLInputElement).value
  const index = props.modelValue.indexOf(value)

  index >= 0
  ? checkeds.splice(index, 1)
  : checkeds.push(value)

  emit('update:modelValue', checkeds)
}

export default {}
</script>

<style lang="scss">
$block: '.ccheckbox';

%checkbox {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  padding: 4px 0;
  color: rgb(51, 51, 51);
  font-size: 14px;
  line-height: 1.2em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::before,
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 0;
    width: 1em;
    height: 1em;
  }
  &::before {
    transform: translateY(-50%) translateZ(0);
    border: 2px rgb(52, 142, 199) solid;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    cursor: inherit;
  }

  &::after {
    transform: translateY(-50%) translateZ(0) scale(.1);
    transform-origin: center;
    background-color: rgb(52, 142, 199);
    opacity: 0;
    transition: background-color .2s ease-in-out,
                transform .15s ease-in-out,
                opacity .1s ease-in-out;
  }
}

#{$block} {
  @extend %checkbox;

  &--checked {
    @extend %checkbox;

    &::after {
      transform: translateY(-50%) translateZ(0) scale(.5);
      opacity: 1;
    }
  }

  &--disabled {
    @extend %checkbox;

    color: rgba(0, 0, 0, .3);
    cursor: not-allowed;

    &::before {
      border: 2px rgba(0, 0, 0, .2) solid;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    &::after {
      background-color: rgba(0, 0, 0, .2);
    }
  }

  &--checked--disabled {
    @extend #{$block}--checked; 
    @extend #{$block}--disabled; 
  }
}

#{$block}__field {
  width: 1em;
  height: 1em;
  margin: 0 .25em 0 0;
  opacity: 0;
  font-size: inherit;
  cursor: inherit;
}
</style>