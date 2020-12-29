<template>
  <div
    :class="className"
    @click="() => !disabled && changeState()"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Ref, ComputedRef } from 'vue'
import type { Handler } from './utils'

import { defineProps } from 'vue'
import { inject, computed, reactive, toRefs, getCurrentInstance } from 'vue'

import { useBEM } from '@comz/vca'

import { useOptionState } from './utils'

const props = defineProps({
  value: { type: [String, Number, Boolean, Array, Object], required: true },
  label: { type: String, required: true },
  disabled: { type: Boolean, required: true }
})

const uid = getCurrentInstance()?.parent?.uid

const currentValue = inject<Ref<unknown> | ComputedRef<unknown>>(`select-${uid}-value`)
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
