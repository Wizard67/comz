import { mount } from '@vue/test-utils'
import GridItem from '../grid-item.vue'

describe('GridItem.vue', () => {
  describe('props', () => {
    it('area', () => {
      const wrapper = mount(GridItem, {
        props: {
          area: `a`
        }
      })

      expect(wrapper.attributes('style')).toContain('--cgrid-item-area: a;')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('slots', () => {
    it('default', () => {
      const content = 'grid-item'

      const wrapper = mount(GridItem, {
        slots: {
          default: content
        }
      })

      expect(wrapper.text()).toContain(content)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
