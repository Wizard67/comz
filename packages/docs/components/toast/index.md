# Toast 提示

全局反馈用户操作的结果。

## 基础用法

可以使用 `type` 属性，指定 Toast 的类型。

::: component <ToastBasic/>
<<< ./components/toast/basic.vue
:::

## 延时关闭

`duration` 属性设置自动关闭的时长。

::: component <ToastDuration/>
<<< ./components/toast/duration.vue
:::

## API

### 属性 Attribute

| Attribute | Type                                       | Default | Description   |
|-----------|--------------------------------------------|---------|---------------|
| show      | `boolean`                                  | `false` | 是否展示        |
| type      | `'info' | 'success' | 'warning' | 'error'` | `info`  | 提示的类型      |
| duration  | `number`                                   | `3000`  | 持续时长（毫秒） |

### 插槽 Slot

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

### 事件 Event

| Event       | Type                       | Description       |
|-------------|----------------------------|-------------------|
| update:show | `(state: boolean) => void` | 监听 `show` 值变化  |
