<template>
  <div :class="className" ref="selectRef">
    <div class="cselect__selector" @click="handleSelectorClick">
      <input
        class="cselect__field"
        type="text"
        :placeholder="placeholder"
        :value="label"
        readonly
      />
      <div class="cselect__icon"><ChevronExpand /></div>
    </div>

    <div v-if="showWrap" ref="optionsRef" class="cselect__content">
      <Transition name="cselect" @after-leave="afterLeave">
        <div v-show="showContent" class="cselect__options" :style="cssVars">
          <slot />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { Placement } from '@popperjs/core'
import type { Handler } from './utils'

import {
  defineProps,
  defineEmit,
  useContext,
  getCurrentInstance,
  ref,
  computed,
  toRefs,
  provide,
  watch,
  nextTick
} from 'vue'
import {
  useBEM,
  useCssVars,
  useToggle,
  usePopover,
  useClickOutSide
} from '@comz/vca'
import { oneOfType, string, bool } from 'vue-types'

import { ChevronExpand } from '@comz/icons'

const { expose } = useContext()

const props = defineProps({
  modelValue: oneOfType([String, Number, Boolean, Array, Object]).isRequired,
  placeholder: string(),
  disabled: bool().def(false)
})

const emit = defineEmit<{
  (e: 'update:modelValue', p: unknown): void
}>()

const instance = getCurrentInstance()!

const { modelValue, placeholder, disabled } = toRefs(props)

const uid = instance.uid
const label = ref('')

const selectRef = ref<HTMLElement | null>(null)
const optionsRef = ref<HTMLElement | null>(null)

const { state: showContent, toggle: toggleShowContent } = useToggle(false)
const { state: showWrap, toggle: toggleShowWrap } = useToggle()

provide<Ref<unknown>>(`select-${uid}-value`, modelValue)
provide<Handler>(`select-${uid}-handler`, (payload) => {
  label.value = payload.label
  toggleShowContent(false)
  emit('update:modelValue', payload.value)
})

const className = useBEM(({ b, m }) => ({
  [b('cselect')]: true,
  [m('disabled')]: disabled
}))

const cssVars = useCssVars({
  '--cselect-option-width': computed(
    () => `${selectRef.value?.getBoundingClientRect().width}px`
  )
})

const { create, destroy } = usePopover(selectRef, optionsRef, {
  placement: 'bottom-start' as Placement,
  strategy: 'fixed',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }
  ]
})

useClickOutSide(
  optionsRef,
  (e) => {
    toggleShowContent(false)
  },
  true
)

const handleSelectorClick = () => {
  !disabled.value && !showWrap.value && toggleShowWrap()
}

const afterLeave = () => {
  toggleShowWrap(false)
  destroy()
}

watch(
  showWrap,
  (status) => {
    if (status) {
      create()
      // make content transition
      nextTick(() => toggleShowContent(true))
    }
  },
  { flush: 'post' }
)

expose(instance['ctx'])
</script>
