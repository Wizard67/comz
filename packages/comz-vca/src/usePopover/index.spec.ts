import { defineComponent, h, ref, nextTick } from 'vue'
import { mount, DOMWrapper } from '@vue/test-utils'
import { usePopover } from './index'

describe('usePopover', () => {
  it('should be work.', async () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          const referenceRef = ref(null)
          const popperRef = ref(null)

          const { create } = usePopover(referenceRef, popperRef)

          create()

          return { referenceRef, popperRef }
        },
        render: () => [
          h('div', { ref: 'popperRef' }, 'popper text'),
          h('div', { ref: 'referenceRef' })
        ]
      })
    )

    await nextTick()
    expect(wrapper.find('[data-popper-placement]')).toBeInstanceOf(DOMWrapper)
  })

  it('should be destroyed when component unmounted.', async () => {
    let popper: any

    const wrapper = mount(
      defineComponent({
        setup() {
          const referenceRef = ref(null)
          const popperRef = ref(null)

          const { create, instance } = usePopover(referenceRef, popperRef)

          create()

          popper = instance

          return { referenceRef, popperRef }
        },
        render: () => [
          h('div', { ref: 'popperRef' }, 'popper text'),
          h('div', { ref: 'referenceRef' })
        ]
      })
    )

    await nextTick()
    expect(popper.value).not.toBeNull()

    wrapper.unmount()
    expect(popper.value).toBeNull()
  })

  it('should be destroyed when method invoke.', async () => {
    let destroy: any

    const wrapper = mount(
      defineComponent({
        setup() {
          const referenceRef = ref(null)
          const popperRef = ref(null)

          const { create, destroy: _destroy } = usePopover(
            referenceRef,
            popperRef
          )

          create()

          destroy = _destroy

          return { referenceRef, popperRef }
        },
        render: () => [
          h('div', { ref: 'popperRef' }, 'popper text'),
          h('div', { ref: 'referenceRef' })
        ]
      })
    )

    await nextTick()
    destroy()
    await nextTick()
    expect(() => wrapper.get('[data-popper-placement]')).toThrowError()
  })

  it('should be update options.', async () => {
    let popper: any

    const wrapper = mount(
      defineComponent({
        setup() {
          const referenceRef = ref(null)
          const popperRef = ref(null)

          const { create, instance } = usePopover(referenceRef, popperRef, {
            placement: 'top'
          })

          create()

          popper = instance

          return { referenceRef, popperRef }
        },
        render: () => [
          h('div', { ref: 'popperRef' }, 'popper text'),
          h('div', { ref: 'referenceRef' })
        ]
      })
    )

    await nextTick()
    popper.value.setOptions({ placement: 'bottom' })

    await nextTick()
    const el = wrapper.get('[data-popper-placement="bottom"]')
    expect(el).toBeInstanceOf(DOMWrapper)
  })
})
