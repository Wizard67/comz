import { ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Input from '../input.vue'

describe('Input.vue', () => {
  describe('props', () => {
    it('modelValue', () => {
      const value = 'input value'

      const wrapper = mount(Input, {
        props: {
          modelValue: value
        }
      })

      const element = wrapper.find('.cinput__field').element

      expect((element as HTMLInputElement).value).toBe(value)
      expect(wrapper.element).toMatchSnapshot()
    })

    it('placeholder', () => {
      const placeholder = 'text'

      const wrapper = mount(Input, {
        props: {
          modelValue: '',
          placeholder: placeholder
        }
      })

      const element = wrapper.get('.cinput__field').element

      expect((element as HTMLInputElement).placeholder).toBe(placeholder)
      expect(wrapper.element).toMatchSnapshot()
    })

    it('readonly', () => {
      const wrapper = mount(Input, {
        props: {
          modelValue: '',
          readonly: true
        }
      })

      expect(wrapper.classes()).toContain('cinput--readonly')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('disabled', () => {
      const wrapper = mount(Input, {
        props: {
          modelValue: '',
          disabled: true
        }
      })

      expect(wrapper.classes()).toContain('cinput--disabled')
      expect(wrapper.element).toMatchSnapshot()
    })

    it('clearable', async () => {
      const wrapper = mount(Input, {
        props: {
          modelValue: '',
          clearable: true
        }
      })

      expect(wrapper.find('.cinput__clear').exists()).toBe(false)

      await wrapper.setProps({ modelValue: 'text' })
      expect(wrapper.find('.cinput__clear').exists()).toBe(true)
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('events', () => {
    it('update:modelValue', async () => {
      const wrapper = mount(Input, {
        props: {
          modelValue: ''
        }
      })

      await wrapper.find('.cinput__field').setValue('hello')
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['hello'])
    })

    it('on-focus', () => {
      const wrapper = mount(Input, {
        attachTo: document.body,
        props: {
          modelValue: 'text'
        }
      })

      const element = wrapper.find('.cinput__field').element as HTMLInputElement
      element.focus()

      expect(wrapper.emitted()).toHaveProperty('on-focus')
      expect(wrapper.emitted()['on-focus'][0]).toEqual(['text'])
    })

    it('on-blur', () => {
      const wrapper = mount(Input, {
        attachTo: document.body,
        props: {
          modelValue: 'text'
        }
      })

      const element = wrapper.find('.cinput__field').element as HTMLInputElement
      element.focus()
      element.blur()

      expect(wrapper.emitted()).toHaveProperty('on-blur')
      expect(wrapper.emitted()['on-blur'][0]).toEqual(['text'])
    })

    it('on-clear', async () => {
      const value = ref('text')

      const wrapper = mount(Input, {
        attachTo: document.body,
        props: {
          modelValue: value,
          clearable: true
        }
      })

      const element = wrapper.find('.cinput__clear')
      element.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('on-clear')

      value.value = ''
      await nextTick()

      const input = wrapper.find('.cinput__field').element as HTMLInputElement
      expect(input.value).toBe('')
      expect(wrapper.find('.cinput__clear').exists()).toBe(false)
    })
  })

  describe('slots', () => {
    it('prepend', () => {
      const content = "prepend"

      const wrapper = mount(Input, {
        props: {
          modelValue: ''
        },
        slots: {
          prepend: content
        }
      })
      
      const element = wrapper.find('.cinput__prepend')

      expect(element.exists()).toBe(true)
      expect(element.text()).toBe(content)
      expect(wrapper.element).toMatchSnapshot()
    })

    it('append', () => {
      const content = "append"

      const wrapper = mount(Input, {
        props: {
          modelValue: ''
        },
        slots: {
          append: content
        }
      })
      
      const element = wrapper.find('.cinput__append')

      expect(element.exists()).toBe(true)
      expect(element.text()).toBe(content)
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
