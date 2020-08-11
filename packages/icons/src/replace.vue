<template>
<div class="icon-wrap">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-replace" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z"/>
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="15" width="6" height="6" rx="1" />
    <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
    <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
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