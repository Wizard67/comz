# Textarea 文本域

## 基础样式

::: component <Default/>
<<< ./components/textarea/default.vue
:::

## 禁用状态

::: component <Disabled/>
<<< ./components/textarea/disabled.vue
:::

## 只读状态

::: component <Readonly/>
<<< ./components/textarea/readonly.vue
:::

## 属性 Attribute

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| modelValue  | string  | `''`    | 输入值       |
| placeholder | string  | `''`    | 占位文本     |
| width       | string  | `''`    | 组件宽度     |
| rows        | number  | `2`     | 文本行数     |
| readonly    | boolean | `false` | 是否只读     |
| disabled    | boolean | `false` | 是否禁用     |

## 事件 Event

| Event             | Type                    | Description            |
|-------------------|-------------------------|------------------------|
| update:modelValue | (state: string) => void | 监听 `modelValue` 值变化 |


<script setup>
  import Default from './default.vue'
  import Disabled from './disabled.vue'
  import Readonly from './readonly.vue'
</script>