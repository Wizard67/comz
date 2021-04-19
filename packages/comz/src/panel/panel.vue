<template>
  <section :class="className">
    <div class="cpanel__header" @click="togglePanelState">
      <div class="cpanel__icon">
        <ChevronExpand v-if="expand" />
        <Dash v-else />
      </div>
      <div class="cpanel__title">{{ title }}</div>
    </div>

    <ExpandTransition>
      <div class="cpanel__body" v-if="expand">
        <slot />
      </div>
    </ExpandTransition>
  </section>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmit,
  useContext,
  getCurrentInstance,
  toRefs
} from 'vue'
import { useBEM } from '@comz/vca'
import { string, bool } from 'vue-types'

import { Dash, ChevronExpand } from '@comz/icons'
import ExpandTransition from '../transition/expand.vue'

const { expose } = useContext()

const props = defineProps({
  expand: bool().isRequired,
  title: string()
})

const emit = defineEmit<{
  (e: 'update:expand', p: boolean): void
}>()

const instance = getCurrentInstance()!

const { expand } = toRefs(props)

const className = useBEM(({ b, m }) => ({
  [b('cpanel')]: true,
  [m('expand')]: expand
}))

const togglePanelState = () => {
  emit('update:expand', !expand.value)
}

expose(instance['ctx'])
</script>
