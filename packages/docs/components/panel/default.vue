<template>
  <Panel title="Title" v-model:expand="expand">
    Panel<br />
    Panel<br />
    Panel<br />
    Panel<br />
  </Panel>
</template>

<script>
import { ref } from 'vue'
import { Panel } from 'comz'

export default {
  components: {
    Panel
  },
  setup() {
    const expand = ref(true)

    return {
      expand
    }
  }
}
</script>
