# Checkbox 复选框

复选框组件。用于在选项中选中零个或多个值。

> 受控组件，需要声明 `modelValue` 属性

## 基础用法

使用 `value` 属性定义选中时的值，组件的默认插槽放置展示内容。

添加 `disabled` 属性，声明组件为禁用状态。

::: component <Basic/>
<<< ./components/checkbox/basic.vue
:::

## 值类型

`Radio` 组件的 `value` 属性可以传递 `string`、`number`、`Array`、`boolean`、`object` 类型的值。

> `value` 在组件内部会使用 `JSON.stringify` 序列化成 `JSON` 格式再进行处理。需要注意不能被序列化的属性值将会被抛弃，不能保证正确性，所以请避免使用其他类型的值。

::: component <Value/>
<<< ./components/checkbox/value.vue
:::

## 展示内容

`Checkbox` 的默认插槽可以放置任意内容。

::: component <Label/>
<<< ./components/checkbox/label.vue
:::

## API

### 属性

| Attribute   | Type       | Default | Description |
|-------------|------------|---------|-------------|
| value       | `string`   | `''`    | 单选框的值    |
| modelValue  | `string[]` | `[]`    | 当前选中的值  |
| disabled    | `boolean`  | `false` | 是否禁用     |

### 插槽

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

### 事件

| Event               | Type                      | Description            |
|---------------------|---------------------------|------------------------|
| `update:modelValue` | `(state: string) => void` | 监听 `modelValue` 值变化 |


<script setup>
  import Basic from './basic.vue'
  import Value from './value.vue'
  import Label from './label.vue'
</script>