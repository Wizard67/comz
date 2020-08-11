<template>
<div class="icon-wrap">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-sidebar-right" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z"/>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <line x1="15" y1="4" x2="15" y2="20" />
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