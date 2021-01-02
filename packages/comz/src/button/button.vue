<template>
  <button
    type="button"
    :class="className"
    :disabled="disabled"
    @click="handleClick"
  >
    <Flex gap="4px" inline>
      <slot />
    </Flex>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
import { toRefs } from 'vue'
import { useBEM } from '@comz/vca'
import { bool } from 'vue-types'

import { Flex } from 'comz'

const props = defineProps({
  loading: bool().isRequired,
  disabled: bool().isRequired,
  danger: bool().isRequired
})

const emit = defineEmit([
  'on-click'
])

const { loading, disabled, danger } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('cbutton')]: true,
  [m('loading')]: loading,
  [m('disabled')]: disabled,
  [m('danger')]: danger
}))

const handleClick = () => emit('on-click')
</script>