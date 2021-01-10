<template>
  <Flex wrap>
    <Flex gap="16px" flow="column">
      <Input class="input" v-model="value1" placeholder="normal">
        <template #prepend><Icon><Envelope /></Icon></template>
        <template #append>.com</template>
      </Input>

      <Input class="input" v-model="value1" placeholder="disabled" disabled>
        <template #prepend><Icon><Envelope /></Icon></template>
        <template #append>.com</template>
      </Input>

      <Input class="input" v-model="value1" placeholder="readonly" readonly>
        <template #prepend><Icon><Envelope /></Icon></template>
        <template #append>.com</template>
      </Input>
    </Flex>

    <Flex gap="16px" flow="column">
      <Input class="input" v-model="value2" placeholder="normal">
        <template #prepend>￥</template>
      </Input>

      <Input class="input" v-model="value2" placeholder="disabled" disabled>
        <template #prepend>￥</template>
      </Input>

      <Input class="input" v-model="value2" placeholder="readonly" readonly>
        <template #prepend>￥</template>
      </Input>
    </Flex>

    <Flex gap="16px" flow="column">
      <Input class="input" v-model="value3" placeholder="normal">
        <template #append><Icon link><MicFill /></Icon></template>
      </Input>

      <Input class="input" v-model="value3" placeholder="disabled" disabled>
        <template #append><MicFill /></template>
      </Input>

      <Input class="input" v-model="value3" placeholder="readonly" readonly>
        <template #append><MicFill /></template>
      </Input>
    </Flex>
  </Flex>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Flex, Input, Icon } from 'comz'
import { Envelope, MicFill } from '@comz/icons'

export default defineComponent({
  components: {
    Flex, Envelope, MicFill, Icon,
    Input
  },
  setup() {
    return {
      value1: ref(''),
      value2: ref(''),
      value3: ref('')
    }
  }
})
</script>

<style scoped>
.input {
  width: 200px;
  color: rgb(131, 131, 131);
}
</style>