# Alert 警告

## 默认状态

::: component <Default/>
<<< ./components/alert/default.vue
:::

## 自定义关闭样式

::: component <Extra/>
<<< ./components/alert/extra.vue
:::

## 属性 Attribute

| Attribute | Type    | Default   | Description |
|-----------|---------|-----------|-------------|
| color     | string  | `'white'` | 背景色       |
| show      | boolean | `false`   | 是否展示      |

## 插槽 Slot

| Slot    | scoped            | Description |
|---------|-------------------|-------------|
| default | -                 | 默认插槽     |
| extra   | close: () => viod | 放置额外内容  |

## 事件 Event

| Event       | Type          | Description   |
|-------------|---------------|---------------|
| on-close    | () => void    | 监听关闭事件    |
| update:show | () => boolean | 监听展示状态变化 |


<script setup>
  import Default from './default.vue'
  import Extra from './extra.vue'
</script>