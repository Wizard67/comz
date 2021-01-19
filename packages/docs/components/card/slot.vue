<template>
  <Card style="width: 300px">
    <template #header>
      <span>Title</span>
      <span>X</span>
    </template>
    <template #default>Card Content</template>
    <template #footer>Text</template>
  </Card>
</template>

<script>
import { Card } from 'comz'

export default {
  components: { Card }
}
</script>
