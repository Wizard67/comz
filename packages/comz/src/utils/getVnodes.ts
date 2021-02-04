import type { VNode, Ref } from 'vue'
import { unref } from 'vue'
import { Comment, Fragment } from 'vue'

function findVNodes(target: VNode[], arr: VNode[]) {
  target.map((vn) => {
    if (vn.type === Comment) return

    vn.type !== Fragment
      ? arr.push(vn)
      : findVNodes(vn.children as VNode[], arr)
  })
}

export function getSlotVnodes(vnodes: VNode[]) {
  const arr: VNode[] = []

  findVNodes(vnodes, arr)

  return arr
}

export function getSlotHTMLElement(ref: Ref<HTMLElement | null>) {
  const el = unref(ref)

  return el ? (el instanceof HTMLElement ? el : el['$el']) : null
}
