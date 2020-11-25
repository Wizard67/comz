# Select 选择框

## 基础用法

::: component <SelectDefault/>
<<< ./components/select/default.vue
:::

## Select 属性

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| modelValue  | any     | -       | 输入值       |
| placeholder | string  | -       | 占位文本     |

## Select 插槽

| Slot    | Description             |
|---------|-------------------------|
| default | 默认插槽，放置 Option 组件 |

## Select 事件

| Event             | Type                    | Description             |
|-------------------|-------------------------|-------------------------|
| update:modelValue | (state: string) => void | 监听 `modelValue` 值变化  |

## Option 属性

| Attribute | Type   | Default | Description        |
|-----------|--------|---------|--------------------|
| value     | any    | -       | 组件被选中时的值      |
| label     | string | -       | 组件被选中时的展示文本 |

## Option 插槽

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

