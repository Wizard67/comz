<template>
  <div :class="className" @click="() => !disabled && changeState()">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Ref, ComputedRef } from 'vue'
import type { Handler } from './utils'

import { defineProps } from 'vue'
import { getCurrentInstance, inject, computed, reactive, toRefs } from 'vue'
import { useBEM } from '@comz/vca'
import { oneOfType, string, bool } from 'vue-types'
import { useOptionState } from './utils'

const props = defineProps({
  value: oneOfType([String, Number, Boolean, Array, Object]).isRequired,
  label: string().isRequired,
  disabled: bool().isRequired
})

const instance = getCurrentInstance()!
const uid = instance.parent?.uid

const currentValue = inject<Ref<unknown> | ComputedRef<unknown>>(
  `select-${uid}-value`
)

const { value, label, disabled } = toRefs(props)

const { state, changeState } = useOptionState(
  currentValue!,
  reactive({ value, label }),
  inject<Handler>(`select-${uid}-handler`)!
)

const className = useBEM(({ b, m }) => ({
  [b('coption')]: true,
  [m('selected')]: computed(() => state.value === 'selected'),
  [m('disabled')]: disabled
}))
</script>
