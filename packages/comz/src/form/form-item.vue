<template>
  <div class="cform-item">
    <div class="cform-item__label">
      {{ label ? label + ':' : '' }}
    </div>
    <div class="cform-item__field">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import { string } from 'vue-types'

const props = defineProps({
  label: string()
})
</script>
