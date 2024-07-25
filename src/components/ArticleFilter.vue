<script>
export default {
  methods: {
    onInput(event) {
      this.$emit('filter', event.target.value)
    }
  }
}
</script>

<template>
  <div>
    <input
      class="filter"
      type="text"
      placeholder="Search"
      @input="onInput"
      aria-label="Search articles"
    />
  </div>
</template>

<style scoped>
.filter {
  padding: 20px;
  font-size: 20px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  transition:
    border-color 0.3s,
    background-color 0.3s;
}

.filter::placeholder {
  color: var(--color-text-dark-2);
}

.filter:focus {
  border-color: var(--color-border-hover);
  background-color: var(--color-background-mute);
}
</style>
