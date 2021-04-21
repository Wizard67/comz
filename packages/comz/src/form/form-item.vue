<template>
  <div ref="$el" class="cform-item">
    <div class="cform-item__label">
      {{ label }}
    </div>
    <div class="cform-item__field">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useExpose } from '@comz/vca'
import { string } from 'vue-types'

defineProps({
  label: string()
})

const $el = useExpose()
</script>
