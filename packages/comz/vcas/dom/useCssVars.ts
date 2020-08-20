import {
  reactive,
  computed,
  useCssVars as useNativeCssVars,
  ComputedRef
} from 'vue'

type Value = number | string | undefined

type TransValueToString = (value: Value) => string

type UseCssVars = (vars: { [property: string]: ComputedRef<Value> }) => void

const transValueToString: TransValueToString = value => {
  switch (typeof value) {
    case 'undefined':
      return ''
    case 'number':
      return String(value)
    case 'string':
      return value
  }
}

export const useCssVars: UseCssVars = vars => {
  const varTrans = reactive({})

  for (const property in vars) {
    varTrans[property] = computed(() => 
      transValueToString(vars[property].value)
    )
  }

  useNativeCssVars(() => varTrans)
}
