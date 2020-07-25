<template>
  <div :class="shadow? 'card--shadow': 'card'">
    <div v-if="$slots.header" class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
declare const props: {
  shadow?: boolean
}

export default {}
</script>

<style lang="scss">
%card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  font-size: 14px;
}

.card {
  @extend %card;
  border: 1px rgba(0, 0, 0, .08) solid;

  &--shadow {
    @extend %card;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .2);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    border-bottom: 1px rgba(0, 0, 0, .08) solid;
  }
  &__body {
    padding: 16px 16px;
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 16px;
    border-top: 1px rgba(0, 0, 0, .08) solid;
  }
}
</style>