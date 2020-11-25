# Icon 图标

## 基础用法

::: component <IconDefault/>
<<< ./components/icon/default.vue
:::

## 旋转

::: component <IconSpin/>
<<< ./components/icon/spin.vue
:::

## 属性 Attribute

| Attribute   | Type       | Default   | Description   |
|-------------|------------|-----------|---------------|
| size        | \<length\> | `inherit` | 图标尺寸       |
| color       | \<color\>  | `inherit` | 图标颜色       |
| strokeWidth | \<number\> | `2`       | SVG 轮廓线宽度 |
| spin        | boolean    | `false`   | 是否旋转       |
| link        | boolean    | `false`   | 是否可点击     |

## 插槽 Slot

| Slot    | Description        |
|---------|--------------------|
| default | 默认插槽，放置图标组件 |

## 事件 Event

| Event    | Type          | Description |
|----------|---------------|-------------|
| on-click | () => void    | 监听点击事件  |
