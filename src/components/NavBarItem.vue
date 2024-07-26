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
  <router-link :to="to" class="navbar-item" exact-active-class="active">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.navbar-item {
  color: var(--color-text);
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: 600;
}

.navbar-item:hover {
  text-decoration: underline;
}

.active {
  text-decoration: underline;
}
</style>
