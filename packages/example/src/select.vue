<template>
  <main>
    {{ value }}

    <br>

    <Select v-model="value" placeholder="something">
      <Option value="test" label="TestLabel">
        Test
      </Option>
      <Option :value="{ value: 'ok' }" label="OkkkLabel">
        Okkk
      </Option>
      <Option :value="optionvalue" :label="optionlabel">
        {{ aa }}
      </Option>
    </Select>

  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Select, Option } from 'comz'

export default {
  components: {
    Select, Option
  },
  setup() {
    const value = ref('')
    const aa = ref('aa')
    const optionvalue = ref('optionvalue')
    const optionlabel = ref('optionlabel')

    onMounted(() => {
      // setTimeout(() => {
      //   value.value = 'test1'
      //   aa.value = 'bb'
      //   optionvalue.value = 'dynamic'
      //   optionlabel.value = 'dynamic'
      // }, 3000)
    })

    return {
      value,
      aa, optionvalue, optionlabel
    }
  }
}
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

.block {
  width: 100%;
  height: 200px;
  padding: 10px 0;
}
</style>
