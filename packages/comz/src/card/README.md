# Card

## Usage

```html
<template>
  <Card>
    <template #header>
      title
    </template>
    <template #default>
      body
    </template>
  </Card>
</template>
```
```js
import { Card } from 'comz'

export default {
  components: {
    Card
  }
}
```

## API

| Attribute | Type    | Default   | Description |
|-----------|---------|-----------|-------------|
| shadow    | boolean | `false`   | 是否显示阴影  |

| Slot    | Description               |
|---------|-------------------------- |
| header  | 标题栏插槽（space-between） |
| default | 默认插槽                   |
| default | 默认插槽 (flex-end)        |

| Event | Type | Description |
|-------|------|-------------|
| -     | -    | -           |
