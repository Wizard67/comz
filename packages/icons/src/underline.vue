<template>
<div class="icon-wrap">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-underline" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z"/>
    <line x1="6" y1="20" x2="18" y2="20" />
    <path d="M8 5v6a4 4 0 0 0 8 0v-6" />
  </svg>
  <span>
    <slot></slot>
  </span>
</div>
</template>

<script setup="props, { emit }" lang="ts">
export default {}
</script>

<style lang="scss">
.icon-wrap {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  vertical-align: baseline;

  svg ~ span {
    margin-left: 2px;
  }
}
</style>