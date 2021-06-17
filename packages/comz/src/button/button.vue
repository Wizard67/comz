<template>
  <button
    type="button"
    :disabled="disabled"
    @[clickEvent]="onClick"
    @[cancelEvent]="onCancel"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmit, toRefs, computed, onUnmounted } from 'vue'
import { number, bool } from 'vue-types'
import { useClick, useToggle } from '../hooks'

const props = defineProps({
  throttle: number().def(0),
  continuous: bool().def(false)
})

const emit = defineEmit<{
  (event: 'on-click', playload: MouseEvent): void
}>()

const { throttle, continuous: cont } = toRefs(props)

const { state, toggle } = useToggle(false, throttle)

const disabled = computed(() => !cont.value && state.value)
const clickEvent = computed(() => (cont.value ? 'mousedown' : 'click'))
const cancelEvent = computed(() => (cont.value ? 'mouseup' : ''))

let timer: NodeJS.Timeout

const onClick = useClick({
  disabled: state,
  click(event) {
    if (cont.value) {
      clearInterval(timer)
      timer = setInterval(() => emit('on-click', event), throttle.value)
    }

    toggle()
    emit('on-click', event)
  }
})

const onCancel = () => clearInterval(timer)

onUnmounted(() => clearInterval(timer))
</script>
