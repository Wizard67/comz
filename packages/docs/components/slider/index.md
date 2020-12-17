# Slider 滑动条

滑动条组件，可以通过拖拽控制当前值。

> 受控组件，需要声明 `modelValue` 属性

## 基础用法

可以添加 `disabled` 属性禁用滑动条。

::: component <SliderBasic/>
<<< ./components/slider/basic.vue
:::

## 滑动范围

使用 `min` 和 `max` 指定滑动条的范围。

::: component <SliderRange/>
<<< ./components/slider/range.vue
:::

## 步长

设置 `step` 属性可以控制最小的滑动距离。

> 需要注意的是，如果 `step` 的值不能被 `max - min` 整除的话，滑动条将不能拉满。

::: component <SliderStep/>
<<< ./components/slider/step.vue
:::

## 插槽

使用 `prepend` 和 `append` 插槽可以在滑动条前后插入内容。

::: component <SliderSlots/>
<<< ./components/slider/slots.vue
:::

## API
### 属性

| Attribute  | Type      | Default | Description   |
|------------|-----------|---------|---------------|
| modelValue | `string`  | `''`    | 输入值         |
| min        | `number`  | `0`     | 滑动范围的最小值 |
| max        | `number`  | `100`   | 滑动范围的最大值 |
| step       | `number`  | `1`     | 滑动步长        |
| disabled   | `boolean` | `false` | 是否禁用        |

### 事件

| Event             | Type                      | Description            |
|-------------------|---------------------------|------------------------|
| update:modelValue | `(value: number) => void` | 监听 `modelValue` 值变化 |

### 插槽

| Slot    | Description        |
|---------|--------------------|
| prepend | 放置在滑动条之前的插槽 |
| append  | 放置在滑动条之后的插槽 |