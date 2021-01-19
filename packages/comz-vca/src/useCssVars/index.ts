import { Ref, ComputedRef } from 'vue'
import { unref, reactive, computed } from 'vue'

type CSSValue = number | string | undefined

type Condition = {
  [property: string]: Ref<CSSValue> | undefined
}

const transValue2String = (value: unknown) => {
  switch (typeof value) {
    case 'undefined':
      return ''
    case 'number':
      return String(value)
    case 'string':
      return value
    default:
      throw Error(
        `useCssVars expected undefined, number or string, but get ${typeof value}`
      )
  }
}

export function useCssVars(
  condition: Condition
): Record<string, ComputedRef<string>> {
  const varsObj = reactive({})

  for (const key in condition) {
    varsObj[key] = computed(() => transValue2String(unref(condition[key])))
  }

  return varsObj
}
