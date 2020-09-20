<template>
  <main>
    <div class="wrap">
      <Panel title="Title" v-model:expand="expand">
        <div>
          {{ content }}
        </div>
      </Panel>

      <br>

      <Button @click="handleClick">Add</Button>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Panel, Icon, Button } from 'comz'
import { DirectionHorizontal } from '@comz/icons'

export default {
  components: {
    Panel,
    Icon, DirectionHorizontal,
    Button
  },
  setup() {
    const expand = ref(true)


    const content = ref('panel\npanel\npanel\npanel\npanel\npanel\npanel\npanel\n')
    const handleClick = () => {
      content.value += content.value
    }

    return {
      expand,
      content, handleClick
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

.wrap {
  width: 300px;
}
</style>
