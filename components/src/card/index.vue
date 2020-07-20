<template>
  <div class="card">
    <div class="card__header">
      <div>title</div>
      <div>helper</div>
    </div>
    <div class="card__body">
      body
    </div>
    <div class="card__footer">
      footer
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">

</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .2);
  font-size: 14px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    border-bottom: 1px rgba(0, 0, 0, .1) solid;
  }
  &__body {
    padding: 8px 16px;
  }
  &__footer {
    padding: 8px 16px;
    border-top: 1px rgba(0, 0, 0, .1) solid;
  }
}
</style>