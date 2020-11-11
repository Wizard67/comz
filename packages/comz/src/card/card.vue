<template>
  <section
    class="ccard"
    :class="className"
  >
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

<script setup="props, { emit }" lang="ts">
declare const props: {
  shadow: boolean
}

import { ref, toRefs } from 'vue'
import { useBEM } from '@comz/vca'

const { shadow } = toRefs(props)

export const className = useBEM(({b, e, m}) => ({
  [b('ccard')]: ref(true),
  [m('shadow')]: shadow
}), { blockPrefix: false })

export default {}
</script>