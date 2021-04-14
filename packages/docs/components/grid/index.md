# Grid 网格

声明网格布局。

## 用例

<Usage/>

## 基础用法

声明一个网格布局需要先使用 `rows` 和 `columns` 属性定义出网格线的位置关系。

> `rows` 属性定义了水平网格线的间距关系（行高）。
> `columns` 属性定义了垂直网格线的间距关系（列宽）。

之后可以在 `Grid` 组件上使用 `areas` 声明网格布局关系，也可以在 `GridItem` 组件上使用 `area` 属性直接定义该项的位置。

> 使用 `areas` 在 `Grid` 组件上声明布局时，`GridItem` 组件的 `area` 属性用来指定布局区域对应的名字；否则 `area` 属性需要传递该项在网格内占据的[网格线区间信息](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)。如果不设置 `area` 属性，项将会按照 `flow` 属性指定的填充方式排布。

::: component <Basic/>
<<< ./components/grid/basic.vue
:::

## 间距

通过 `gap` 属性，声明网格间距。

::: component <Gap/>
<<< ./components/grid/gap.vue
:::

## 网格嵌套

网格可以嵌套使用，且属性不会相互影响（例子中外层 `Grid` 的 `gap` 属性不会作用在内层）。

::: component <Nested/>
<<< ./components/grid/nested.vue
:::

## API

### Grid 属性

| Attribute   | Type                    | Default | Description        |
|-------------|-------------------------|---------|--------------------|
| areas       | `<grid-template-areas>` | -       | 声明网格区域         |
| rows        | `string`                | `''`    | 定义网格项行高       |
| columns     | `string`                | `''`    | 定义网格项列宽       |
| autoRows    | `string`                | `''`    | 声明隐式创建的网格行高 |
| autoColumns | `string`                | `''`    | 声明隐式创建的网格列宽 |
| flow        | `<grid-auto-flow>`      | `'row'` | 定义填充方式         |
| padding     | `<length>`              | `''`    | 设置容器内边距        |
| gap         | `<length>`              | `''`    | 项的间距             |
| inline      | `boolean`               | `false` | 声明成内联网格        |

### Grid 插槽

| Slot    | Description               |
|---------|---------------------------|
| default | 默认插槽，放置 GridItem 组件 |


### GridItem 属性

| Attribute | Type          | Default | Description                  |
|-----------|---------------|---------|------------------------------|
| area      | `<grid-area>` | -       | 项占据区域的名称或占据的网格线区间 |

### GridItem 插槽

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |


<script setup>
  import Usage from './usage.vue'
  import Basic from './basic.vue'
  import Gap from './gap.vue'
  import Nested from './nested.vue'
</script>