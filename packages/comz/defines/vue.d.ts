declare module '*.vue' {
  import { Component, ComponentPublicInstance } from 'vue'

  const component: Component & {
    new (): ComponentPublicInstance<any>
  }

  export default component
}
