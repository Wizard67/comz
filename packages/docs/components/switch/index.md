# Switch 开关

开关组件，用于在两种状态之间切换。

> 受控组件，需要声明 `modelValue` 属性

## 基础用法

添加 `disabeld` 属性可以声明禁用状态。

::: component <SwitchBasic/>
<<< ./components/switch/basic.vue
:::

## 插槽

使用 `prepend` 和 `append` 插槽可以在开关前后插入内容。

::: component <SwitchSlots/>
<<< ./components/switch/slots.vue
:::

## API

### 属性

| Attribute   | Type      | Default | Description |
|-------------|-----------|---------|-------------|
| modelValue  | `boolean` | `false` | 当前状态     |
| disabled    | `boolean` | `false` | 是否禁用     |

### 事件

| Event             | Type                      | Description            |
|-------------------|---------------------------|------------------------|
| update:modelValue | `(state: boolean) => void` | 监听 `modelValue` 值变化 |

### 插槽

| Slot    | Description       |
|---------|------------------ |
| prepend | 放置在开关之前的插槽 |
| append  | 放置在开关之后的插槽 |