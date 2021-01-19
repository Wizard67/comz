import { mount } from '@vue/test-utils'
import Checkbox from '../checkbox.vue'

describe('Checkbox.vue', () => {
  describe('props', () => {
    it('value', () => {
      const content = 'checkbox'

      const wrapper = mount(Checkbox, {
        props: {
          modelValue: [],
          value: content
        }
      })

      const element = wrapper.find('.ccheckbox__field').element

      expect((element as HTMLInputElement).value).toBe(content)
      expect(wrapper.element).toMatchSnapshot()
    })

    it('modelValue', () => {
      const value = 'checkbox'

      const wrapper = mount(Checkbox, {
        props: {
          modelValue: [value],
          value: value
        }
      })

      expect(wrapper.classes()).toContain('ccheckbox--checked')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('disabled', () => {
      const wrapper = mount(Checkbox, {
        props: {
          modelValue: [],
          disabled: true
        }
      })

      expect(wrapper.classes()).toContain('ccheckbox--disabled')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('events', () => {
    it('update:modelValue', async () => {
      const value = 'checkbox'

      const wrapper = mount(Checkbox, {
        props: {
          modelValue: [],
          value: value
        }
      })

      await wrapper.find('.ccheckbox__field').setValue(true)

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue'][0]).toEqual([[value]])
    })
  })

  describe('slots', () => {
    it('default', () => {
      const content = 'text'

      const wrapper = mount(Checkbox, {
        props: {
          modelValue: []
        },
        slots: {
          default: content
        }
      })

      expect(wrapper.text()).toContain(content)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
