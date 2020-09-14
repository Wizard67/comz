import { InjectionKey, Ref } from 'vue'

export const key: InjectionKey<
  (key: string, value: Ref<string>) => void
> = Symbol()
