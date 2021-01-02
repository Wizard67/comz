# Button 按钮

按钮是用来监听用户点击动作，以触发业务逻辑回调的组件。

## 用例

<ButtonUsage/>

## 按钮状态

按钮拥有三种状态：`default`、`loading`、`disabled`。

> `default` 状态表示可操作。  
> `loading` 状态表示异步等待，仍然可以监听点击动作。  
> `diabled` 状态表示禁止操作，不可监听点击动作。

::: component <ButtonBasic/>
<<< ./components/button/basic.vue
:::

## 图标按钮

配合 `Icon` 组件可以在按钮内添加图标。

::: component <ButtonIcon/>
<<< ./components/button/icon.vue
:::

## API
### 属性

| Attribute | Type              | Default     | Description   |
|-----------|-------------------|-------------|---------------|
| danger    | `boolean`         | `false`     | 设置为危险状态   |
| loading   | `boolean`         | `false`     | 是否处于加载状态 |
| disabled  | `boolean`         | `false`     | 是否处于禁用状态 |

### 事件

| Event    | Type          | Description |
|----------|---------------|-------------|
| on-click | `() => void`  | 监听点击事件  |

### 插槽

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |
