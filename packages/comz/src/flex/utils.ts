import { watch } from "vue"
import type { Ref } from 'vue'

const setStyleVar = (element: HTMLElement, gap: Ref<string> ) => {
  Array.from(element?.children ?? []).map((item) => {
    if (Array.from(item?.classList ?? []).includes('cflex')) {
      (item as HTMLLIElement).style.setProperty(`--fgp-has-polyfil_gap-item`, gap.value)
    }
  })
}

export const useFlexPolyfillGapItem = (
  targetRef: Ref<HTMLElement | null>,
  value: Ref<string>
) => {

  watch(targetRef, (element, _, cleanUp) => {
    if (!element) return

    setStyleVar(element, value)

    const observer = new MutationObserver(() => {
      setStyleVar(element, value)
    })
    observer.observe(element, { attributes: true })

    cleanUp(() => observer.disconnect())
  }, { flush: 'post' })
}
