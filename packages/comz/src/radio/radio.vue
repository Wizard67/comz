<template>
  <label :class="className">
    <div class="cradio__button">{{ '\u200b' }}</div>
    <input
      class="cradio__field"
      type="radio"
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
  modelValue: { type: [String, Number, Boolean, Array, Object], required: true },
  value: { type: [String, Number, Boolean, Array, Object], required: true },
  disabled: { type: Boolean, required: true }
})

const emit = defineEmit([
  'update:modelValue'
])

const { disabled } = toRefs(props)

const checked = computed(() =>
  JSON.stringify(props.value) === JSON.stringify(props.modelValue)
)

const className = useBEM(({ b, m }) => ({
  [b('cradio')]: true,
  [m('checked')]: checked,
  [m('disabled')]: disabled
}))

const handleValueChange = (event: InputEvent) => {
  // to avoid object-value being stringify, return props.value
  emit('update:modelValue', props.value)
}
</script>
