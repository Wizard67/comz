import { ref, unref, onUnmounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'

type ReactiveValue<T = any> = Ref<T> | ComputedRef<T>

type MaybeReactiveValue<T> = ReactiveValue<T> | T

const NOOP = () => {}

export function useTimeout(callback: () => void, ms: number = 0) {
  if (typeof callback === 'function') {
    const timer = setTimeout(callback, ms)
    onUnmounted(() => clearTimeout(timer))
  }
}

export function useToggle(
  initialState: boolean,
  duration: MaybeReactiveValue<number>
) {
  const state = ref(initialState)

  let interval = 0
  let timer: NodeJS.Timeout

  function toggle() {
    const ms = unref(duration)
    const elapsed = Date.now() - interval

    if (ms <= 0 || elapsed > ms) {
      state.value = true
      interval = Date.now()

      if (ms <= 0) {
        state.value = false
      } else {
        timer = setTimeout(() => (state.value = false), ms)
      }
    } else {
      clearTimeout(timer)
    }
  }

  onUnmounted(() => clearTimeout(timer))

  return {
    state,
    toggle
  }
}

type ClickConfigs = {
  disabled?: MaybeReactiveValue<boolean>
  continuous?: MaybeReactiveValue<boolean>
  click?: (event: MouseEvent) => void
}

export function useClick(configs: ClickConfigs) {
  const { disabled = false, click = NOOP } = configs

  const onClick = (event: MouseEvent) => {
    if (!unref(disabled)) {
      click(event)
    }
  }

  return onClick
}
