# Checkbox 多选框

## 默认样式

::: component <CheckboxDefault/>
<<< ./components/checkbox/default.vue
:::

## 禁用状态

::: component <CheckboxDisabled/>
<<< ./components/checkbox/disabled.vue
:::

## 属性 Attribute

| Attribute   | Type     | Default | Description |
|-------------|----------|---------|-------------|
| value       | string   | ``      | 单选框的值    |
| modelValue  | string[] | `[]`    | 当前选中的值  |
| disabled    | boolean  | `false` | 是否禁用     |

## 插槽 Slot

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

## 事件 Event

| Event             | Type                    | Description            |
|-------------------|-------------------------|------------------------|
| update:modelValue | (state: string) => void | 监听 `modelValue` 值变化 |
