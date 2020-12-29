<template>
  <div class="cform-item">
    <div class="cform-item__label">
      {{ label? label + ':' : '' }}
    </div>
    <div class="cform-item__field">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { toRefs } from 'vue'

const props = defineProps({
  label: { type: String, required: false }
})

const { label } = toRefs(props)
</script>
