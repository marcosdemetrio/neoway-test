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
  methods: {
    close() {
      this.$emit('close')
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
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-button {
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vt-c-text-light-2);
  background-color: var(--vt-c-white-mute);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-button:hover {
  background-color: var(--vt-c-white-soft);
}

.close-img {
  width: 2rem;
  height: 2rem;
}
</style>
