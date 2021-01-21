<template>
  <div ref="selectRef" :class="className">
    <div class="cselect__selector" @click.stop="() => !disabled && toggle()">
      <div :class="fieldClassName">{{ currentText }}</div>
      <div class="cselect__icon">
        <Icon>
          <ChevronUp v-if="expand" />
          <ChevronDown v-else />
        </Icon>
      </div>
    </div>
    <div :class="optionsClassName">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { Handler } from './utils'

import { defineProps, defineEmit } from 'vue'
import {
  useContext,
  getCurrentInstance,
  ref,
  toRefs,
  computed,
  provide
} from 'vue'
import { useBEM, useToggle } from '@comz/vca'
import { oneOfType, string, bool } from 'vue-types'
import { useClickOutSide, isEmpty } from './utils'

import { Icon } from 'comz'
import { ChevronDown, ChevronUp } from '@comz/icons'

const { expose } = useContext()

const props = defineProps({
  modelValue: oneOfType([String, Number, Boolean, Array, Object]).isRequired,
  placeholder: string(),
  disabled: bool().def(false)
})

const emit = defineEmit(['update:modelValue'])

const instance = getCurrentInstance()!

const { modelValue, placeholder, disabled } = toRefs(props)

const uid = instance.uid
const label = ref('')

const { state: expand, toggle } = useToggle(false)

provide<Ref<unknown>>(`select-${uid}-value`, modelValue)
provide<Handler>(`select-${uid}-handler`, (payload) => {
  label.value = payload.label
  toggle(false)
  emit('update:modelValue', payload.value)
})

const className = useBEM(({ b, m }) => ({
  [b('cselect')]: true,
  [m('disabled')]: disabled
}))

const fieldClassName = useBEM(({ b, e, m }) => ({
  [b('cselect')]: true,
  [e('field')]: true,
  [m('empty')]: computed(() => isEmpty(modelValue.value))
}))

const optionsClassName = useBEM(({ b, e, m }) => ({
  [b('cselect')]: true,
  [e('options')]: true,
  [m('open')]: expand
}))

const selectRef = ref<HTMLElement | null>(null)

useClickOutSide(expand, selectRef, (result) => (expand.value = result))

const currentText = computed(
  () => label.value || modelValue.value || placeholder?.value
)

expose(instance['ctx'])
</script>
