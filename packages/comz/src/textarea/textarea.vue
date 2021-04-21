<template>
  <div ref="$el" class="ctextarea">
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
import { defineProps, defineEmit, computed, toRefs } from 'vue'
import { useBEM, useCssVars, useExpose } from '@comz/vca'
import { string, number, bool } from 'vue-types'

const props = defineProps({
  modelValue: string().isRequired,
  width: string(),
  rows: number(),
  placeholder: string(),
  readonly: bool().def(false),
  disabled: bool().def(false)
})

const emit = defineEmit<{
  (e: 'update:modelValue', p: string): void
}>()

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

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}

const $el = useExpose()
</script>
