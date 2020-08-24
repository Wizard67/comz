# Grid

## Usage

```html
<template>
  <Grid :template="template">
    <GridItem name="a"></GridItem>
    <GridItem name="b"></GridItem>
    <GridItem name="c"></GridItem>
  </Grid>
</template>
```
```js
import { Grid, GridItem } from 'comz'

const template = `
  'a   a   a' 40px
  'b   c   c' auto
  'b   c   c' auto /
  40px 1fr 1fr
`

export default {
  components: {
    Grid, GridItem
  },
  setup() {
    return {
      template
    }
  }
}
```

## API

### Grid

| Attribute | Type              | Default   | Description |
|-----------|-------------------|-----------|-------------|
| gap       | \<length\>        | `''`      | 项的间距     |
| template  | \<grid-template\> | -         | 网格布局模板  |
| border    | boolean           | `false`   | 是否显示边框  |

| Slot    | Description               |
|---------|---------------------------|
| default | 默认插槽，放置 GridItem 组件 |

| Event    | Type | Description |
|----------|------|-------------|
| -        | -    | -           |

### GridItem

| Attribute | Type           | Default | Description          |
|-----------|----------------|---------|----------------------|
| name      | string         | -       | 组件对应的 `grid-area` |
| place     | \<place-self\> | -       | 组件内容的对齐方式      |

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

| Event    | Type | Description |
|----------|------|-------------|
| -        | -    | -           |
