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
    <slot />
  </Transition>
</template>

<script setup lang="ts">
// prettier-ignore
const beforeEnter = (el: Element) => {
  (el as HTMLElement).style.height = '0px'
}

// prettier-ignore
const enter = (el: Element) => {
  if (el.scrollHeight) {
    (el as HTMLElement).style.height = `${el.scrollHeight}px`
  }
}

// prettier-ignore
const afterEnter = (el: Element) => {
  (el as HTMLElement).style.height = 'auto'
}

// prettier-ignore
const beforeLeave = (el: Element) => {
  (el as HTMLElement).style.height = `${el.scrollHeight}px`
}

// prettier-ignore
const leave = (el: Element) => {
  if (el.scrollHeight) {
    (el as HTMLElement).style.height = '0px'
  }
}

// prettier-ignore
const afterLeave = (el: Element) => {
  (el as HTMLElement).style.height = 'auto'
}
</script>
