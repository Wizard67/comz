# Textarea

## Usage

```html
<template>
  <Textarea v-model="value"></Textarea>
</template>
```
```js
import { Textarea } from 'comz'

export default {
  components: {
    Textarea
  }
}
```

## API

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| modelValue  | string  | ``      | 输入值       |
| placeholder | string  | ``      | 占位文本     |
| width       | string  | ``      | 组件宽度     |
| rows        | number  | `2`     | 文本行数     |
| readonly    | boolean | `false` | 是否只读     |
| disabled    | boolean | `false` | 是否禁用     |

| Slot | Description |
|------|-------------|
| -    | -           |

| Event             | Type                    | Description           |
|-------------------|-------------------------|-----------------------|
| update:modelValue | (state: string) => void | 监听`modelValue`值变化  |
