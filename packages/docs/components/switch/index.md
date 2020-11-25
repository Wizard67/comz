# Switch 开关

## 基础用法

::: component <SwitchDefault/>
<<< ./components/switch/default.vue
:::

## 禁用状态

::: component <SwitchDisabled/>
<<< ./components/switch/disabled.vue
:::

## 属性 Attribute

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| modelValue  | boolean | `false` | 当前状态     |
| disabled    | boolean | `false` | 是否禁用     |

## 事件 Event

| Event             | Type                    | Description            |
|-------------------|-------------------------|------------------------|
| update:modelValue | (state: string) => void | 监听 `modelValue` 值变化 |