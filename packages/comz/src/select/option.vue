<template>
  <div ref="$el" :class="className" @click.stop="handleOptionSelect">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Ref, ComputedRef } from 'vue'
import type { Handler } from './utils'

import { defineProps, getCurrentInstance, inject, toRefs, reactive } from 'vue'
import { useBEM, useExpose } from '@comz/vca'
import { oneOfType, string, bool } from 'vue-types'
import { useOptionState } from './utils'
const props = defineProps({
  value: oneOfType([String, Number, Boolean, Array, Object]).isRequired,
  label: string().isRequired,
  disabled: bool().def(false)
})

const instance = getCurrentInstance()!
const uid = instance.parent?.parent?.parent?.uid

const currentValue = inject<Ref<unknown> | ComputedRef<unknown>>(
  `select-${uid}-value`
)

const { value, label, disabled } = toRefs(props)

const { state, changeState } = useOptionState(
  currentValue!,
  reactive({ value, label }),
  inject<Handler>(`select-${uid}-handler`)!
)

const handleOptionSelect = () => {
  !disabled.value && changeState()
}

const className = useBEM(({ b, m }) => ({
  [b('coption')]: true,
  [m('selected')]: state,
  [m('disabled')]: disabled
}))

const $el = useExpose()
</script>
