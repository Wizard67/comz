<template>
  <section class="cpanel">
    <div class="cpanel__header" @click="togglePanelState">
      <Icon size="22px">
        <ChevronExpand v-if="expand" />
        <ChevronContract v-else />
      </Icon>
      <template v-if="true">{{ title }}</template>
    </div>
    <div
      ref="wrapRef"
      :class="className"
      :style="{ height }"
    >
      <div class="cpanel__body" ref="bodyRef">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'
import { toRefs } from 'vue'

import { Icon } from 'comz'
import { ChevronExpand, ChevronContract } from '@comz/icons'

import { useBEM, useHeightToggle } from '@comz/vca'

const props = defineProps({
  expand: { type: Boolean, required: true },
  title: { type: String, required: false }
})

const emit = defineEmit([
  'update:expand'
])

const { expand } = toRefs(props)

const className = useBEM(({ b, e, m }) => ({
  [b('cpanel')]: true,
  [e('wrap')]: true,
  [m('expand')]: expand
}))

const { wrapRef, bodyRef, height } = useHeightToggle(expand, {
  wrapPadding: 8
})

const togglePanelState = () => {
  emit('update:expand', !expand.value)
}
</script>
