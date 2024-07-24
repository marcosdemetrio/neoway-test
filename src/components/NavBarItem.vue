<script>
export default {
  name: 'NavBarItem',
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <router-link :to="to" class="navbar-item">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.navbar-item {
  color: var(--color-text);
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1rem;
}

.navbar-item:hover {
  text-decoration: underline;
}
</style>
