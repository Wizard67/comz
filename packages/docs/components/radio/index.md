# Radio 单选框

## 默认样式

::: component <RadioDefault/>
<<< ./components/radio/default.vue
:::

## 禁用状态

::: component <RadioDisabled/>
<<< ./components/radio/disabled.vue
:::

## 属性 Attribute

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| value       | string  | `''`    | 单选框的值    |
| modelValue  | string  | `''`    | 当前值       |
| disabled    | boolean | `false` | 是否禁用     |

## 插槽 Slot

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

## 事件 Event

| Event             | Type                    | Description           |
|-------------------|-------------------------|-----------------------|
| update:modelValue | (state: string) => void | 监听`modelValue`值变化  |
