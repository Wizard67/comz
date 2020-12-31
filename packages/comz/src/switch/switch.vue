<template>
  <div :class="className" @click="handleValueChange">
    <div v-if="$slots.prepend" class="cswitch__prepend">
      <slot name="prepend" />
    </div>

    <div class="cswitch__field"></div>

    <div v-if="$slots.append" class="cswitch__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
import { toRefs } from 'vue'
import { useBEM } from '@comz/vca'
import { bool } from 'vue-types'

const props = defineProps({
  modelValue: bool().isRequired,
  disabled: bool().isRequired
})

const emit = defineEmit([
  'update:modelValue'
])

const { modelValue, disabled } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('cswitch')]: true,
  [m('checked')]: modelValue,
  [m('disabled')]: disabled
}))

const handleValueChange = () => {
  if (disabled.value) return
  emit('update:modelValue', !modelValue.value)
}
</script>
