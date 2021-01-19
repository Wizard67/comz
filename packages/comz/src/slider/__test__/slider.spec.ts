import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Slider from '../slider.vue'

const mockMousedown = (position: { [key: string]: number }) => {
  const event = new Event('mousedown')
  ;(event as any).pageX = position.pageX
  ;(event as any).pageY = position.pageY

  return event
}

describe('Slider.vue', () => {
  describe('props', () => {
    // TODO:
    it('modelValue', () => {})

    // TODO:
    it('min', () => {})

    // TODO:
    it('max', () => {})

    // TODO:
    it('step', () => {})

    it('disabled', () => {
      const wrapper = mount(Slider, {
        props: {
          modelValue: 0,
          disabled: true
        }
      })

      expect(wrapper.classes()).toContain('cslider--disabled')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('events', () => {
    it('update:modelValue', async () => {
      const wrapper = mount(Slider, {
        props: {
          modelValue: 0
        }
      })

      const field = wrapper.find('.cslider__field')

      jest
        .spyOn(field.element, 'getBoundingClientRect')
        .mockImplementation(() => ({
          left: 0,
          top: 0,
          x: 0,
          y: 0,
          bottom: 0,
          right: 0,
          width: 150,
          height: 4,
          toJSON: () => {}
        }))

      await nextTick()
      field.element.dispatchEvent(mockMousedown({ pageX: 75, pageY: 0 }))

      // TODO: css variables should be changed.
      await nextTick()
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue'][0]).toEqual([50])
    })
  })

  describe('slots', () => {
    it('prepend', () => {
      const content = 'prepend'

      const wrapper = mount(Slider, {
        props: {
          modelValue: 0
        },
        slots: {
          prepend: content
        }
      })

      const element = wrapper.find('.cslider__prepend')

      expect(element.exists()).toBe(true)
      expect(element.text()).toBe(content)
      expect(wrapper.element).toMatchSnapshot()
    })

    it('append', () => {
      const content = 'append'

      const wrapper = mount(Slider, {
        props: {
          modelValue: 0
        },
        slots: {
          append: content
        }
      })

      const element = wrapper.find('.cslider__append')

      expect(element.exists()).toBe(true)
      expect(element.text()).toBe(content)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
