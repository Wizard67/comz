import type { Ref } from 'vue'
import { reactive, computed, unref, watchEffect } from 'vue'

type NodeType = 'block' | 'element' | 'modifier'

type InputValue<T> = T | undefined | Ref<T> | Ref<undefined>

interface BEMNode {
  type: NodeType,
  key: InputValue<string>,
  value: InputValue<boolean>
}

type BEMNodeList = Array<BEMNode>

type Condition = (content: {
  [k in 'b' | 'e' | 'm']: (key: InputValue<string>) => Exclude<keyof any, number>
}) => {
  [key: string]: InputValue<boolean>
}

const INVALID_KEY = Symbol()

const SEPARATOR_ELEMENT = '__'
const SEPARATOR_MODIFIER = '--'

function markNode (type: NodeType, target: BEMNodeList, key: InputValue<string>) {
  target.push({
    type: type,
    key: key,
    value: undefined
  })

  const k = unref(key)
  return k !== undefined ? k : INVALID_KEY
}

function transNodes2ClassName (nodes: BEMNodeList): string {
  function filter(target: BEMNodeList, type: NodeType) {
    return target.filter(node =>
      node.type === type &&
      unref(node.key) !== undefined &&
      unref(node.value) === true
    )
  }

  const rawBlock = filter(nodes, 'block').pop()
  const rawElement = filter(nodes, 'element').pop()
  const rawModifiers = filter(nodes, 'modifier')

  if (rawBlock?.key === undefined) {
    console.warn('useBEN need to declare a block element with b().')
  }

  const component = rawElement?.key
                    ? [rawBlock?.key, rawElement.key].join(SEPARATOR_ELEMENT)
                    : rawBlock?.key

  const modifiers = Array.from(rawModifiers).map(modifier => {
    return [component, unref(modifier.key)].join(SEPARATOR_MODIFIER)
  })

  return [component, ...modifiers].join(' ')
}

export function useBEM (condition: Condition): Ref<string> {
  const nodeList: BEMNodeList = reactive([])

  function b (key: InputValue<string>) {
    return markNode('block', nodeList, key)
  }

  function e (key: InputValue<string>) {
    return markNode('element', nodeList, key)
  }

  function m (key: InputValue<string>) {
    return markNode('modifier', nodeList, key)
  }

  watchEffect(() => {
    const conditionState = condition({ b, e, m })
    const keys = Object.keys(conditionState)

    keys.map(key => {
      const index = nodeList.findIndex(node => node.key === key)
      nodeList[index]['value'] = conditionState[key]
    })
  })

  const BEMClassName = computed(() => transNodes2ClassName(nodeList))

  return BEMClassName
}
