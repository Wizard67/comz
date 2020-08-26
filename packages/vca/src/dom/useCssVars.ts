import {
  computed, reactive,
  Ref, ComputedRef, UnwrapRef
} from 'vue'

type Value = number | string | undefined

type TransValueToString = (value: Value, scoped: boolean) => string

type UseCssVars = (
  vars: { [property: string]: ComputedRef<Value> | Ref<Value> },
  options?: {
    scoped?: boolean
  }
) => UnwrapRef<Record<string, string>>

const INVALID_VALUE = 'initial'

const transValueToString: TransValueToString = (value, scoped) => {
  switch (typeof value) {
    case 'undefined':
      return scoped ? INVALID_VALUE : ''
    case 'number':
      return String(value)
    case 'string':
      return value || (scoped ? INVALID_VALUE : '')
    default:
      throw Error(`useCssVars expected undefined, number or string, but get ${typeof value}`)
  }
}

export const useCssVars: UseCssVars = (vars, options) => {
  const varTrans = reactive({})

  for (const property in vars) {
    varTrans[property] = computed(() => {
      return transValueToString(
        vars[property].value,
        options?.scoped || false
      )}
    )
  }

  return varTrans
}
