# Card 卡片

## 默认样式

::: component <CardDefault/>
<<< ./components/card/default.vue
:::

## 使用插槽

可以使用 `header` 和 `footer` 插槽，在组件顶部和底部插入内容。

::: component <CardSlot/>
<<< ./components/card/slot.vue
:::

## 卡片阴影

为了提高视觉层级，可以给卡片添加阴影。

::: component <CardShadow/>
<<< ./components/card/shadow.vue
:::

## 属性 Attribute

| Attribute | Type    | Default   | Description |
|-----------|---------|-----------|-------------|
| shadow    | boolean | `false`   | 是否显示阴影  |

## 插槽 Slot

| Slot    | Description               |
|---------|-------------------------- |
| header  | 标题栏插槽（space-between） |
| default | 默认插槽                   |
| footer  | 底部插槽 (flex-end)        |
