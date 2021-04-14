# Select 选择框

下拉选择框组件。

> 受控组件，需要声明 `modelValue` 属性

## 基础用法

使用 `Select` 组件声明选择框容器，每个项需要使用 `Option` 组件包裹。

> `Option` 组件上的 `value` 属性表示选中该项后的值，`label` 属性表示项被选中后在 `Selcet` 上展示的文本，默认插槽内放置展示内容。

添加 `disabled` 属性可以声明禁用状态。

::: component <Basic/>
<<< ./components/select/basic.vue
:::

## API

### Select 属性

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| modelValue  | any     | -       | 输入值       |
| placeholder | string  | -       | 占位文本     |

### Select 插槽

| Slot    | Description             |
|---------|-------------------------|
| default | 默认插槽，放置 Option 组件 |

### Select 事件

| Event             | Type                    | Description             |
|-------------------|-------------------------|-------------------------|
| update:modelValue | (state: string) => void | 监听 `modelValue` 值变化  |

### Option 属性

| Attribute | Type   | Default | Description        |
|-----------|--------|---------|--------------------|
| value     | any    | -       | 组件被选中时的值      |
| label     | string | -       | 组件被选中时的展示文本 |

### Option 插槽

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |


<script setup>
  import Basic from './basic.vue'
</script>