import { mount } from '@vue/test-utils'
import Switch from '../switch.vue'

describe('Switch.vue', () => {
  describe('props', () => {
    it('modelValue', () => {
      const wrapper = mount(Switch, {
        props: {
          modelValue: true
        }
      })

      expect(wrapper.classes()).toContain('cswitch--checked')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('disabled', () => {
      const wrapper = mount(Switch, {
        props: {
          modelValue: '',
          disabled: true
        }
      })

      expect(wrapper.classes()).toContain('cswitch--disabled')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('events', () => {
    it('update:modelValue', async () => {
      const wrapper = mount(Switch, {
        props: {
          modelValue: false
        }
      })

      await wrapper.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
    })
  })

  describe('slots', () => {
    it('prepend', () => {
      const content = 'prepend'

      const wrapper = mount(Switch, {
        props: {
          modelValue: true
        },
        slots: {
          prepend: content
        }
      })

      const element = wrapper.find('.cswitch__prepend')

      expect(element.exists()).toBe(true)
      expect(element.text()).toBe(content)
      expect(wrapper.element).toMatchSnapshot()
    })

    it('append', () => {
      const content = 'append'

      const wrapper = mount(Switch, {
        props: {
          modelValue: true
        },
        slots: {
          append: content
        }
      })

      const element = wrapper.find('.cswitch__append')

      expect(element.exists()).toBe(true)
      expect(element.text()).toBe(content)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
