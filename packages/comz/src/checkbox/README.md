# Radio

## Usage

```html
<template>
  <Checkbox v-model="value" value="A">A</Checkbox>
  <Checkbox v-model="value" value="B">B</Checkbox>
</template>
```
```js
import { reactive } from 'vue'
import { Checkbox } from 'comz'

export default {
  components: {
    Checkbox
  },
  setup() {
    return {
      value: reactive([])
    }
  }
}
```

## API

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| value       | string  | ``      | 单选框的值    |
| modelValue  | string  | ``      | 当前值       |
| disabled    | boolean | `false` | 是否禁用     |

| Slot | Description |
|------|-------------|
| -    | -           |

| Event             | Type                    | Description           |
|-------------------|-------------------------|-----------------------|
| update:modelValue | (state: string) => void | 监听`modelValue`值变化  |
