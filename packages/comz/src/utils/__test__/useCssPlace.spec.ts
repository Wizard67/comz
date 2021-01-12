import { ref, nextTick } from 'vue'
import { useCssPlace } from '../useCssPlace'

describe('useCssPlace', () => {
  it('should be work.', () => {
    expect(useCssPlace(ref('first second'))).toEqual({
      align: ref('first'),
      justify: ref('second')
    })

    expect(useCssPlace(ref('first'))).toEqual({
      align: ref('first'),
      justify: ref('first')
    })
  })

  it('should recalculate when value change.', async () => {
    const prop = ref('first second')

    const { align, justify } = useCssPlace(prop)

    expect(align.value).toBe('first')
    expect(justify.value).toBe('second')

    prop.value = 'first'
    await nextTick()
    expect(align.value).toBe('first')
    expect(justify.value).toBe('first')
  })
})
