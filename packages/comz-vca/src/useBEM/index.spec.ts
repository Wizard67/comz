import { ref, nextTick } from 'vue'
import { useBEM } from './index'

describe('useBEM', () => {

  it('should return a BEM style class name.', () => {
    const className = useBEM(({b, e, m}) => ({
      [b('card')]: true,
      [e('title')]: true,
      [m('disabled')]: ref(true)
    }))

    expect(className.value).toBe('card__title card__title--disabled')
  })

  it('test `block` with `modifier`.', () => {
    const className = useBEM(({b, e, m}) => ({
      [b('card')]: true,
      [m('disabled')]: ref(true)
    }))

    expect(className.value).toBe('card card--disabled')
  })

  it('test `block` only.', () => {
    const className = useBEM(({b, e, m}) => ({
      [b('card')]: true
    }))

    expect(className.value).toBe('card')
  })

  it('should update when reactive value changed.', async () => {
    const disabled = ref(true)

    const className = useBEM(({b, e, m}) => ({
      [b('card')]: true,
      [e('title')]: true,
      [m('disabled')]: disabled
    }))

    await nextTick()

    disabled.value = false
    await nextTick()
    expect(className.value).toBe('card__title')
  })

})
