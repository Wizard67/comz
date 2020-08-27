<template>
  <main>
    <Alert v-model:show="showAlert1">Somen Text</Alert>

    <br>

    <template v-if="showAlert2">
      <Alert
        v-model:show="showAlert2"
        color="lightpink"
      >
        <template #default>Somen Text Somen Text Somen Text Somen Text</template>
        <template #extra="{ close }">
          <Icon @on-click="close" link><Click/></Icon>
        </template>
      </Alert>
    </template>
    <template v-else>
      <Button @on-click="handleClick">show alert</Button>
    </template>

  </main>
</template>

<script>
import { ref } from 'vue'
import { Alert, Icon, Button } from 'comz'

import { Click } from '@comz/icons'

export default {
  components: {
    Alert, Icon, Click, Button
  },
  setup() {
    const showAlert1 = ref(true)
    const showAlert2 = ref(true)

    const handleClick = () => {
      showAlert2.value = true
    }

    return  {
      showAlert1,
      showAlert2,
      handleClick
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
</style>
