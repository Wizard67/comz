<template>
  <section :class="cardClassName">
    <div v-if="$slots.header" class="c-card__header">
      <slot name="header"></slot>
    </div>
    <div class="c-card__body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="c-card__footer">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<script setup="props, { emit }" lang="ts">
import { computed } from 'vue'
import { useClassName } from '@comz/vca'

declare const props: {
  shadow: boolean
}

export const cardClassName = useClassName('c-card', {
  'shadow': computed(() => props.shadow)
})

export default {}
</script>

<style lang="scss">
$block: '.c-card';

%card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: white;
  font-size: 14px;
}
%card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px rgba(0, 0, 0, .08) solid;
}
%card-body {
  padding: 16px 16px;
}
%card-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 16px;
  border-top: 1px rgba(0, 0, 0, .08) solid;
}

#{$block} {
  @extend %card;
  border: 1px rgba(0, 0, 0, .08) solid;

  &__header { @extend %card-header; }
  &__body { @extend %card-body; }
  &__footer { @extend %card-footer; }
}

#{$block}--shadow {
  @extend %card;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .2);

  &__header { @extend %card-header; }
  &__body { @extend %card-body; }
  &__footer { @extend %card-footer; }
}
</style>