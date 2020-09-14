import {
  ref, watch, onMounted,
  ComponentPublicInstance
} from 'vue'

type SetMsg = (key: string, msg: string) => void

type FormInstance = ComponentPublicInstance<{}, {
  setMsg: SetMsg
}>

export const useForm = (rules: any) => {
  const formRef = ref<FormInstance | null>(null)

  let setMsg: null | SetMsg = null

  for (const key in rules) {
    const rule = rules[key]

    const track = rule.track
    const validate = rule.validate

    watch(() => track.value, (value) => {
      setMsg?.(key, validate(value) ?? '')
    }, { deep: true })
  }

  onMounted(() => {
    setMsg = formRef.value?.setMsg!
  })

  return {
    formRef
  }
}
