# Modal 模态窗

## 默认样式

::: component <Default/>
<<< ./components/modal/default.vue
:::

## 异步关闭

通过使用作用域插槽可以达到异步关闭的效果。

::: component <Async/>
<<< ./components/modal/async.vue
:::

## 属性 Attribute

| Attribute | Type       | Default   | Description           |
|-----------|------------|-----------|-----------------------|
| title     | string     | `'提示'`   | 弹窗标题               |
| width     | \<length\> | `'300px'` | 弹窗宽度                |
| show      | boolean    | `false`   | 是否展示                |
| closable  | boolean    | `false`   | 是否通过点击遮罩层关闭弹窗 |

## 插槽 Slot

| Slot    | scoped            | Description               |
|---------|-------------------|---------------------------|
| header  | close: () => viod | 标题栏插槽（space-between） |
| default | -                 | 默认插槽                   |
| footer  | close: () => viod | 底部插槽 (flex-end)        |

## 事件 Event

| Event       | Type          | Description   |
|-------------|---------------|---------------|
| on-close    | () => void    | 监听关闭事件    |
| update:show | () => boolean | 监听展示状态变化 |


<script setup>
  import Default from './default.vue'
  import Async from './async.vue'
</script>