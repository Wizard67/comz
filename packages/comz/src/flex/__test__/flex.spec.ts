import { mount } from '@vue/test-utils'
import Flex from '../flex.vue'

describe('Flex.vue', () => {
  describe('props', () => {
    it('inline', () => {
      const wrapper = mount(Flex, {
        props: {
          inline: true
        }
      })

      expect(wrapper.classes()).toContain('cflex--inline')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('gap', () => {
      const wrapper = mount(Flex, {
        props: {
          gap: '10px'
        }
      })

      expect(wrapper.attributes('style')).toContain('--cflex-gap: 10px;')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('justify', () => {
      const wrapper = mount(Flex, {
        props: {
          justify: 'center'
        }
      })

      expect(wrapper.attributes('style')).toContain('--cflex-justify: center;')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('align', () => {
      const wrapper = mount(Flex, {
        props: {
          align: 'flex-end'
        }
      })

      expect(wrapper.attributes('style')).toContain('--cflex-align: flex-end;')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('center', () => {
      const wrapper = mount(Flex, {
        props: {
          center: true
        }
      })

      expect(wrapper.classes()).toContain('cflex--center')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('vertical', () => {
      const wrapper = mount(Flex, {
        props: {
          vertical: true
        }
      })

      expect(wrapper.classes()).toContain('cflex--vertical')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('slots', () => {
    it('default', () => {
      const content = "flex"

      const wrapper = mount(Flex, {
        slots: {
          default: content
        }
      })

      expect(wrapper.text()).toContain(content)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
