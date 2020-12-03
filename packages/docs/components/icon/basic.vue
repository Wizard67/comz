<template>
  <p><GeoAlt/> Location. <SuitHeartFill/> Heart.</p>
  <p><Icon><GeoAlt/></Icon> Location. <Icon><SuitHeartFill/></Icon> Heart.</p>
</template>

<script>
import { defineComponent } from 'vue'
import { Icon } from 'comz'
import { SuitHeartFill, GeoAlt } from '@comz/icons'

export default defineComponent({
  components: {
    Icon,
    SuitHeartFill, GeoAlt
  }
})
</script>
