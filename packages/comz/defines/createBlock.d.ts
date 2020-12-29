import { ComponentOptions, ComponentPublicInstance } from '@vue/runtime-core'

interface ClassComponent {
  new (...args: any[]): ComponentPublicInstance<any, any, any, any, any>
  __vccOpts: ComponentOptions
}

/**
 * fix type error when building Teleport using the <script setup lang="ts">
 * 
 * @see https://github.com/vuejs/vue-next/issues/2855
 * 
 */
declare module '@vue/runtime-core' {
  export function createBlock(
    type: VNodeTypes | ClassComponent | typeof Teleport | typeof Suspense,
    props?: Record<string, any> | null,
    children?: any,
    patchFlag?: number,
    dynamicProps?: string[]
  ): VNode
}
