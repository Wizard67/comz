import { mount } from '@vue/test-utils'
import Radio from '../radio.vue'

describe('Radio.vue', () => {
  describe('props', () => {
    it('value', () => {
      const content = 'radio'

      const wrapper = mount(Radio, {
        props: {
          modelValue: '',
          value: content
        }
      })

      const element = wrapper.find('.cradio__field').element

      expect((element as HTMLInputElement).value).toBe(content)
      expect(wrapper.element).toMatchSnapshot()
    })

    it('modelValue', () => {
      const value = 'radio'

      const wrapper = mount(Radio, {
        props: {
          modelValue: value,
          value: value
        }
      })

      expect(wrapper.classes()).toContain('cradio--checked')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('disabled', () => {
      const wrapper = mount(Radio, {
        props: {
          modelValue: '',
          disabled: true
        }
      })

      expect(wrapper.classes()).toContain('cradio--disabled')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('events', () => {
    it('update:modelValue', async () => {
      const value = 'radio'

      const wrapper = mount(Radio, {
        props: {
          modelValue: '',
          value: value
        }
      })

      await wrapper.find('.cradio__field').setValue(true)

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue'][0]).toEqual([value])
    })
  })

  describe('slots', () => {
    it('default', () => {
      const content = "text"

      const wrapper = mount(Radio, {
        props: {
          modelValue: ''
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
