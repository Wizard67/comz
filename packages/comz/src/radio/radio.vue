<template>
  <label :class="className">
    <div class="cradio__button">{{ '\u200b' }}</div>
    <input
      class="cradio__field"
      type="radio"
      :value="JSON.stringify(value)"
      :checked="checked"
      :disabled="disabled"
      @change="handleValueChange"
    />
    <slot />
  </label>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmit,
  useContext,
  getCurrentInstance,
  computed,
  toRefs
} from 'vue'
import { useBEM } from '@comz/vca'
import { oneOfType, bool } from 'vue-types'

const { expose } = useContext()

const props = defineProps({
  modelValue: oneOfType([String, Number, Boolean, Array, Object]).isRequired,
  value: oneOfType([String, Number, Boolean, Array, Object]).isRequired,
  disabled: bool().def(false)
})

const emit = defineEmit<{
  (e: 'update:modelValue', p: unknown): void
}>()

const instance = getCurrentInstance()!

const { disabled } = toRefs(props)

const checked = computed(
  () => JSON.stringify(props.value) === JSON.stringify(props.modelValue)
)

const className = useBEM(({ b, m }) => ({
  [b('cradio')]: true,
  [m('checked')]: checked,
  [m('disabled')]: disabled
}))

const handleValueChange = () => {
  // to avoid object-value being stringify, return props.value
  emit('update:modelValue', props.value)
}

expose(instance['ctx'])
</script>
