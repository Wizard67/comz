# Button 按钮

## 状态

### 默认状态

渲染普通按钮样式

<ButtonDefault/>

<<< ./components/button/default.vue

### 禁用状态

对按钮设置禁用状态

<ButtonDisabled/>

<<< ./components/button/disabled.vue

### 加载状态

对按钮设置加载状态

<ButtonLoading/>

<<< ./components/button/loading.vue

### 复合状态

处于加载与禁用状态的按钮

<ButtonLoadingDisabled/>

<<< ./components/button/loading-disabled.vue

## API

### 属性 Attributes

| Attribute | Type    | Default | Description   |
|-----------|---------|---------|---------------|
| loading   | boolean | `false` | 是否处于加载状态 |
| disabled  | boolean | `false` | 是否处于禁用状态 |

### 事件 Event

| Event    | Type        | Description |
|----------|-------------|-------------|
| on-click | () => void  | 监听点击事件  |

### 插槽 Slot

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |
