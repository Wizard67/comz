# Grid 栅格

## 栅格布局

通过 `template` 属性，声明栅格布局。

::: component <GridDefault/>
<<< ./components/grid/default.vue
:::

## 间距

通过 `gap` 属性，声明栅格间距。

::: component <GridGap/>
<<< ./components/grid/gap.vue
:::

## 显示边框

可以设置 `border` 属性，显示边框。用于检查栅格布局。

::: component <GridBorder/>
<<< ./components/grid/border.vue
:::

## 栅格嵌套

栅格可以嵌套使用，且属性不会相互影响（例子中父组件的 `border` 属性不会作用在子组件上）。

::: component <GridNested/>
<<< ./components/grid/nested.vue
:::

## 控制内容对齐方式

可以在 `GridItem` 组件上设置 `place` 属性，控制内容的对齐方式。

::: component <GridPlace/>
<<< ./components/grid/place.vue
:::

## Grid 属性

| Attribute | Type              | Default   | Description |
|-----------|-------------------|-----------|-------------|
| gap       | \<length\>        | `''`      | 项的间距     |
| template  | \<grid-template\> | -         | 网格布局模板  |
| border    | boolean           | `false`   | 是否显示边框  |

## Grid 插槽

| Slot    | Description               |
|---------|---------------------------|
| default | 默认插槽，放置 GridItem 组件 |


## GridItem 属性

| Attribute | Type           | Default | Description          |
|-----------|----------------|---------|----------------------|
| name      | string         | -       | 组件对应的 `grid-area` |
| place     | \<place-self\> | -       | 组件内容的对齐方式      |

## GridItem 插槽

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |
