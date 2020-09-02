# Input

## Usage

```html
<template>
  <Input v-model="value"></Input>
</template>
```
```js
import { Input } from 'comz'

export default {
  components: {
    Input
  }
}
```

## API

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| modelValue  | string  | ``      | 输入值       |
| placeholder | string  | ``      | 占位文本     |
| readonly    | boolean | `false` | 是否只读     |
| disabled    | boolean | `false` | 是否禁用     |
| clearable   | boolean | `false` | 展示清空按钮  |

| Slot | Description        |
|------|--------------------|
| -    | 默认插槽，放置图标组件 |

| Event             | Type                    | Description           |
|-------------------|-------------------------|-----------------------|
| update:modelValue | (state: string) => void | 监听`modelValue`值变化  |
