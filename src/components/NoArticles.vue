<script>
export default {
  name: 'NoArticles'
}
</script>

<template>
  <p class="no-articles">
    <slot></slot>
  </p>
</template>

<style scoped>
.no-articles {
  text-align: center;
  font-size: 2rem;
  color: var(--color-text);
  margin-top: 8rem;
}
</style>
