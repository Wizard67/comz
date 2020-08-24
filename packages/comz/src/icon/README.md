# Icon

## Usage

```html
<template>
  <Icon color="pink" size="24px"><Ad></Icon>
</template>
```
```js
import { Icon } from 'comz'
import { Ad } from '@comz/icon'

export default {
  components: {
    Icon, Ad
  }
}
```

## API

| Attribute   | Type       | Default   | Description   |
|-------------|------------|-----------|---------------|
| size        | \<length\> | `inherit` | 图标尺寸       |
| color       | \<color\>  | `inherit` | 图标颜色       |
| strokeWidth | \<number\> | `1`       | SVG 轮廓线宽度 |
| spin        | boolean    | `false`   | 是否旋转       |
| link        | boolean    | `false`   | 是否可点击     |

| Slot    | Description        |
|---------|--------------------|
| default | 默认插槽，放置图标组件 |

| Event    | Type          | Description |
|----------|---------------|-------------|
| on-click | () => void    | 监听点击事件  |
