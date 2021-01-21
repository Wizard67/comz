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
import { useContext, getCurrentInstance, toRefs } from 'vue'
import { useBEM } from '@comz/vca'
import { bool } from 'vue-types'

const { expose } = useContext()

const props = defineProps({
  modelValue: bool().isRequired,
  disabled: bool().def(false)
})

const emit = defineEmit(['update:modelValue'])

const instance = getCurrentInstance()!

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

expose(instance['ctx'])
</script>
