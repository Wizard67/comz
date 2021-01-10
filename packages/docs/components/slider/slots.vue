<template>
  <Flex gap="16px" flow="column">
    <Slider v-model="value1" :min="min" :max="max">
      <template #prepend>{{ min }}</template>
      <template #append>{{ max }}</template>
    </Slider>

    <Slider
      :modelValue="Number(value2)"
      @update:modelValue="val => value2 = val"
    >
      <template #append>
        <Input
          :modelValue="String(value2)"
          @update:modelValue="val => value2 = val"
          style="width: 50px;"
        ></Input>
      </template>
    </Slider>
  </Flex>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Flex, Slider, Input } from 'comz'

export default defineComponent({
  components: {
    Flex, Slider, Input
  },
  setup() {
    return {
      min: 0,
      max: 100,
      value1: ref(0),
      value2: ref(50)
    }
  }
})
</script>
