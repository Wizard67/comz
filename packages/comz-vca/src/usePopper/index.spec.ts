import { defineComponent, h, ref, nextTick } from 'vue'
import { mount, DOMWrapper } from '@vue/test-utils'
import { usePopper } from './index'

describe('usePopper', () => {

  it('should be work.', async () => {
    const wrapper = mount(defineComponent({
      setup() {
        const referenceRef = ref(null)
        const popperRef = ref(null)

        usePopper(referenceRef, popperRef)

        return { referenceRef, popperRef }
      },
      render: () => [
        h('div', { ref: 'popperRef' }, 'popper text'),
        h('div', { ref: 'referenceRef' })
      ]
    }))

    await nextTick()
    expect(wrapper.find('[data-popper-placement]')).toBeInstanceOf(DOMWrapper)
  })

  it('should be destroyed when component unmounted.', async () => {
    let popper = null

    const wrapper = mount(defineComponent({
      setup() {
        const referenceRef = ref(null)
        const popperRef = ref(null)

        popper = usePopper(referenceRef, popperRef)

        return { referenceRef, popperRef }
      },
      render: () => [
        h('div', { ref: 'popperRef' }, 'popper text'),
        h('div', { ref: 'referenceRef' })
      ]
    }))

    await nextTick()
    expect(popper.value).not.toBeNull()

    wrapper.unmount()
    expect(popper.value).toBeNull()
  })

  it('should be destroyed when reference changed.', async () => {
    let popper = null
    const referenceRef = ref(null)

    mount(defineComponent({
      setup() {
        const popperRef = ref(null)

        popper = usePopper(referenceRef, popperRef)

        return { referenceRef, popperRef }
      },
      render: () => [
        h('div', { ref: 'popperRef' }, 'popper text'),
        h('div', { ref: 'referenceRef' })
      ]
    }))

    await nextTick()
    expect(referenceRef).not.toBeNull()

    referenceRef.value = null
    await nextTick()
    expect(popper.value).toBeNull()
  })

  it('should be destroyed when method invoke.', async () => {
    let popper = null

    const wrapper = mount(defineComponent({
      setup() {
        const referenceRef = ref(null)
        const popperRef = ref(null)

        popper = usePopper(referenceRef, popperRef)

        return { referenceRef, popperRef }
      },
      render: () => [
        h('div', { ref: 'popperRef' }, 'popper text'),
        h('div', { ref: 'referenceRef' })
      ]
    }))

    await nextTick()
    popper.value.destroy()
    expect(() => wrapper.get('[data-popper-placement]')).toThrowError()
  })

  it('should be update options.', async () => {
    let popper = null

    const wrapper = mount(defineComponent({
      setup() {
        const referenceRef = ref(null)
        const popperRef = ref(null)

        popper = usePopper(referenceRef, popperRef)

        return { referenceRef, popperRef }
      },
      render: () => [
        h('div', { ref: 'popperRef' }, 'popper text'),
        h('div', { ref: 'referenceRef' })
      ]
    }))

    await nextTick()
    popper.value.setOptions({ placement: 'top' })
    await nextTick()
    expect(wrapper.get('[data-popper-placement="top"]')).toBeInstanceOf(DOMWrapper)
  })
})
