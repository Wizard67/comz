# Alert

## Usage

```html
<template>
  <Alert v-model:show="show">Somen Text</Alert>
</template>
```
```js
import { ref } from 'vue'
import { Alert } from 'comz'

export default {
  components: {
    Alert
  },
  setup() {
    return {
      show: ref(true)
    }
  }
}
```

## API

| Attribute | Type    | Default       | Description |
|-----------|---------|---------------|-------------|
| color     | string  | `transparent` | 背景色       |
| show      | boolean | `false`       | 是否展示      |

| Slot    | scoped            | Description |
|---------|-------------------|-------------|
| default | -                 | 默认插槽     |
| extra   | close: () => viod | 放置额外内容  |

> `close` 关闭提示栏

| Event    | Type       | Description |
|----------|------------|-------------|
| on-close | () => void | 监听关闭事件  |
