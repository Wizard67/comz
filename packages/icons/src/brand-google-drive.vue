<template>
<div class="icon-wrap">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google-drive" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z"/>
    <path d="M12 10L6 20l-3-5L9 5z" />
    <path d="M9 15h12l-3 5h-12" />
    <path d="M15 15L9 5h6l6 10z" />
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