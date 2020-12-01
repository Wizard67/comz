import { mount } from '@vue/test-utils'
import Icon from '../icon.vue'

describe('Icon.vue', () => {
  describe('props', () => {
    it('size', () => {
      const wrapper = mount(Icon, {
        props: {
          size: '20px'
        }
      })

      expect(wrapper.attributes('style')).toBe('--cicon-size: 20px;')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('color', () => {
      const wrapper = mount(Icon, {
        props: {
          color: 'red'
        }
      })

      expect(wrapper.attributes('style')).toBe('--cicon-color: red;')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('spin', () => {
      const wrapper = mount(Icon, {
        props: {
          spin: true
        }
      })

      expect(wrapper.classes('')).toContain('cicon--spin')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('link', () => {
      const wrapper = mount(Icon, {
        props: {
          link: true
        }
      })

      expect(wrapper.classes('')).toContain('cicon--link')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('event', () => {
    it('on-click', () => {
      const wrapper = mount(Icon)
      
      wrapper.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('on-click')
    })
  })

  describe('slot', () => {
    const content = "icon"

    const wrapper = mount(Icon, {
      slots: {
        default: content
      }
    })

    expect(wrapper.text()).toContain(content)
    expect(wrapper.element).toMatchSnapshot()
  })
})
