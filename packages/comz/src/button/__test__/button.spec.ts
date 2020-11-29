import { mount } from '@vue/test-utils'
import Button from '../button.vue'

describe('Button.vue', () => {
  describe('props', () => {
    it('loading', () => {
      const wrapper = mount(Button, {
        props: {
          loading: true
        }
      })
  
      expect(wrapper.classes()).toContain('cbutton--loading')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('disabled', () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true
        }
      })
  
      expect(wrapper.classes()).toContain('cbutton--disabled')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('event', () => {
    it('on-click', () => {
      const wrapper = mount(Button)
      
      wrapper.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('on-click')
    })
  })

  describe('slots', () => {
    it('default', () => {
      const content = "button"

      const wrapper = mount(Button, {
        slots: {
          default: content
        }
      })

      expect(wrapper.text()).toContain(content)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
