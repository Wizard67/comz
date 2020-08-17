import { InjectionKey, Ref } from 'vue'

export const key: InjectionKey<(value: any) => void> = Symbol()
export const value: InjectionKey<Ref<any>> = Symbol()