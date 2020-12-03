# Icon 图标

图标组件通过模拟 [`strut`](https://www.w3.org/TR/CSS2/visudet.html#strut) 特性，可以包裹 `SVG` 标签，使之与任意内联元素对齐。

> COMZ 基于 [bootstrap icon](https://icons.getbootstrap.com/) 封装了 `@comz/icons` 图标库，可以在项目中直接引用。

## 基础用法

在内联元素文档流中可以使用组件包裹 `SVG` 标签来居中对齐图标。

> UI 样式中推荐 `flex` 布局来直接对齐 `SVG` 图标。

::: component <IconBasic/>
<<< ./components/icon/basic.vue
:::

## 旋转图标

添加 `spin` 属性可以使被包裹的图标顺时针旋转。

::: component <IconSpin/>
<<< ./components/icon/spin.vue
:::

## 图标样式

图标组件提供了 `size`、`color`、`link` 属性用来快速修改样式。

> `size` 用来修改图标的尺寸  
> `color` 用来修改图标的颜色  
> `link` 用来声明可点击的鼠标样式

::: component <IconStyle/>
<<< ./components/icon/style.vue
:::

## API
### 属性

| Attribute   | Type         | Default   | Description   |
|-------------|--------------|-----------|---------------|
| size        | `<length>` | `inherit` | 图标尺寸       |
| color       | `<color>`  | `inherit` | 图标颜色       |
| spin        | `boolean`    | `false`   | 是否旋转       |
| link        | `boolean`    | `false`   | 是否可点击     |

### 插槽

| Slot    | Description        |
|---------|--------------------|
| default | 默认插槽，放置图标组件 |

### 事件

| Event    | Type         | Description |
|----------|--------------|-------------|
| on-click | `() => void` | 监听点击事件  |
