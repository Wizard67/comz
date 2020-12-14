<template>
  <div
    :class="className"
    @click="() => !disabled && changeState()"
  >
    <slot />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  value: unknown
  label: string
  disabled: boolean
}

import type { Ref, ComputedRef } from 'vue'
import type { Handler } from './utils'

import { inject, computed, reactive, toRefs, getCurrentInstance } from 'vue'
import { useBEM } from '@comz/vca'
import { useOptionState } from './utils'

const uid = getCurrentInstance()?.parent?.uid

const currentValue = inject<Ref<unknown> | ComputedRef<unknown>>(`select-${uid}-value`)
const { value, label, disabled } = toRefs(props)

export const { state, changeState } = useOptionState(
  currentValue!,
  reactive({ value, label }),
  inject<Handler>(`select-${uid}-handler`)!
)

export const className = useBEM(({b, m}) => ({
  [b('coption')]: true,
  [m('selected')]: computed(() => state.value === 'selected'),
  [m('disabled')]: disabled
}))

export default {}
</script>
