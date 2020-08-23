<template>
  <main>
    <Grid
      class="outgrid"
      gap="4px"
      :template="template"
      :border="true"
    >
      <GridItem name="b">
        <div class="block"></div>
      </GridItem>

      <GridItem name="c">
        <Grid
          class="innergrid"
          :template="template2"
        >
          <GridItem name="b">
            <div class="block"></div>
          </GridItem>
        </Grid>
      </GridItem>

    </Grid>

    <br>

    <Button @click="handleClick">Click</Button>
  </main>
</template>

<script>
import { ref } from 'vue'
import { Button, Grid, GridItem } from 'comz'

const genTemplate = v => `
  'a   a   a' 40px
  'b   c   c' auto
  'b   c   c' auto /
  ${v} 1fr 1fr
`

export default {
  components: {
    Grid, GridItem, Button
  },
  setup() {
    const border = ref(true)
    const template = ref(genTemplate('1fr'))
    const template2 = ref(genTemplate('50px'))

    const handleClick = () => {
      border.value = !border.value
      template.value = border.value
                         ? genTemplate('1fr')
                         : genTemplate('.5fr')
    }

    return {
      border, template, template2, handleClick
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  min-height: 100%;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 20px 0;
}

.outgrid {
  flex: none;
  width: calc(100% - 20px);
  height: 400px;
  margin: 10px;
}
.innergrid {
  flex: none;
  width: 100%;
  height: 100%;
}
.block {
  width: 100%;
  height: 100%;
  background-color: lightskyblue;
}
</style>
