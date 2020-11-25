# Space 间距

## 基础用法

::: component <SpaceDefault/>
<<< ./components/space/default.vue
:::

## 允许换行

::: component <SpaceWrap/>
<<< ./components/space/wrap.vue
:::

## 设置每个项占据的宽度

::: component <SpaceWidth/>
<<< ./components/space/width.vue
:::

## 垂直布局

::: component <SpaceVerical/>
<<< ./components/space/verical.vue
:::

## 对齐方式

::: component <SpaceAlign/>
<<< ./components/space/align.vue
:::


## 属性 Attribute

| Attribute | Type                         | Default   | Description |
|-----------|------------------------------|-----------|-------------|
| gap       | \<length\>                   | `''`      | 项的间距     |
| align     | 'start' \| 'center' \| 'end' | `'start'` | 项的对齐方式  |
| vertical  | boolean                      | `false`   | 是否垂直排列  |

## 插槽 Slot

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |
