<template>
  <main>
    <!-- {{ form }} -->

    <br>

    <Form ref="formRef">
      <FormItem label="input" name="input">
        <CInput v-model="form.input" placeholder="text" clearable></CInput>
      </FormItem>

      <FormItem label="checkbox" name="checkbox">
        <Checkbox v-model="form.checkbox" value="A">A</Checkbox>
        <Checkbox v-model="form.checkbox" value="B">B</Checkbox>
      </FormItem>

      <FormItem label="radio" name="radio">
        <Radio v-model="form.radio" value="A">A</Radio>
        <Radio v-model="form.radio" value="B">B</Radio>
      </FormItem>

      <FormItem label="select" name="select">
        <Select v-model="form.select" placeholder="蔬菜">
          <Option label="土豆" value="potato">土豆</Option>
          <Option label="洋葱" value="onion">洋葱</Option>
        </Select>
      </FormItem>

      <FormItem label="textarea" name="textarea">
        <Textarea v-model="form.textarea" placeholder="textarea"></Textarea>
      </FormItem>
    </Form>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref, watch, nextTick, toRef, computed, onMounted, watchEffect } from 'vue'

export {
  Form, FormItem,
  Input as CInput, Checkbox, Radio, Select, Option, Textarea
} from 'comz'

import { useForm } from '@comz/vca'

export const form = reactive({
  input: '',
  checkbox: [],
  radio: '',
  select: '',
  textarea: ''
})

export const { formRef } = useForm({
  'input': {
    track: computed(() => form.input),
    validate(value) {
      if (value === '') return 'required'
      if (value === 'ok') return 'not ok'
    }
  },
  'checkbox': {
    track: computed(() => form.checkbox),
    validate(value) {
      if (value.length === 0) return 'error'
    }
  },
  'textarea': {
    track: computed(() => form.textarea),
    validate(value) {
      if (value === '') return 'required'
      if (value === 'ok') return 'not ok'
    }
  }
})

export default {}
</script>

<style>
html, body {
  margin: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>