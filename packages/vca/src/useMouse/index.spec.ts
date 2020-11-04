import { defineComponent, h, ref, nextTick, isReactive } from 'vue'
import { mount } from '@vue/test-utils'
import { useMouse } from './index'

const mouseMoveEvent = (position) => {
  const event = new Event('mousemove')
  ;(event as any).pageX = position.pageX
  ;(event as any).pageY = position.pageY

  return event
}

describe('useMouse', () => {

  beforeAll(() => {
    document.body.getBoundingClientRect = () => (
      { width: 100, height: 100, left: 0, top: 0 } as DOMRect
    )
  })

  it('should be work.', () => {
    let mouseState = null

    mount(defineComponent({
      setup() {
        const { state } = useMouse()
        mouseState = state
      },
      render: () => h('div')
    }))

    expect(isReactive(mouseState)).toBe(true)
  })

  it('should be change when mouse move.', async () => {
    let mouseState = null

    mount(defineComponent({
      setup() {
        const { state } = useMouse()
        mouseState = state
      },
      render: () => h('div')
    }))

    await nextTick()

    document.dispatchEvent(mouseMoveEvent({ pageX: 10, pageY: 10 }))
    expect(mouseState.x).toBe(10)
    expect(mouseState.y).toBe(10)

    document.dispatchEvent(mouseMoveEvent({ pageX: 20, pageY: 30 }))
    expect(mouseState.x).toBe(20)
    expect(mouseState.y).toBe(30)
  })

  it('should be calculate inner state.', async () => {
    let mouseState = null

    mount(defineComponent({
      setup() {
        const { state } = useMouse()
        mouseState = state
      },
      render: () => h('div')
    }))

    await nextTick()

    document.dispatchEvent(mouseMoveEvent({ pageX: 10, pageY: 10 }))
    expect(mouseState.inner).toBe(true)

    document.dispatchEvent(mouseMoveEvent({ pageX: 200, pageY: 200 }))
    expect(mouseState.inner).toBe(false)
  })

  it('should be recalculate when target change.', async () => {
    let mouseState = null
    const targetRef = ref(null)

    mount(defineComponent({
      setup() {
        const { state } = useMouse(targetRef)
        mouseState = state
      },
      render: () => h('div')
    }))

    await nextTick()
    expect(mouseState.target.width).toBe(0)
    expect(mouseState.target.height).toBe(0)

    targetRef.value = document.body
    await nextTick()
    document.dispatchEvent(mouseMoveEvent({ pageX: 0, pageY: 0 }))
    expect(mouseState.target.width).toBe(100)
    expect(mouseState.target.height).toBe(100)
    expect(mouseState.inner).toBe(true)
  })

  it('should be recalculate when target rect change.', async () => {
    let mouseState = null

    mount(defineComponent({
      setup() {
        const { state } = useMouse()
        mouseState = state
      },
      render: () => h('div')
    }))

    await nextTick()

    document.dispatchEvent(mouseMoveEvent({ pageX: 200, pageY: 200 }))
    await nextTick()
    expect(mouseState.target.width).toBe(100)
    expect(mouseState.target.height).toBe(100)

    document.body.style.height = `200px` // trigger MutationObserver
    document.body.getBoundingClientRect = () => ({ width: 200, height: 200, left: 0, top: 0 } as DOMRect)
    await nextTick()
    expect(mouseState.target.width).toBe(200)
    expect(mouseState.target.height).toBe(200)
  })

  it('should be remove all event listener after `stop` function invoke.', async () => {
    let mouseState = null
    let stopHandle = null

    mount(defineComponent({
      setup() {
        const { state, stop } = useMouse()
        mouseState = state
        stopHandle = stop
      },
      render: () => h('div')
    }))

    await nextTick()

    stopHandle()
    await nextTick()
    document.dispatchEvent(mouseMoveEvent({ pageX: 10, pageY: 10 }))
    expect(mouseState.x).not.toBe(10)
  })

  it('hooks should be work.', async () => {
    let mouseState = null

    mount(defineComponent({
      setup() {
        const { state } = useMouse(document.body, {
          onBefore: () => ({
            pageX: 1,
            pageY: 2
          }),
          onUpdate: (event) => ({
            pageX: event.pageX + 10,
            pageY: event.pageY + 10
          })
        })
        mouseState = state
      },
      render: () => h('div')
    }))

    await nextTick()
    expect(mouseState.x).toBe(11)
    expect(mouseState.y).toBe(12)

    document.dispatchEvent(mouseMoveEvent({ pageX: 10, pageY: 10 }))
    expect(mouseState.x).toBe(20)
    expect(mouseState.y).toBe(20)
  })

})
