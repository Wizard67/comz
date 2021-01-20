<template>
  <div :class="className">
    <div v-if="$slots.prepend" class="cinput__prepend">
      <slot name="prepend" />
    </div>

    <div class="cinput__wrapper">
      <input
        type="text"
        class="cinput__field"
        :value="modelValue"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        @input="handleInputChange"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      />
      <div v-if="allowClear" class="cinput__clear" @click="clearValue">
        <XCircleFill />
      </div>
    </div>

    <div v-if="$slots.append" class="cinput__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
import { useContext, getCurrentInstance, computed, toRefs } from 'vue'
import { useBEM } from '@comz/vca'
import { string, bool } from 'vue-types'

import { XCircleFill } from '@comz/icons'

const { expose } = useContext()

const props = defineProps({
  modelValue: string().isRequired,
  placeholder: string(),
  readonly: bool().isRequired,
  disabled: bool().isRequired,
  clearable: bool().isRequired
})

const emit = defineEmit([
  'update:modelValue',
  'on-focus',
  'on-blur',
  'on-clear'
])

const instance = getCurrentInstance()!

const { readonly, disabled } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('cinput')]: true,
  [m('readonly')]: readonly,
  [m('disabled')]: disabled
}))

const allowClear = computed(
  () =>
    props.modelValue?.length &&
    props.clearable &&
    !props.readonly &&
    !props.disabled
)

const handleInputChange = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const handleInputFocus = (event: InputEvent) => {
  emit('on-focus', (event.target as HTMLInputElement).value)
}

const handleInputBlur = (event: InputEvent) => {
  emit('on-blur', (event.target as HTMLInputElement).value)
}

const clearValue = () => {
  emit('update:modelValue', '')
  emit('on-clear')
}

expose(instance['ctx'])
</script>
