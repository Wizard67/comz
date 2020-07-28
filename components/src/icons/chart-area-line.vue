<template>
<div class="icon-wrap">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-area-line" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z"/>
    <polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" />
    <polyline points="4 12 7 8 11 10 16 4 20 8" />
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