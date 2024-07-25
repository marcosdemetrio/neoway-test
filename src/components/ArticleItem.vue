<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetail() {
      this.$emit('open-detail', this.article)
    }
  }
}
</script>

<template>
  <article
    class="article-item"
    @click="goToDetail"
    role="button"
    tabindex="0"
    @keydown.enter="goToDetail"
    @keydown.space="goToDetail"
    aria-label="Open article detail"
  >
    <h2 class="article-title">{{ article.title }}</h2>
    <p class="article-description">{{ article.description }}</p>
  </article>
</template>

<style scoped>
.article-item {
  background-color: var(--color-background);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.article-item:hover,
.article-item:focus {
  background-color: var(--color-background-mute);
  outline: none;
}

.article-title {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.article-description {
  color: var(--color-text);
}
</style>
