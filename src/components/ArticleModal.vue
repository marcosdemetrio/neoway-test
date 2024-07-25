<script>
import ArticleDetail from './ArticleDetail.vue'

export default {
  components: {
    ArticleDetail
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    isFavorited() {
      return this.$store.getters.favoritedArticles.some(
        (favArticle) => favArticle.url === this.article.url
      )
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    toggleFavorite() {
      if (this.isFavorited) {
        this.$store.dispatch('removeFavoriteArticle', this.article.url)
      } else {
        this.$store.dispatch('addFavoriteArticle', this.article)
      }
    }
  }
}
</script>

<template>
  <div
    v-if="article"
    class="modal-overlay"
    @click.self="close"
    role="dialog"
    aria-labelledby="modal-title"
    aria-modal="true"
  >
    <div class="modal-content">
      <button role="button" aria-label="Close" class="close-button" @click="close">
        <img src="@/assets/close.webp" alt="Close" class="close-img" />
      </button>
      <button role="button" aria-label="Favorite" class="favorite-button" @click="toggleFavorite">
        <img
          v-if="isFavorited"
          src="@/assets/favorited.webp"
          alt="Unfavorite"
          class="favorite-img"
        />
        <img v-else src="@/assets/unfavorited.webp" alt="Favorite" class="favorite-img" />
      </button>
      <ArticleDetail :article="article" />
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: var(--color-background);
  padding: 1rem;
  border-radius: 8px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  width: 100%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-button,
.favorite-button {
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vt-c-white-mute);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-button {
  right: 10px;
}

.favorite-button {
  right: 65px;
}

.close-button:hover,
.favorite-button:hover {
  background-color: var(--vt-c-white-soft);
}

.close-img {
  width: 1rem;
  height: 1rem;
}

.favorite-img {
  width: 1.6rem;
  height: 1.6rem;
}
</style>
