# Toast 提示

## 默认样式

::: component <ToastDefault/>
<<< ./components/toast/default.vue
:::

## 属性 Attribute

| Attribute | Type    | Default   | Description   |
|-----------|---------|-----------|---------------|
| show      | boolean | `false`   | 是否展示       |
| duration  | number  | `3000`    | 持续时长（毫秒） |

## 插槽 Slot

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

## 事件 Event

| Event       | Type                      | Description       |
|-------------|---------------------------|-------------------|
| update:show | (state: boolean) => void  | 监听 `show` 值变化  |
