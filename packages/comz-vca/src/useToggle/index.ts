import { ref, Ref } from 'vue'

export const useToggle: (
  value?: boolean
) => {
  state: Ref<boolean>
  toggle: (value?: boolean) => void
} = (defaultValue: boolean = false) => {
  const state = ref(defaultValue)

  const toggle = (value = !state.value) => {
    state.value = value
  }

  return {
    state,
    toggle
  }
}
