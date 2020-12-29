<template>
  <section :class="className">
    <div
      v-if="$slots.header"
      class="ccard__header"
    >
      <slot name="header" />
    </div>

    <div class="ccard__body"><slot /></div>

    <div
      v-if="$slots.footer"
      class="ccard__footer"
    >
      <slot name="footer" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { toRefs } from 'vue'

import { useBEM } from '@comz/vca'

const props = defineProps({
  shadow: { type: Boolean, required: true }
})

const { shadow } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('ccard')]: true,
  [m('shadow')]: shadow
}))
</script>