# Select

## Usage

```html
<template>
  <Select v-model="value" placeholder="something">
    <Option value="a_value" label="a_Label">A</Option>
    <Option value="b_value" label="b_Label">B</Option>
    <Option value="c_value" label="c_Label">C</Option>
  </Select>
</template>
```
```js
import { Select, Option } from 'comz'

export default {
  components: {
    Select, Option
  }
}
```

## API

### Select

| Attribute   | Type    | Default | Description |
|-------------|---------|---------|-------------|
| modelValue  | any     | -       | 输入值       |
| placeholder | string  | -       | 占位文本     |

| Slot    | Description             |
|---------|-------------------------|
| default | 默认插槽，放置 Option 组件 |

| Event    | Type | Description |
|----------|------|-------------|
| -        | -    | -           |

### Option

| Attribute | Type   | Default | Description        |
|-----------|--------|---------|--------------------|
| value     | any    | -       | 组件被选中时的值      |
| label     | string | -       | 组件被选中时的展示文本 |

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |

| Event    | Type | Description |
|----------|------|-------------|
| -        | -    | -           |
