# Flex 弹性容器

组件用于设置内容的间距和对齐方式。

## 用例

<FlexUsage/>

## 基础用法

放置在容器内的组件预设了 `8px` 的间距，可以通过 `gap` 属性重新设置。

::: component <FlexBasic/>
<<< ./components/flex/basic.vue
:::

## 内联元素

容器默认为块级元素，可以添加 `inline` 属性声明成内联元素。

::: component <FlexInline/>
<<< ./components/flex/inline.vue
:::

## 允许换行

设置 `wrap` 属性，允许空间不足时换行。

::: component <FlexWrap/>
<<< ./components/flex/wrap.vue
:::

## 垂直排列

`vertical` 属性可以使元素垂直排列

> 如果指定了 Flex 组件的高度，可以添加 `wrap` 使之内容允许换行。

::: component <FlexVertical/>
<<< ./components/flex/vertical.vue
:::

## 对齐方式

通过 `justify` 和 `align` 和 `center` 属性设置内容的对齐方式。

> `justify` 对应 `flex` 中 `justify-content` 属性，设置容器主轴的对齐方式。  
> `align` 对应 `flex` 中 `align-items` 属性，设置容器交叉轴上项的对齐方式。  
> `center` 属性是预设值，可以使容器项水平垂直居中。  
> 复杂的对齐方式，建议配合 Grid 组件或者使用 css 实现。

::: component <FlexPlace/>
<<< ./components/flex/place.vue
:::

## API

### 属性

| Attribute | Type                | Default        | Description       |
|-----------|---------------------|----------------|-------------------|
| inline    | `boolean`           | `false`        | 声明为内联容器      |
| gap       | `<length>`          | `'8px'`        | 项的间距           |
| justify   | `<justify-content>` | `'flex-start'` | 主轴的对齐方式      |
| align     | `<align-items>`     | `'flex-start'` | 交叉轴上项的对齐方式 |
| center    | `boolean`           | `false`        | 容器内容水平垂直居中 |
| vertical  | `boolean`           | `false`        | 是否垂直排列        |

### 插槽

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |
