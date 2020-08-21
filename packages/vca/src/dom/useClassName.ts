import { watchEffect, ComputedRef, ref, Ref } from 'vue'

type Options = {
  separator?: string
}

type UseClassName = (
  name: string,
  condition?: { [state: string]: ComputedRef<boolean> },
  options?: Options
) => Ref<string>

export const useClassName: UseClassName = (
  defalutClassName,
  stateCondition,
  options
) => {

  const defaultSeparator = '--'

  if (
    stateCondition === undefined ||
    Object.keys(stateCondition).length === 0
  ) {
    return ref(defalutClassName)
  }

  const classNameString = ref('')

  watchEffect(() => {
    const classNameList = [ defalutClassName ]

    for (const key in stateCondition) {
      if (stateCondition[key].value) {
        classNameList.push(key)
      }
    }

    classNameString.value = classNameList.join(
      options?.separator ?? defaultSeparator
    )
  })

  return classNameString
}
