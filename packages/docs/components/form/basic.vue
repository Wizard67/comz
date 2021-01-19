<template>
  <Form class="form" label-width="80px">
    <FormItem label="input" name="input">
      <Input v-model="form.input" placeholder="some text"></Input>
    </FormItem>

    <FormItem label="select" name="select">
      <Select v-model="form.select" style="width: 100px">
        <Option value="A" label="AAAAAAA">AAAAAAA</Option>
        <Option value="B" label="BBBBBBB">BBBBBBB</Option>
      </Select>
    </FormItem>

    <FormItem label="checkbox" name="checkbox">
      <Flex>
        <Checkbox v-model="form.checkbox" value="A">A</Checkbox>
        <Checkbox v-model="form.checkbox" value="B">B</Checkbox>
      </Flex>
    </FormItem>

    <FormItem label="radio" name="radio">
      <Flex>
        <Radio v-model="form.radio" value="A">A</Radio>
        <Radio v-model="form.radio" value="B">B</Radio>
      </Flex>
    </FormItem>

    <FormItem label="switch" name="switch">
      <Switch v-model="form.switch"></Switch>
    </FormItem>

    <FormItem label="slider" name="slider">
      <Slider v-model="form.slider"></Slider>
    </FormItem>

    <FormItem>
      <Button>Submit</Button>
    </FormItem>
  </Form>
</template>

<script>
import { defineComponent, reactive, computed } from 'vue'
import { Form, FormItem, Flex, Button } from 'comz'
import {
  Input,
  Textarea,
  Checkbox,
  Radio,
  Select,
  Option,
  Switch,
  Slider
} from 'comz'

export default defineComponent({
  components: {
    Form,
    FormItem,
    Flex,
    Input,
    Textarea,
    Checkbox,
    Radio,
    Select,
    Option,
    Switch,
    Slider,
    Button
  },
  setup() {
    return {
      form: reactive({
        input: '',
        checkbox: [],
        radio: '',
        select: '',
        switch: false,
        slider: 0
      })
    }
  }
})
</script>

<style scoped>
.form {
  width: 320px;
}
</style>
