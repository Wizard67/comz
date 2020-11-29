import { ref, isRef, watchEffect, Ref, computed } from 'vue'

type B = (block: string) => string
type E = (element: string) => string
type M = (modifier: string) => string

interface BEM {
  b: B
  e: E
  m: M
}

type Condition = (content: BEM) => {
  [key: string]: boolean | Ref<boolean>
}

interface Configs {
  blockPrefix?: boolean
}

type UseBEM = (condition: Condition, configs?: Configs) => Ref<string>

const BLOCK_PRE = 'b:'
const ELEMENT_PRE = 'e:'
const MODIFIERS_PRE = 'm:'

export const useBEM: UseBEM = (conditions, configs) => {

  const scopedBlock: Ref<string> = ref('')
  const scopedElement: Ref<string> = ref('')
  const scopedModifiers: Ref<Set<string>> = ref(new Set())

  const b: B = block => `${BLOCK_PRE}${block}`
  const e: E = element => `${ELEMENT_PRE}${element}`
  const m: M = modifier => `${MODIFIERS_PRE}${modifier}`

  const conditionState = conditions({ b, e, m })

  const resetScopedValue = () => {
    scopedBlock.value = ''
    scopedElement.value = ''
    scopedModifiers.value.clear()
  }

  const BEMClassName = computed(() => {
    const blockElement = scopedElement.value
                         ? [scopedBlock.value, scopedElement.value].join('__')
                         : scopedBlock.value

    const modifiers: string[] = []

    Array.from(scopedModifiers.value).forEach(key => {
      modifiers.push([blockElement, key].join('--'))
    })

    return configs?.blockPrefix ?? true
           ? [blockElement, ...modifiers].join(' ')
           : modifiers.join(' ')
  })

  watchEffect(cleanUp => {
    for (const key in conditionState) {
      const isTruthy = isRef(conditionState[key])
                       ? ((conditionState[key] as Ref).value) as boolean
                       : conditionState[key] as boolean

      if (isTruthy) {
        switch (key.slice(0, 2)) {
          case BLOCK_PRE:
            scopedBlock.value = key.slice(2)
            break
          case ELEMENT_PRE:
            scopedElement.value = key.slice(2)
            break
          case MODIFIERS_PRE:
            scopedModifiers.value.add(key.slice(2))
            break
        }
      }
    }

    cleanUp(resetScopedValue)
  })

  return BEMClassName
}
