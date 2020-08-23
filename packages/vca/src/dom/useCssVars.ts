import {
  reactive,
  computed,
  useCssVars as useNativeCssVars,
  ComputedRef
} from 'vue'

type Value = number | string | undefined

type TransValueToString = (value: Value, scoped: boolean) => string

type UseCssVars = (
  vars: {
    [property: string]: ComputedRef<Value>
  },
  options?: {
    scoped?: boolean
  }
) => void

const InvalidValue = 'invalid'

const transValueToString: TransValueToString = (value, scoped) => {
  switch (typeof value) {
    case 'undefined':
      return scoped ? InvalidValue: ''
    case 'number':
      return String(value)
    case 'string':
      return value || (scoped ? InvalidValue: '')
  }
}

export const useCssVars: UseCssVars = (vars, options) => {
  const varTrans = reactive({})

  for (const property in vars) {
    varTrans[property] = computed(() =>
      transValueToString(
        vars[property].value,
        options?.scoped || false
      )
    )
  }

  useNativeCssVars(() => varTrans)
}
