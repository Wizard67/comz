import { ref, nextTick } from 'vue'
import { useCssVars } from './index'

describe('useCssVars', () => {
  it('should return style object.', () => {
    {
      const cssVar = useCssVars({
        '--var-a': ref('a'),
        '--var-b': ref('b'),
        '--var-c': ref('c')
      })

      expect(cssVar['--var-a']).toBe('a')
      expect(cssVar['--var-b']).toBe('b')
      expect(cssVar['--var-c']).toBe('c')
    }
    {
      const cssVar = useCssVars({
        '--var-a': ref('a'),
        '--var-b': ref(1),
        '--var-c': ref(undefined)
      })

      expect(cssVar['--var-a']).toBe('a')
      expect(cssVar['--var-b']).toBe('1')
      expect(cssVar['--var-c']).toBe('')
    }
    {
      const cssVar = useCssVars({
        '--var-a': undefined
      })

      expect(cssVar['--var-a']).toBe('')
    }
    {
      expect(() => {
        useCssVars({
          '--var-a': true as any
        })['--var-a'] // invoke computed
      }).toThrowError(/useCssVars expected undefined, number or string/)
    }
  })

  it('should update when reactive value changed.', async () => {
    const a = ref('a')
    let b = undefined

    const cssVars = useCssVars({
      '--var-a': a,
      '--var-b': b
    })

    await nextTick()
    expect(cssVars['--var-a']).toBe('a')
    expect(cssVars['--var-b']).toBe('')

    a.value = 'n-a'
    b = 'b'
    await nextTick()
    expect(cssVars['--var-a']).toBe('n-a')
    expect(cssVars['--var-b']).toBe('')
  })
})
