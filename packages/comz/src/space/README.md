# Space

## Usage

```html
<template>
  <Space>
    <div>
    <div>
    <div>
  </Space>
</template>
```
```js
import { Space } from 'comz'

export default {
  components: {
    Space
  }
}
```

## API

| Attribute | Type                         | Default   | Description |
|-----------|------------------------------|-----------|-------------|
| gap       | \<length\>？                 | `''`      | 项的间距      |
| align     | 'start' \| 'center' \| 'end' | `'start'` | 项的对齐方式  |
| vertical  | boolean                      | `false`   | 是否垂直排列  |

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

| Event    | Type | Description |
|----------|------|-------------|
| -        | -    | -           |
