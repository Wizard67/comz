import { isRef } from 'vue'
import { useToggle } from './index'

describe('useToggle', () => {
  it('should works.', () => {
    const { state, toggle } = useToggle()

    expect(isRef(state)).toBe(true)

    expect(state.value).toBe(false)

    toggle()
    expect(state.value).toBe(true)
  })

  it('default state should to be true.', () => {
    const { state } = useToggle(true)

    expect(state.value).toBe(true)
  })

  it('state can be toggled by function.', () => {
    const { state, toggle } = useToggle()

    toggle(false)
    expect(state.value).toBe(false)

    toggle(true)
    expect(state.value).toBe(true)
  })
})
