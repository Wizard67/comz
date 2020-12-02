import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import Button from '../button.vue'
import { X } from '@comz/icons'

describe('Button.vue', () => {
  describe('props', () => {
    it('icon', () => {
      const wrapper = mount(Button, {
        props: {
          icon: markRaw(X)
        }
      })

      const svg = wrapper.find('svg')
      expect(svg).not.toBeUndefined()
      expect(svg.classes()).toContain('cbutton__icon')
      expect(wrapper.element).toMatchSnapshot()
    })

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
