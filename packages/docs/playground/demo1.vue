<template>
  <div class="container">
    <Panel v-model:expand="expand" title="panel">
      <Form label-width="80px" label-align="left">
        <FormItem label="Input">
          <Input v-model="form.input"></Input>
        </FormItem>
        <FormItem label="Radio">
          <Flex>
            <Radio v-model="form.radio" value="Radio1">Radio1</Radio>
            <Radio v-model="form.radio" value="Radio2">Radio2</Radio>
          </Flex>
        </FormItem>
        <FormItem label="Checkbox">
          <Flex wrap gap="0 8px">
            <Checkbox v-model="form.checkbox" value="Checkbox1"
              >Checkbox1</Checkbox
            >
            <Checkbox v-model="form.checkbox" value="Checkbox2"
              >Checkbox2</Checkbox
            >
            <Checkbox v-model="form.checkbox" value="Checkbox3"
              >Checkbox3</Checkbox
            >
          </Flex>
        </FormItem>
        <FormItem label="Switch">
          <Switch v-model="form.switch"></Switch>
        </FormItem>
        <FormItem label="Slider">
          <Slider v-model="form.slider">
            <template #append>
              <Input
                :modelValue="String(form.slider)"
                @update:modelValue="(val) => (form.slider = Number(val))"
                style="width: 50px"
              >
              </Input>
            </template>
          </Slider>
        </FormItem>
      </Form>
    </Panel>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import {
  Flex,
  Panel,
  Form,
  FormItem,
  Input,
  Radio,
  Checkbox,
  Switch,
  Slider
} from 'comz'

export default defineComponent({
  components: {
    Flex,
    Panel,
    Form,
    FormItem,
    Input,
    Radio,
    Checkbox,
    Switch,
    Slider
  },
  setup() {
    const expand = ref(true)
    const expand2 = ref(true)

    const form = reactive({
      input: '',
      radio: '',
      checkbox: [],
      switch: false,
      slider: 0
    })

    return {
      expand,
      expand2,
      form
    }
  }
})
</script>

<style scoped>
.container {
  width: 300px;
  margin: 20px auto;
}
</style>
