# Button

## Usage

```html
<template>
  <Button>BUTTON</Button>
</template>
```
```js
import { Button } from 'comz'

export default {
  components: {
    Button
  }
}
```

## API

| Attribute | Type    | Default   | Description   |
|-----------|---------|-----------|---------------|
| loading   | boolean | `false`   | 是否处于载入状态 |
| disabled  | boolean | `false`   | 是否处于禁用状态 |
| autofocus | boolean | `false`   | 渲染完成后聚焦   |

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

| Event    | Type        | Description |
|----------|-------------|-------------|
| on-click | () => void  | 监听点击事件  |
