import type { VNode } from 'vue'
import { Comment, Fragment } from 'vue'

function findVNodes (target: VNode[], arr: VNode[]) {
  target.map(vn => {
    if (vn.type === Comment) return

    vn.type !== Fragment
    ? arr.push(vn)
    : findVNodes(vn.children as VNode[], arr)
  })
}

export function getVnodes (vnodes: VNode[]) {
  const arr: VNode[] = []

  findVNodes(vnodes, arr)

  return arr
}
