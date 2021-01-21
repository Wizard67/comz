<template>
  <Transition
    name="cexpand"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <section v-if="expand">
      <slot />
    </section>
  </Transition>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { bool } from 'vue-types'

defineProps({
  expand: bool().def(false)
})

// prettier-ignore
const beforeEnter = (el: Element) => {
  (el as HTMLElement).style.height = '0'
}

// prettier-ignore
const enter = (el: Element) => {
  if (el.scrollHeight) {
    (el as HTMLElement).style.height = `${el.scrollHeight}px`
  }
}

// prettier-ignore
const afterEnter = (el: Element) => {
  (el as HTMLElement).style.height = ''
}

// prettier-ignore
const beforeLeave = (el: Element) => {
  (el as HTMLElement).style.height = `${el.scrollHeight}px`
}

// prettier-ignore
const leave = (el: Element) => {
  if (el.scrollHeight) {
    (el as HTMLElement).style.height = '0'
  }
}

// prettier-ignore
const afterLeave = (el: Element) => {
  (el as HTMLElement).style.height = ''
}
</script>
