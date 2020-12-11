import { defineComponent, h, ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'

import { useFlexPolyfillGapItem } from '../utils'

describe('Flex.vue', () => {
  describe('utils: useFlexPolyfillGapItem', () => {
    it('should work within the nested Flex.', async () => {
      const wrapper = mount(defineComponent({
        setup() {
          const eleRef = ref<HTMLElement | null>(null)
          useFlexPolyfillGapItem(eleRef, ref('16px'))

          return { eleRef }
        },
        render: () => h('div', { class: 'cflex', ref: 'eleRef' },
          h('div', { class: ['cflex', 'target'] })
        )
      }))

      await nextTick()

      const inner = wrapper.find('.target')
      expect(inner.attributes('style')).toContain('--fgp-has-polyfil_gap-item: 16px;')
      
      /**
       * it should not work, if the direct child element is not Flex.
       */
      const wrapper2 = mount(defineComponent({
        setup() {
          const eleRef = ref<HTMLElement | null>(null)
          useFlexPolyfillGapItem(eleRef, ref('16px'))

          return { eleRef }
        },
        render: () => h('div', { class: 'cflex', ref: 'eleRef' },
          h('div', { class: 'target' })
        )
      }))

      await nextTick()

      const inner2 = wrapper2.find('.target')
      expect(inner2.attributes('style')).toBeUndefined()
    })
  })
})
