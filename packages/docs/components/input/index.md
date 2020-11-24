# Input 输入框

## 基础样式

::: component <InputDefault/>
<<< ./components/input/default.vue
:::

## 禁用状态

::: component <InputDisabled/>
<<< ./components/input/disabled.vue
:::

## 只读状态

::: component <InputReadonly/>
<<< ./components/input/readonly.vue
:::

## 可清空

::: component <InputClearable/>
<<< ./components/input/clearable.vue
:::

## 属性 Attribute

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| modelValue  | string  | `''`    | 输入值       |
| placeholder | string  | `''`    | 占位文本     |
| width       | string  | `''`    | 组件宽度     |
| readonly    | boolean | `false` | 是否只读     |
| disabled    | boolean | `false` | 是否禁用     |
| clearable   | boolean | `false` | 展示清空按钮  |

## 事件 Event

| Event             | Type                    | Description             |
|-------------------|-------------------------|-------------------------|
| update:modelValue | (state: string) => void | 监听 `modelValue` 值变化  |
