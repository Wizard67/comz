<template>
  <label ref="$el" :class="className">
    <div class="ccheckbox__button">{{ '\u200b' }}</div>
    <input
      type="checkbox"
      class="ccheckbox__field"
      :value="JSON.stringify(value)"
      :checked="checked"
      :disabled="disabled"
      @change="handleValueChange"
    />
    <slot />
  </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmit, computed, toRefs } from 'vue'
import { useBEM, useExpose } from '@comz/vca'
import { array, oneOfType, bool } from 'vue-types'

const props = defineProps({
  modelValue: array().isRequired,
  value: oneOfType([String, Number, Boolean, Array, Object]).isRequired,
  disabled: bool().def(false)
})

const emit = defineEmit<{
  (e: 'update:modelValue', p: unknown): void
}>()

const { disabled } = toRefs(props)

const strModelValue = computed(() =>
  props.modelValue.map((item) => JSON.stringify(item))
)

const strValue = computed(() => JSON.stringify(props.value))

const checked = computed(() => strModelValue.value.includes(strValue.value))

const className = useBEM(({ b, m }) => ({
  [b('ccheckbox')]: true,
  [m('checked')]: checked,
  [m('disabled')]: disabled
}))

const handleValueChange = () => {
  const index = strModelValue.value.indexOf(strValue.value)

  index >= 0
    ? props.modelValue.splice(index, 1)
    : props.modelValue.push(props.value)

  emit('update:modelValue', props.modelValue)
}

const $el = useExpose()
</script>
