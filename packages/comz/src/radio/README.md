# Radio

## Usage

```html
<template>
  <Radio v-model="value" value="A">A</Radio>
  <Radio v-model="value" value="B">B</Radio>
</template>
```
```js
import { Radio } from 'comz'

export default {
  components: {
    Radio
  }
}
```

## API

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| value       | string  | ``      | 单选框的值    |
| modelValue  | string  | ``      | 当前值       |
| disabled    | boolean | `false` | 是否禁用     |

| Slot | Description        |
|------|--------------------|
| -    | 默认插槽，放置图标组件 |

| Event             | Type                    | Description           |
|-------------------|-------------------------|-----------------------|
| update:modelValue | (state: string) => void | 监听`modelValue`值变化  |
