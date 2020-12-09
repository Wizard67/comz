# Input 输入框

用于接收用户键盘输入值。

> 受控组件，需要声明 `modelValue` 属性

## 基础用法

::: component <InputBasic/>
<<< ./components/input/basic.vue
:::

## 输入框状态

可以为组件添加 `disabled`、`readonly` 标签，渲染不同的状态样式。

> `禁用` 和 `只读` 状态下输入框不响应任何事件。

::: component <InputState/>
<<< ./components/input/state.vue
:::

## 插槽

使用 `prepend` 和 `append` 插槽可以在输入框前后插入内容。

::: component <InputSlots/>
<<< ./components/input/slots.vue
:::

## 可清空

为组件添加 `clearable` 属性，在用户输入字符后显示可清空值的按钮。

::: component <InputClearable/>
<<< ./components/input/clearable.vue
:::

## API
### 属性

| Attribute   | Type      | Default | Description |
|-------------|-----------|---------|-------------|
| modelValue  | `string`  | `''`    | 输入值       |
| placeholder | `string`  | `''`    | 占位文本     |
| readonly    | `boolean` | `false` | 是否只读     |
| disabled    | `boolean` | `false` | 是否禁用     |
| clearable   | `boolean` | `false` | 展示清空按钮  |

### 事件

| Event             | Type                      | Description                   |
|-------------------|---------------------------|-------------------------------|
| update:modelValue | `(value: string) => void` | 监听 `modelValue` 值变化        |
| on-focus          | `(value: string) => void` | 监听输入框聚焦状态               |
| on-blur           | `(value: string) => void` | 监听输入框失焦状态               |
| on-clear          | `() => void`              | 监听设置 `clearable` 时的清空行为 |

### 插槽

| Slot    | Description        |
|---------|--------------------|
| prepend | 放置在输入框之前的插槽 |
| append  | 放置在输入框之后的插槽 |