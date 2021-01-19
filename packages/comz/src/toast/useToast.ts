import { createVNode, render, nextTick } from 'vue'
import Toast from './toast.vue'

type Container = HTMLElement | null

export const useToast = () => {
  let container: Container = document.createElement('div')

  const vn = createVNode(
    Toast,
    {
      show: false,
      'onUpdate:show': async (state: boolean) => {
        vn.component!.props.show = state

        await nextTick()
        render(null, container!)
        container = null
      }
    },
    {
      default: () => 'okok'
    }
  )

  render(vn, container)

  vn.component!.props.show = true
}
