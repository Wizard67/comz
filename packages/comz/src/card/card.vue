<template>
  <section :class="className">
    <div v-if="$slots.header" class="ccard__header">
      <slot name="header" />
    </div>

    <div class="ccard__body"><slot /></div>

    <div v-if="$slots.footer" class="ccard__footer">
      <slot name="footer" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useContext, getCurrentInstance, toRefs } from 'vue'
import { useBEM } from '@comz/vca'
import { bool } from 'vue-types'

const { expose } = useContext()

const props = defineProps({
  shadow: bool().def(false)
})

const instance = getCurrentInstance()!

const { shadow } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('ccard')]: true,
  [m('shadow')]: shadow
}))

expose(instance['ctx'])
</script>
