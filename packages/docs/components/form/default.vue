<template>
  <Form ref="formRef">
    <FormItem label="input" name="input">
      <Input v-model="form.input" placeholder="text" clearable></Input>
    </FormItem>

    <FormItem label="checkbox" name="checkbox">
      <Space gap="4px" item-width="50%">
        <Checkbox v-model="form.checkbox" value="A">A</Checkbox>
        <Checkbox v-model="form.checkbox" value="B">B</Checkbox>
      </Space>
    </FormItem>
  </Form>
</template>

<script>
import { reactive, computed } from 'vue'
import { Form, FormItem, Space, Input, Checkbox } from 'comz'
import { useForm } from '@comz/vca'

export default {
  components: {
    Form, FormItem, Space, Input, Checkbox
  },
  setup() {
    const form = reactive({
      input: '',
      checkbox: []
    })

    const { formRef } = useForm({
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
      }
    })

    return {
      form, formRef
    }
  }
}
</script>
