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

<script setup="props, { emit }" lang="ts">
declare const props: {
  label?: string
}

export default {}
</script>
