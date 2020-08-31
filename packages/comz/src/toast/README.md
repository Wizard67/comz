# Toast

## Usage

```html
<template>
  <Toast v-model:show="show">toast</Toast>
</template>
```
```js
import { Toast } from 'comz'

export default {
  components: {
    Toast
  },
  setup() {
    return {
      show: true
    }
  }
}
```

## API

| Attribute | Type    | Default   | Description   |
|-----------|---------|-----------|---------------|
| show      | boolean | `false`   | 是否展示       |
| duration  | numver  | `3000`    | 持续时长（毫秒） |

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

| Event       | Type                      | Description     |
|-------------|---------------------------|-----------------|
| update:show | (state: boolean) => void  | 监听`show`值变化  |
