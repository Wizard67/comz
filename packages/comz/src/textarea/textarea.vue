<template>
  <div class="ctextarea">
    <textarea
      :class="className"
      :style="cssVars"
      :value="modelValue"
      :rows="textareaRows"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
import { computed, toRefs } from 'vue'

import { useBEM,  useCssVars } from '@comz/vca'

const props = defineProps({
  modelValue: { type: String, required: true },
  width: { type: String, required: false },
  rows: { type: Number, required: false },
  placeholder: { type: String, required: false },
  readonly: { type: Boolean, required: true },
  disabled: { type: Boolean, required: true }
})

const emit = defineEmit([
  'update:modelValue'
])

const { rows, disabled, width } = toRefs(props)

const textareaRows = computed(() => rows?.value ?? 2)

const className = useBEM(({ b, e, m }) => ({
  [b('ctextarea')]: true,
  [e('field')]: true,
  [m('disabled')]: disabled
}))

const cssVars = useCssVars({
  '--ctextarea-width': width
})

const handleInput = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}
</script>
