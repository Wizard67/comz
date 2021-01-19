import { defineComponent, h, ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useEvent } from './index'

describe('useEvent', () => {
  it('should work.', async () => {
    const handler = jest.fn()
    mount(
      defineComponent({
        setup() {
          useEvent(window, 'click', handler)
        },
        render: () => h('div')
      })
    )

    await nextTick()
    expect(handler).toBeCalledTimes(0)

    window.dispatchEvent(
      new CustomEvent('click', {
        detail: null,
        bubbles: false,
        cancelable: true
      })
    )
    expect(handler).toBeCalledTimes(1)
  })

  it('should accept ref element.', async () => {
    const time = ref(0)
    const wrapper = mount(
      defineComponent({
        setup() {
          const elementRef = ref(null)

          useEvent(elementRef, 'click', () => {
            time.value++
          })

          return { elementRef }
        },
        render: () => h('div', { ref: 'elementRef' })
      })
    )

    await nextTick()
    expect(time.value).toBe(0)

    await wrapper.trigger('click')
    expect(time.value).toBe(1)
  })

  it('should work with options.', async () => {
    const handler = jest.fn()
    const wrapper = mount(
      defineComponent({
        setup() {
          const elementRef = ref(null)

          useEvent(elementRef, 'click', handler, { once: true })

          return { elementRef }
        },
        render: () => h('div', { ref: 'elementRef' })
      })
    )

    await nextTick()
    await wrapper.trigger('click')
    await wrapper.trigger('click')
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('should remove event listener if element ref changes.', async () => {
    const time = ref(0)
    const elementRef = ref(null)
    const wrapper = mount(
      defineComponent({
        setup() {
          useEvent(elementRef, 'click', () => time.value++)

          return { elementRef }
        },
        render: () => h('div', { ref: 'elementRef' })
      })
    )

    await nextTick()
    await wrapper.trigger('click')
    expect(time.value).toBe(1)

    elementRef.value = null
    await nextTick()
    await wrapper.trigger('click')
    expect(time.value).toBe(1)

    elementRef.value = document.createElement('div')
    await nextTick()
    await wrapper.trigger('click')
    expect(time.value).toBe(1)
    await elementRef.value.click()
    expect(time.value).toBe(2)
  })

  it('should remove event listener when component destroyed.', async () => {
    const handler = jest.fn()
    const wrapper = mount(
      defineComponent({
        setup() {
          const elementRef = ref(null)

          useEvent(elementRef, 'click', handler)

          return { elementRef }
        },
        render: () => h('div', { ref: 'elementRef' })
      })
    )

    await nextTick()
    await wrapper.trigger('click')
    expect(handler).toBeCalledTimes(1)

    wrapper.unmount()
    await nextTick()
    await wrapper.trigger('click')
    expect(handler).toBeCalledTimes(1)
  })

  it('should remove event listener when stop function invoke.', async () => {
    let stop = () => {}
    const handler = jest.fn()
    const wrapper = mount(
      defineComponent({
        setup() {
          const elementRef = ref(null)

          stop = useEvent(elementRef, 'click', handler)

          return { elementRef }
        },
        render: () => h('div', { ref: 'elementRef' })
      })
    )

    await nextTick()
    await wrapper.trigger('click')
    expect(handler).toBeCalledTimes(1)

    stop()
    await wrapper.trigger('click')
    expect(handler).toBeCalledTimes(1)
  })
})
