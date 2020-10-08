import { InjectionKey, Ref } from 'vue'

export const LABEL_WIDTH: InjectionKey<Ref<string | undefined>> = Symbol()

export const SET_MSG_METHOD: InjectionKey<
  (key: string, value: Ref<string>) => void
> = Symbol()
