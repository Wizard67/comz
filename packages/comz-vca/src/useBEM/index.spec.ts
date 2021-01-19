import { ref, nextTick } from 'vue'
import { mockWarn } from 'jest-mock-warn'
import { useBEM } from './index'

mockWarn()

describe('useBEM', () => {
  it('should return a BEM style class name.', () => {
    expect(
      useBEM(({ b, e, m }) => ({
        [b('block')]: true,
        [e('element')]: true,
        [m('modifier')]: true
      })).value
    ).toBe('block__element block__element--modifier')

    useBEM(({ b, e, m }) => ({
      [e('block')]: true,
      [m('modifier')]: true
    })).value
    expect(
      `useBEN need to declare a block element with b().`
    ).toHaveBeenWarned()

    expect(
      useBEM(({ b, e, m }) => ({
        [b('block')]: true,
        [m('modifier1')]: true,
        [m('modifier2')]: true
      })).value
    ).toBe('block block--modifier1 block--modifier2')

    expect(
      useBEM(({ b, e, m }) => ({
        [b('block')]: true,
        [e('element1')]: true,
        [e('element2')]: true
      })).value
    ).toBe('block__element2')

    expect(
      useBEM(({ b, e, m }) => ({
        [b('block')]: ref(true),
        [e('element')]: ref(true),
        [m('modifier')]: ref(true)
      })).value
    ).toBe('block__element block__element--modifier')

    expect(
      useBEM(({ b, e, m }) => ({
        [b('block')]: ref(true),
        [e('element')]: ref(false),
        [m('modifier1')]: ref(undefined),
        [m('modifier2')]: undefined
      })).value
    ).toBe('block')
  })

  it('should update when reactive value changed.', async () => {
    const modifier = ref<boolean | undefined>(false)

    const className = useBEM(({ b, e, m }) => ({
      [b('block')]: true,
      [e('element')]: true,
      [m('modifier')]: modifier
    }))

    expect(className.value).toBe('block__element')

    modifier.value = true
    await nextTick()
    expect(className.value).toBe('block__element block__element--modifier')

    modifier.value = undefined
    await nextTick()
    expect(className.value).toBe('block__element')
  })

  it('should work with dynamic key.', async () => {
    const modifier = ref<string | undefined>('modifier')
    const modifierStatue = ref<boolean | undefined>(undefined)

    const className = useBEM(({ b, e, m }) => ({
      [b('block')]: true,
      [e('element')]: true,
      [m(modifier)]: modifierStatue
    }))

    expect(className.value).toBe('block__element')

    modifier.value = 'modifier'
    modifierStatue.value = true
    await nextTick()
    expect(className.value).toBe('block__element block__element--modifier')

    modifier.value = undefined
    modifierStatue.value = true
    await nextTick()
    expect(className.value).toBe('block__element')

    modifier.value = 'modifier1'
    modifierStatue.value = true
    await nextTick()
    expect(className.value).toBe('block__element block__element--modifier1')

    modifier.value = 'modifier'
    modifierStatue.value = undefined
    await nextTick()
    expect(className.value).toBe('block__element')
  })
})
