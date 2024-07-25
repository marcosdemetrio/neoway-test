<script>
export default {
  name: 'ArticleDetail',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      const date = new Date(this.article.publishedAt)
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
}
</script>

<template>
  <article class="article-detail">
    <section class="article-header">
      <h1>{{ article.title }}</h1>
      <p class="article-author">By {{ article.author }}</p>
      <p class="article-date">{{ formattedDate }}</p>
    </section>
    <section class="article-image" v-if="article.urlToImage">
      <div class="image-placeholder"></div>
      <img :src="article.urlToImage" :alt="article.title" />
    </section>
    <section class="article-content">
      <p>{{ article.content }}</p>
    </section>
    <section class="article-links">
      <a :href="article.url" target="_blank" rel="noopener noreferrer">Read full article</a>
    </section>
  </article>
</template>

<style scoped>
.article-detail {
  padding: 3rem 1rem 1rem;
}

.article-header {
  margin-bottom: 1rem;
}

.article-header h1 {
  max-width: 90%;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.article-author,
.article-date {
  color: var(--color-text);
}

.article-image {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: var(--color-background-mute);
  border-radius: 8px;
  overflow: hidden;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-background-mute);
}

.article-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: opacity 0.3s ease-in-out;
}

.article-content {
  margin: 1rem 0;
  color: var(--color-text);
}

.article-links a {
  color: var(--color-link);
  text-decoration: none;
}

.article-links a:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
}
</style>
