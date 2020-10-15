import { h, render, ref, nextTick, Ref } from 'vue'
import { useEvent } from './index'

describe('useEvent', () => {

  const genElement = () => {
    const button: HTMLElement = document.createElement('button')
    const event: Event = new CustomEvent('click', {
      detail: null,
      bubbles: false,
      cancelable: true
    })

    const dispatch = () => button.dispatchEvent(event)

    return {
      element: button,
      dispatch
    }
  }

  const genApp = (setup: () => void) => {
    return {
      setup,
      render: () => h('div')
    }
  }

  it('should work.', () => {
    const { element, dispatch } = genElement()
    const time = ref(0)

    const App = genApp(() => {
      useEvent(element, 'click', () => time.value++)
    })
    render(h(App), document.createElement('div'))

    expect(time.value).toBe(0)
    dispatch()
    expect(time.value).toBe(1)
  })

  it('should accept ref element.', () => {
    const { element, dispatch } = genElement()

    const elementRef = ref(element)
    const handler = jest.fn()

    const App = genApp(() => {
      useEvent(elementRef, 'click', handler)
    })
    render(h(App), document.createElement('div'))

    dispatch()
    expect(handler).toHaveBeenCalled()
  })

  it('should work with options.', () => {
    const { element, dispatch } = genElement()
    const handler = jest.fn()

    const App = genApp(() => {
      useEvent(element, 'click', handler, { once: true })
    })
    render(h(App), document.createElement('div'))

    dispatch()
    dispatch()
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('should remove event listener if element ref changes.', async () => {
    const { element: el1, dispatch: dispatch1 } = genElement()
    const { element: el2, dispatch: dispatch2 } = genElement()

    const elmentRef: Ref<HTMLElement | null> = ref(el1)
    const time = ref(0)

    const App = genApp(() => {
      useEvent(elmentRef, 'click', () => time.value++)
    })
    render(h(App), document.createElement('div'))

    dispatch1()
    expect(time.value).toBe(1)

    elmentRef.value = el2
    await nextTick()
    dispatch1()
    expect(time.value).toBe(1)
    dispatch2()
    expect(time.value).toBe(2)

    elmentRef.value = null
    await nextTick()
    dispatch1()
    dispatch2()
    expect(time.value).toBe(2)
  })

  it('should remove event listener when component destroyed.', async () => {
    const { element, dispatch } = genElement()

    const root = document.createElement('div')
    const handler = jest.fn()

    const App = genApp(() => {
      useEvent(element, 'click', handler)
    })
    render(h(App), root)

    dispatch()
    expect(handler).toBeCalledTimes(1)
    
    render(null, root)
    await nextTick()
    dispatch()
    expect(handler).toBeCalledTimes(1)
  })

  it('should remove event listener when stop function invoke.', () => {
    const { element, dispatch } = genElement()

    let stop: () => void
    const handler = jest.fn()

    const App = genApp(() => {
      stop = useEvent(element, 'click', handler)
    })
    render(h(App), document.createElement('div'))

    dispatch()
    expect(handler).toBeCalledTimes(1)

    stop!()
    dispatch()
    expect(handler).toBeCalledTimes(1)
  })

})
