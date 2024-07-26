<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <p class="error-message">{{ message }}</p>
</template>

<style scoped>
.error-message {
  text-align: center;
  font-size: 2rem;
  color: var(--color-text);
  margin-top: 8rem;
}
</style>
