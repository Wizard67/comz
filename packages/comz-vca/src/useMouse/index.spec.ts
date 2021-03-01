import type { MouseState } from './index'
import { defineComponent, h, ref, onMounted, nextTick, isReactive } from 'vue'
import { mount } from '@vue/test-utils'
import { useMouse } from './index'

type Position = {
  pageX: number
  pageY: number
}

const mouseMoveEvent = (position: Position) => {
  const event = new Event('mousemove')
  ;(event as any).pageX = position.pageX
  ;(event as any).pageY = position.pageY

  return event
}

describe('useMouse', () => {
  beforeAll(() => {
    document.body.getBoundingClientRect = () =>
      ({ width: 100, height: 100, left: 0, top: 0 } as DOMRect)
  })

  it('should be work.', () => {
    let mouseState: MouseState | null = null

    mount(
      defineComponent({
        setup() {
          const { state } = useMouse()
          mouseState = state
        },
        render: () => h('div')
      })
    )

    expect(isReactive(mouseState)).toBe(true)
  })

  it('should be change when mouse move.', async () => {
    mount(
      defineComponent({
        setup() {
          const { state } = useMouse()

          onMounted(async () => {
            await nextTick()

            document.dispatchEvent(mouseMoveEvent({ pageX: 10, pageY: 10 }))
            expect(state.x).toBe(10)
            expect(state.y).toBe(10)

            document.dispatchEvent(mouseMoveEvent({ pageX: 20, pageY: 30 }))
            expect(state.x).toBe(20)
            expect(state.y).toBe(30)
          })
        },
        render: () => h('div')
      })
    )
  })

  it('should be calculate inner state.', async () => {
    mount(
      defineComponent({
        setup() {
          const { state } = useMouse()

          onMounted(async () => {
            await nextTick()

            document.dispatchEvent(mouseMoveEvent({ pageX: 10, pageY: 10 }))
            expect(state.inner).toBe(true)

            document.dispatchEvent(mouseMoveEvent({ pageX: 200, pageY: 200 }))
            expect(state.inner).toBe(false)
          })
        },
        render: () => h('div')
      })
    )
  })

  it('should be recalculate when target change.', async () => {
    mount(
      defineComponent({
        setup() {
          const targetRef = ref<HTMLElement | null>(null)

          const { state } = useMouse(targetRef)

          onMounted(async () => {
            await nextTick()
            expect(state.target.width).toBe(0)
            expect(state.target.height).toBe(0)

            targetRef.value = document.body
            await nextTick()
            document.dispatchEvent(mouseMoveEvent({ pageX: 0, pageY: 0 }))
            expect(state.target.width).toBe(100)
            expect(state.target.height).toBe(100)
            expect(state.inner).toBe(true)
          })
        },
        render: () => h('div')
      })
    )
  })

  it('should be recalculate when target rect change.', async () => {
    mount(
      defineComponent({
        setup() {
          const { state } = useMouse()

          onMounted(async () => {
            await nextTick()
            document.dispatchEvent(mouseMoveEvent({ pageX: 200, pageY: 200 }))

            await nextTick()
            expect(state.target.width).toBe(100)
            expect(state.target.height).toBe(100)

            document.body.style.height = `200px` // trigger MutationObserver
            document.body.getBoundingClientRect = () =>
              ({ width: 200, height: 200, left: 0, top: 0 } as DOMRect)
            await nextTick()
            expect(state.target.width).toBe(200)
            expect(state.target.height).toBe(200)
          })
        },
        render: () => h('div')
      })
    )
  })

  it('should be remove all event listener after `stop` function invoke.', async () => {
    mount(
      defineComponent({
        setup() {
          const { state, stop } = useMouse()

          onMounted(async () => {
            await nextTick()

            stop()
            await nextTick()
            document.dispatchEvent(mouseMoveEvent({ pageX: 10, pageY: 10 }))
            expect(state.x).not.toBe(10)
          })
        },
        render: () => h('div')
      })
    )
  })

  it('hooks should be work.', async () => {
    mount(
      defineComponent({
        setup() {
          const { state } = useMouse(document.body, {
            onBefore: (rect) => {
              expect(rect).toStrictEqual(expect.any(Object))
              return {
                pageX: 1,
                pageY: 2
              }
            },
            onUpdate: (event) => ({
              pageX: event.pageX + 10,
              pageY: event.pageY + 10
            })
          })

          onMounted(async () => {
            await nextTick()
            expect(state.x).toBe(11)
            expect(state.y).toBe(12)

            document.dispatchEvent(mouseMoveEvent({ pageX: 10, pageY: 10 }))
            expect(state.x).toBe(20)
            expect(state.y).toBe(20)
          })
        },
        render: () => h('div')
      })
    )
  })
})
