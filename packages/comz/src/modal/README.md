# Modal

## Usage

```html
<template>
  <Modal v-model:show="show">
    content
  </Modal>
</template>
```
```js
import { ref } from 'vue'
import { Modal } from 'comz'

export default {
  components: {
    Modal
  },
  setup() {
    return {
      show: ref(true)
    }
  }
}
```

## API

| Attribute | Type       | Default | Description           |
|-----------|------------|---------|-----------------------|
| title     | string     | `提示`   | 弹窗标题               |
| width     | \<length\> | `300px` | 弹窗宽度                |
| show      | boolean    | `false` | 是否展示                |
| closable  | boolean    | `false` | 是否通过点击遮罩层关闭弹窗 |

| Slot    | scoped            | Description             |
|---------|-------------------|-------------------------|
| header  | close: () => viod | 标题栏插槽（space-between）|
| default | -                 | 默认插槽                  |
| footer  | close: () => viod | 底部插槽 (flex-end)       |

> `close` 关闭弹窗

| Event    | Type       | Description |
|----------|------------|-------------|
| on-close | () => void | 监听点击事件  |
