import { InjectionKey, Ref } from 'vue'

export const key: InjectionKey<Ref<boolean>> = Symbol()

// TODO:
export const useBorder = (value: boolean) => {
}