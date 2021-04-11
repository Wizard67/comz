import { mount } from '@vue/test-utils'
import Grid from '../grid.vue'

describe('Grid.vue', () => {
  describe('props', () => {
    it('areas', () => {
      const wrapper = mount(Grid, {
        props: {
          areas: `a b c`
        }
      })

      expect(wrapper.attributes('style')).toContain('--cgrid-areas: a b c;')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('rows', () => {
      const wrapper = mount(Grid, {
        props: {
          rows: '100px 100px 100px'
        }
      })

      expect(wrapper.attributes('style')).toContain(
        '--cgrid-rows: 100px 100px 100px;'
      )
      expect(wrapper.element).toMatchSnapshot()
    })

    it('rows', () => {
      const wrapper = mount(Grid, {
        props: {
          rows: '100px 100px 100px'
        }
      })

      expect(wrapper.attributes('style')).toContain(
        '--cgrid-rows: 100px 100px 100px;'
      )
      expect(wrapper.element).toMatchSnapshot()
    })

    it('columns', () => {
      const wrapper = mount(Grid, {
        props: {
          columns: '100px'
        }
      })

      expect(wrapper.attributes('style')).toContain('--cgrid-columns: 100px;')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('autoRows', () => {
      const wrapper = mount(Grid, {
        props: {
          autoRows: '100px 100px 100px'
        }
      })

      expect(wrapper.attributes('style')).toContain(
        '--cgrid-auto-rows: 100px 100px 100px;'
      )
      expect(wrapper.element).toMatchSnapshot()
    })

    it('autoColumns', () => {
      const wrapper = mount(Grid, {
        props: {
          autoColumns: '100px'
        }
      })

      expect(wrapper.attributes('style')).toContain(
        '--cgrid-auto-columns: 100px;'
      )
      expect(wrapper.element).toMatchSnapshot()
    })

    it('flow', () => {
      const wrapper = mount(Grid, {
        props: {
          flow: 'row'
        }
      })

      expect(wrapper.attributes('style')).toContain('--cgrid-flow: row;')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('gap', () => {
      const wrapper = mount(Grid, {
        props: {
          gap: '8px'
        }
      })

      expect(wrapper.attributes('style')).toContain('--cgrid-gap: 8px;')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('inline', () => {
      const wrapper = mount(Grid, {
        props: {
          inline: true
        }
      })

      expect(wrapper.classes()).toContain('cgrid--inline')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('slots', () => {
    it('default', () => {
      const content = 'grid'

      const wrapper = mount(Grid, {
        slots: {
          default: content
        }
      })

      expect(wrapper.text()).toContain(content)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
