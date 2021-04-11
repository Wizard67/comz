import { ref, nextTick } from 'vue'
import { useCssShorthand } from '../useCssShorthand'

describe('useCssShorthand', () => {
  it('should be work.', () => {
    expect(useCssShorthand(ref('first second'))).toEqual([
      ref('first'),
      ref('second')
    ])

    expect(useCssShorthand(ref('first'))).toEqual([ref('first'), ref('first')])
  })

  it('should recalculate when value change.', async () => {
    const prop = ref('first second')

    const [first, second] = useCssShorthand(prop)

    expect(first.value).toBe('first')
    expect(second.value).toBe('second')

    prop.value = 'first'
    await nextTick()
    expect(first.value).toBe('first')
    expect(second.value).toBe('first')
  })
})
