<template>
  <label :class="className">
    <div class="ccheckbox__button">{{ '\u200b' }}</div>
    <input
      type="checkbox"
      class="ccheckbox__field"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleValueChange"
    />
    <slot />
  </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
import { computed, toRefs } from 'vue'

import { useBEM } from '@comz/vca'

const props = defineProps({
  modelValue: { type: Array, required: true },
  value: { type: [String, Number, Boolean, Array, Object], required: true },
  disabled: { type: Boolean, required: true }
})

const emit = defineEmit([
  'update:modelValue'
])

const { disabled } = toRefs(props)

const strModelValue = computed(() =>
  props.modelValue.map(item => JSON.stringify(item))
)

const strValue = computed(() => JSON.stringify(props.value))

const checked = computed(() =>
  strModelValue.value.includes(strValue.value)
)

const className = useBEM(({ b, m }) => ({
  [b('ccheckbox')]: true,
  [m('checked')]: checked,
  [m('disabled')]: disabled
}))

const handleValueChange = (event: InputEvent) => {
  const index = strModelValue.value.indexOf(strValue.value)

  index >= 0
  ? props.modelValue.splice(index, 1)
  : props.modelValue.push(props.value)

  emit('update:modelValue', props.modelValue)
}
</script>
