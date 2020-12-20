# Form 表单

组件负责表单控件的样式和布局。

## 基础用法

`Form` 组件内使用 `FormItem` 组件包裹表单控件。

::: component <FormBasic/>
<<< ./components/form/basic.vue
:::

## API

### Form 属性

| Attribute   | Type     | Default  | Description   |
|-------------|----------|----------|---------------|
| label-width | `string` | `‘80px’` | 标签文本宽度    |
| label-align | `string` | `''`     | 标签文本对齐方式 |

### Form 插槽

| Slot    | Description               |
|---------|---------------------------|
| default | 默认插槽，放置 FormItem 组件 |

### FormItem 属性

| Attribute | Type     | Default | Description   |
|-----------|----------|---------|---------------|
| label     | `string` | -       | 表单项的标签文本 |

### FormItem 插槽

| Slot    | Description |
|---------|-------------|
| default | 默认插槽     |