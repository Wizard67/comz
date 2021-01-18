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
import { computed, toRefs, useContext, getCurrentInstance } from 'vue'
import { useBEM,  useCssVars } from '@comz/vca'
import { string, number, bool } from 'vue-types'

const props = defineProps({
  modelValue: string().isRequired,
  width: string(),
  rows: number(),
  placeholder: string(),
  readonly: bool().isRequired,
  disabled: bool().isRequired
})

const emit = defineEmit([
  'update:modelValue'
])

const instance = getCurrentInstance()!
const { expose } = useContext()
expose(instance['ctx'])

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
